 function hitungJarak() {
      const fob = parseFloat(document.getElementById("fob").value);
      const fp = parseFloat(document.getElementById("fp").value);
      const fok = parseFloat(document.getElementById("fok").value);

      if (isNaN(fob) || isNaN(fp) || isNaN(fok)) {
        document.getElementById("output").innerHTML = "Mohon isi semua nilai dengan benar!";
        return;
      }

      const panjangTeropong = fob + (4 * fp) + fok;

      document.getElementById("output").innerHTML = `
        <strong>Hasil Perhitungan:</strong><br>
        Panjang Teropong: <strong>${panjangTeropong.toFixed(2)}</strong> mm
      `;
    }