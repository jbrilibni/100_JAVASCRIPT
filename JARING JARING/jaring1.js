 function hitungKerucut() {
      const r = parseFloat(document.getElementById('jariJari').value);
      const s = parseFloat(document.getElementById('sisiMiring').value);
      const t = parseFloat(document.getElementById('tinggi').value);
      const hasil = document.getElementById('hasilKerucut');

      if (isNaN(r) || isNaN(s) || isNaN(t) || r < 0 || s < 0 || t < 0) {
        hasil.textContent = 'Masukkan semua nilai dengan benar dan positif.';
        return;
      }

      const phi = 3.14;
      const ls = phi * r * s;
      const lp = ls + (phi * r * r);
      const v = (1 / 3) * phi * r * r * t;

      hasil.innerHTML = `
        Jadi luas selimutnya adalah ${ls.toFixed(2)}<br>
        Luas permukaannya adalah ${lp.toFixed(2)}<br>
        Volumenya adalah ${v.toFixed(2)}
      `;
    }