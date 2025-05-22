  function hitungDiskon() {
      const total = parseFloat(document.getElementById("totalHarga").value);
      const output = document.getElementById("output");

      if (isNaN(total) || total < 0) {
        output.style.display = "block";
        output.style.color = "#d32f2f";
        output.style.backgroundColor = "#ffebee";
        output.style.border = "1px solid #ffcdd2";
        output.innerHTML = "Masukkan total harga yang valid.";
        return;
      }

      let diskon = 0;
      let pesan = "";

      if (total >= 100000) {
        diskon = total * 0.05;
        pesan = " WUUIIHH! Kamu mendapat diskon sebesar 5%.<br>";
      } else {
        pesan = "Maaf, kamu tidak mendapatkan diskon.<br>";
      }

      const totalBayar = total - diskon;

      output.style.display = "block";
      output.style.color = "#2e7d32";
      output.style.backgroundColor = "#e8f5e9";
      output.style.border = "1px solid #c8e6c9";
      output.innerHTML = `
        ${pesan}
        Diskon Kamu = <strong>Rp ${diskon.toFixed(2)}</strong><br>
        Total yang harus dibayar = <strong>Rp ${totalBayar.toFixed(2)}</strong>
      `;
    }