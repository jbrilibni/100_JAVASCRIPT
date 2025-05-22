 function cekKemarin() {
      const hari = document.getElementById('hariInput').value.toLowerCase().trim();
      const result = document.getElementById('result');

      const hariKemarinMap = {
        senin: 'minggu',
        selasa: 'senin',
        rabu: 'selasa',
        kamis: 'rabu',
        jumat: 'kamis',
        sabtu: 'jumat',
        minggu: 'sabtu'
      };

      if (hariKemarinMap[hari]) {
        result.innerHTML = `<b>Kemarinnya adalah ${hariKemarinMap[hari]}</b>`;
      } else {
        result.textContent = 'Ini bukan nama hari yang valid.';
      }
    }