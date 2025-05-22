  function cekWaktu() {
      const jam = parseInt(document.getElementById("jamInput").value);
      const hasil = document.getElementById("hasil");

      if (isNaN(jam) || jam < 1 || jam > 24) {
        hasil.textContent = "-----pesan error-----";
        return;
      }

      if (jam >= 4 && jam <= 10) {
        hasil.textContent = "-----selamat pagi bosku-----";
      } else if (jam >= 11 && jam <= 14) {
        hasil.textContent = "-----selamat siang bosku-----";
      } else if (jam >= 15 && jam <= 17) {
        hasil.textContent = "-----selamat sore bosku-----";
      } else if (jam === 18) {
        hasil.textContent = "-----magrib bosku-----";
      } else if (jam >= 19 && jam <= 24) {
        hasil.textContent = "-----selamat malam bosku-----";
      } else if (jam >= 1 && jam <= 3) {
        hasil.textContent = "-----tidur bosku-----";
      }
    }