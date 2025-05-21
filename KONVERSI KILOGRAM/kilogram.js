function konversi() {
      const kg = parseFloat(document.getElementById("kg").value);
      if (isNaN(kg)) {
        document.getElementById("output").innerHTML = "Masukkan angka yang valid!";
        return;
      }

      const gram = kg * 1000;
      const ton = kg / 1000;
      const pound = kg * 2.20462;
      const ounce = kg * 35.274;

      const hasil = `
        <strong>Hasil Konversi:</strong><br>
        ${gram.toFixed(2)} Gram<br>
        ${ton.toFixed(5)} Ton<br>
        ${pound.toFixed(2)} Pound<br>
        ${ounce.toFixed(2)} Ounce
      `;

      document.getElementById("output").innerHTML = hasil;
    }