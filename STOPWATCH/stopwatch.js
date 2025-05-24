 let countdownInterval;

    function startCountdown() {
      clearInterval(countdownInterval);
      let waktu = parseInt(document.getElementById('secondsInput').value);
      if (isNaN(waktu) || waktu <= 0) {
        alert("Masukkan waktu yang valid!");
        return;
      }
      
      countdownInterval = setInterval(() => {
        const detik = waktu % 60;
        const menit = Math.floor((waktu / 60) % 60);
        const jam = Math.floor(waktu / 3600);

        document.getElementById('timer').textContent =
          `${jam.toString().padStart(2,'0')}:${menit.toString().padStart(2,'0')}:${detik.toString().padStart(2,'0')}`;

        if (waktu <= 0) {
          clearInterval(countdownInterval);
          alert("WAKTUNYA HABIS!");
        }
        waktu--;
      }, 1000);
    }