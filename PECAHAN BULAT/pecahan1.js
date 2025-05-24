 function hitung() {
      const pembilang = parseFloat(document.getElementById('pembilang').value);
      const penyebut = parseFloat(document.getElementById('penyebut').value);
      const hasil = document.getElementById('hasil');

      if (isNaN(pembilang) || isNaN(penyebut)) {
        hasil.textContent = 'Harap masukkan kedua angka.';
        return;
      }

      if (penyebut === 0) {
        hasil.textContent = 'Tidak dapat membagi dengan nol.';
      } else {
        const rumus = pembilang / penyebut;
        hasil.textContent = `Hasil konversi: ${rumus}`;
      }
    }