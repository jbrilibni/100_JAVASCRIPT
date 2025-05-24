  function hitungJarak() {
      const inputCm = parseInt(document.getElementById("jarakInput").value);
      const hasil = document.getElementById("hasilJarak");

      if (isNaN(inputCm) || inputCm < 0) {
        hasil.textContent = "Masukkan jarak dalam cm yang valid.";
        return;
      }

      const CM = 1;
      const M = 100;
      const KM = 100000;

      let sisa = inputCm;
      const km = Math.floor(sisa / KM);
      sisa %= KM;
      const m = Math.floor(sisa / M);
      sisa %= M;
      const cm = sisa / CM;

      hasil.innerHTML = `
        <strong>Hasil Konversi:</strong><br>
        Kilometer (km): <span>${km.toFixed(2)}</span><br>
        Meter (m): <span>${m.toFixed(2)}</span><br>
        Sentimeter (cm): <span>${cm.toFixed(2)}</span>
      `;
    }