 function cekLusa() {
      const hari = document.getElementById('hariInput').value.toLowerCase().trim();
      const result = document.getElementById('result');

      const hariLusaMap = {
        senin: 'rabu',
        selasa: 'kamis',
        rabu: 'jumat',
        kamis: 'sabtu',
        jumat: 'minggu',
        sabtu: 'senin',
        minggu: 'selasa'
      };

      if (hariLusaMap[hari]) {
        result.innerHTML = `<b>lusa adalah ${hariLusaMap[hari]}</b>`;
      } else {
        result.textContent = 'Ini bukan nama hari yang valid.';
      }
    }