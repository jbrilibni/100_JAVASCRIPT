  function cekKondisi() {
      const kondisiAir = document.getElementById('kondisiAir').value.trim().toLowerCase();
      const suhu = parseInt(document.getElementById('suhuRuangan').value);
      const kondisiMobil = document.getElementById('kondisiMobil').value.trim().toLowerCase();
      const nilaiX = parseInt(document.getElementById('nilaiX').value);
      let hasilText = '';

      if (kondisiAir === 'mendidih') {
        hasilText += 'Matikan kompor\n';
      } else if (kondisiAir === 'anget') {
        hasilText += 'Tunggu sebentar lagi\n';
      } else if (kondisiAir === 'dingin') {
        hasilText += 'Nyalakan api kompor paling besar\n';
      } else if (kondisiAir !== '') {
        hasilText += 'Kondisi air tidak dikenali\n';
      }

      if (!isNaN(suhu)) {
        if (suhu >= 50) {
          hasilText += 'Nyalakan tanda bahaya\n';
        } else if (suhu <= 20) {
          hasilText += 'Matikan AC\n';
        } else {
          hasilText += 'Suhu ruangan nya berapa bang?\n';
        }
      } else {
        hasilText += 'Masukkan suhu ruangan yang valid\n';
      }

      if (kondisiMobil === 'rejet') {
        hasilText += 'Jangan lupa service bang\n';
      } else if (kondisiMobil === 'bagus') {
        hasilText += 'Mantap bang\n';
      } else if (kondisiMobil !== '') {
        hasilText += 'Lanjut bang pake mobil nya\n';
      }

      if (!isNaN(nilaiX)) {
        if (nilaiX % 2 === 0) {
          hasilText += 'Genap\n';
        } else {
          hasilText += 'Ganjil\n';
        }
      } else {
        hasilText += 'Masukkan nilai x yang valid\n';
      }

      document.getElementById('hasil').textContent = hasilText;
    }