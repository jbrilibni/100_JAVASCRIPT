 function hitungDiskon() {
      const br1 = parseFloat(document.getElementById('br1').value) || 0;
      const br2 = parseFloat(document.getElementById('br2').value) || 0;
      const br3 = parseFloat(document.getElementById('br3').value) || 0;
      const br4 = parseFloat(document.getElementById('br4').value) || 0;

      const total = br1 + br2 + br3 + br4;
      const hasil = document.getElementById('hasil');

      hasil.style.display = 'block';

      if (total >= 100000) {
        const diskon = total * 7.5 / 100;
        const totalBayar = total - diskon;
        hasil.innerHTML = `
          <p>Total Belanja: <strong>Rp ${total.toFixed(2)}</strong></p>
          <p class="highlight">Diskon 7.5%: Rp ${diskon.toFixed(2)}</p>
          <p><strong>Total Bayar: Rp ${totalBayar.toFixed(2)}</strong></p>
        `;
      } else {
        hasil.innerHTML = `
          <p>Total Belanja: <strong>Rp ${total.toFixed(2)}</strong></p>
          <p class="highlight">Maaf, tidak mendapat diskon (kurang dari Rp 100.000)</p>
          <p><strong>Total Bayar: Rp ${total.toFixed(2)}</strong></p>
        `;
      }
    }