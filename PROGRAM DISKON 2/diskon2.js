   function hitungDiskon() {
      const input = parseFloat(document.getElementById('total').value);
      const output = document.getElementById('output');

      if (isNaN(input) || input < 0) {
        output.className = 'result fail';
        output.style.display = 'block';
        output.innerHTML = 'Masukkan angka yang valid.';
        return;
      }

      const batasDiskon = 100000;
      const persenDiskon = 25;

      if (input > batasDiskon) {
        const diskon = input * persenDiskon / 100;
        const totalBayar = input - diskon;
        output.className = 'result success';
        output.innerHTML = `
          Kamu mendapatkan diskon 25% <br>
          Diskon: Rp ${diskon.toFixed(2)}<br>
          Total bayar: Rp ${totalBayar.toFixed(2)}
        `;
      } else {
        output.className = 'result fail';
        output.innerHTML = `
          Maaf, total belanja Rp ${input.toFixed(2)} belum memenuhi syarat diskon.
        `;
      }

      output.style.display = 'block';
    }