 function konversiBerat() {
      const beratInput = parseFloat(document.getElementById('berat').value);
      const satuan = document.getElementById('satuan').value;
      const hasil = document.getElementById('hasil');

      if (isNaN(beratInput) || beratInput <= 0) {
        hasil.textContent = 'Masukkan berat badan yang valid.';
        return;
      }
      if (satuan !== 'k' && satuan !== 'p') {
        hasil.textContent = 'Pilih satuan yang valid.';
        return;
      }

      let beratBaru, satuanBaru;

      if (satuan === 'k') {
        beratBaru = beratInput * 2.205;
        satuanBaru = 'lbs';
      } else {
        beratBaru = beratInput / 2.205;
        satuanBaru = 'kg';
      }

      hasil.textContent = `Berat kamu adalah: ${beratBaru.toFixed(2)} ${satuanBaru}.`;
    }
    