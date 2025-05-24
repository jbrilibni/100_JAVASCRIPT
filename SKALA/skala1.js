  function hitungSkala() {
      const jarak = parseFloat(document.getElementById('jarak').value);
      const skala = parseFloat(document.getElementById('skala').value);
      const hasil = document.getElementById('hasil');

      if (isNaN(jarak) || jarak <= 0) {
        hasil.textContent = 'Masukkan jarak peta yang valid.';
        return;
      }
      if (isNaN(skala) || skala <= 0) {
        hasil.textContent = 'Masukkan angka skala peta yang valid.';
        return;
      }

      // Rumus: jarak sebenarnya = (jarak peta * skala) / 100000 (cm ke km)
      const jarakSebenarnya = (jarak * skala) / 100000;

      hasil.textContent = `Jarak sebenarnya adalah ${jarakSebenarnya.toFixed(3)} KM.`;
    }