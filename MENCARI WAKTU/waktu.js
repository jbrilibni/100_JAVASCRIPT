function hitungWaktu() {
      const s = parseFloat(document.getElementById("jarak").value);
      const v = parseFloat(document.getElementById("kecepatan").value);

      if (isNaN(s) || isNaN(v) || v === 0) {
        document.getElementById("output").innerHTML = "Mohon masukkan angka yang valid dan kecepatan tidak boleh 0!";
        return;
      }

      const t = s / v;

      document.getElementById("output").innerHTML = `
        <strong>Hasil:</strong><br>
        Waktu yang dibutuhkan adalah <strong>${t.toFixed(2)}</strong> detik
      `;
    }