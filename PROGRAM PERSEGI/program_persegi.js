
    function hitungPersegi() {
      const sisi = parseFloat(document.getElementById("sisi").value);
      
      if (isNaN(sisi) || sisi <= 0) {
        document.getElementById("hasil").innerHTML = "Masukkan angka yang benar dan lebih dari 0!";
        return;
      }

      const luas = sisi * sisi;
      const keliling = 4 * sisi;

      document.getElementById("hasil").innerHTML = `
        <p><strong>Luas:</strong> ${luas} cm²</p>
        <p><strong>Keliling:</strong> ${keliling} cm</p>
      `;
    }
