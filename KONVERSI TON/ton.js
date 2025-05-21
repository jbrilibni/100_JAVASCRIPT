 function konversiTon() {
      const t = parseFloat(document.getElementById("ton").value);
      if (isNaN(t)) {
        document.getElementById("output").innerHTML = "Masukkan angka yang valid!";
        return;
      }

      const g = t * 1000000;
      const kg = t * 1000;
      const lb = t * 2204.62;
      const oz = t * 35274;

      const hasil = `
        <strong>Hasil Konversi:</strong><br>
        ${g.toLocaleString()} Gram<br>
        ${kg.toLocaleString()} Kilogram<br>
        ${lb.toFixed(2)} Pound<br>
        ${oz.toFixed(2)} Ounce
      `;

      document.getElementById("output").innerHTML = hasil;
    }