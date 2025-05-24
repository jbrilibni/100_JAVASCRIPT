 function ulangPesan() {
      const pesan = document.getElementById('pesan').value.trim();
      const jumlah = parseInt(document.getElementById('jumlah').value);
      const hasilDiv = document.getElementById('hasil');
      hasilDiv.innerHTML = '';

      if (!pesan) {
        hasilDiv.innerHTML = '<div class="error">Masukkan pesan terlebih dahulu.</div>';
        return;
      }

      if (isNaN(jumlah) || jumlah < 1) {
        hasilDiv.innerHTML = '<div class="error">Masukkan jumlah pengulangan yang valid (minimal 1).</div>';
        return;
      }

      let hasilText = '';
      for (let i = 1; i <= jumlah; i++) {
        hasilText += `${i}. ${pesan}\n`;
      }

      hasilDiv.innerHTML = `<div class="result">${hasilText}</div>`;
    }