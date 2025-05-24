   function konversiRomawi() {
      const angka = parseInt(document.getElementById('numberInput').value);
      const hasil = document.getElementById('hasilKonversi');

      const romawi = {
        1: 'I',
        2: 'II',
        3: 'III',
        4: 'IV',
        5: 'V',
        6: 'VI',
        7: 'VII',
        8: 'VIII',
        9: 'IX',
        10: 'X'
      };

      if (romawi[angka]) {
        hasil.textContent = `Angka Romawi: ${romawi[angka]}`;
      } else {
        hasil.textContent = 'Ini bukan angka 1 - 10';
      }
    }