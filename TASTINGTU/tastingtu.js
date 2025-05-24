 const pilihan = ["batu", "gunting", "kertas"];

  const rules = {
    batu: ["gunting"],
    gunting: ["kertas"],
    kertas: ["batu"],
  };

  const resultBox = document.getElementById('resultBox');
  const playAgainBtn = document.getElementById('playAgain');

  function play(userinput) {
    const bot = pilihan[Math.floor(Math.random() * pilihan.length)];
    let hasilText = `Kamu memilih: ${userinput}\nBot memilih: ${bot}\n\n`;

    if (!pilihan.includes(userinput)) {
      hasilText = "==============================\n===     INPUT TIDAK VALID   ===\n==============================";
    } else if(userinput === bot) {
      hasilText += "==============================\n===           SERI          ===\n==============================";
    } else if(rules[userinput].includes(bot)) {
      hasilText += "==============================\n===       KAMU MENANG       ===\n==============================";
    } else {
      hasilText += "==============================\n===       KAMU KALAH        ===\n==============================";
    }

    resultBox.textContent = hasilText;
    playAgainBtn.style.display = 'inline-block';
    disableChoices(true);
  }

  function resetGame() {
    resultBox.textContent = "Pilih salah satu: Batu, Gunting, atau Kertas";
    playAgainBtn.style.display = 'none';
    disableChoices(false);
  }

  function disableChoices(disable) {
    const buttons = document.querySelectorAll('.choices button');
    buttons.forEach(btn => btn.disabled = disable);
  }