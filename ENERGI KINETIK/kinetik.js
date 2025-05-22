   function hitungEnergiKinetik() {
      const massa = parseFloat(document.getElementById("massa").value);
      const kecepatan = parseFloat(document.getElementById("kecepatan").value);
      const output = document.getElementById("output");

      if (isNaN(massa) || isNaN(kecepatan) || massa < 0 || kecepatan < 0) {
        output.innerHTML = "Masukkan nilai massa dan kecepatan yang valid.";
        return;
      }

      const energiKinetik = 0.5 * massa * kecepatan * kecepatan;
      output.innerHTML = `Energi Kinetik = ${energiKinetik.toFixed(2)} Joule`;
    }