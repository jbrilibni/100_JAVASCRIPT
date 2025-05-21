const angka = Math.floor(Math.random() * 5) + 1;

    function tebakAngka() {
      const userInput = parseInt(document.getElementById('guess').value);
      const output = document.getElementById('output');

      if (isNaN(userInput) || userInput < 1 || userInput > 5) {
        output.innerText = "Masukkan angka valid antara 1 hingga 5.";
        return;
      }

      if (userInput === angka) {
        output.innerText = "KAMU MENANG!! 🎉";
      } else {
        output.innerText = "KAMU KALAH!! 😢";
      }
    }