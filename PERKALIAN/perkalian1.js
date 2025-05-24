 function tampilkanPerkalian() {
      const jumlah = parseInt(document.getElementById('jumlah').value);
      const hasilDiv = document.getElementById('hasil');
      hasilDiv.innerHTML = '';

      if (isNaN(jumlah) || jumlah < 1) {
        hasilDiv.innerHTML = '<div style="color:red;">Masukkan angka valid (minimal 1).</div>';
        return;
      }

      let teksHasil = '';
      for (let i = 1; i <= jumlah; i++) {
        for (let j = 1; j <= 2; j++) {
          const hasil = i * j;
          teksHasil += `${j} x ${i} = ${hasil}  `;
        }
        teksHasil += '\n';
      }

      hasilDiv.innerHTML = `<pre class="result">${teksHasil}</pre>`;
    }