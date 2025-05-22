 function cekHari() {
      const hari = document.getElementById('hari').value.toLowerCase().trim();
      const result = document.getElementById('result');
      
      const hariBesokMap = {
        senin: 'selasa',
        selasa: 'rabu',
        rabu: 'kamis',
        kamis: 'jumat',
        jumat: 'sabtu',
        sabtu: 'minggu',
        minggu: 'senin'
      };
      
      if (hariBesokMap[hari]) {
        result.textContent = `hari besoknya adalah ${hariBesokMap[hari]}`;
      } else {
        result.textContent = 'Ini bukan nama hari yang valid.';
      }
    }