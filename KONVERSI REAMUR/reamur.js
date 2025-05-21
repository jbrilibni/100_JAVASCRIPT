 function konversiReamur() {
      const r = parseFloat(document.getElementById("reamur").value);
      if (isNaN(r)) {
        document.getElementById("output").innerHTML = "Masukkan angka suhu Reamur yang valid!";
        return;
      }

      const c = (5 / 4) * r;
      const f = (9 / 4) * r + 32;
      const k = c + 273.15;

      const hasil = `
        <strong>Hasil Konversi:</strong><br>
        ${c.toFixed(2)} °C (Celsius)<br>
        ${f.toFixed(2)} °F (Fahrenheit)<br>
        ${k.toFixed(2)} K (Kelvin)
      `;

      document.getElementById("output").innerHTML = hasil;
    }