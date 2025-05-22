 function hitungEnergiPotensial() {
      const massa = parseFloat(document.getElementById("massa").value);
      const tinggi = parseFloat(document.getElementById("tinggi").value);
      const g = 10; // percepatan gravitasi tetap
      const output = document.getElementById("output");

      if (isNaN(massa) || isNaN(tinggi) || massa < 0 || tinggi < 0) {
        output.innerHTML = "Masukkan nilai massa dan ketinggian yang valid.";
        return;
      }

      const ep = massa * g * tinggi;
      output.innerHTML = `Energi potensialnya adalah: ${ep.toFixed(2)} Joule`;
    }