function hitungProtein() {
      const kelamin = document.getElementById('kelamin').value;
      const umur = parseInt(document.getElementById('umur').value);
      const hasil = document.getElementById('hasilProtein');
      hasil.textContent = '';

      if (!kelamin) {
        hasil.textContent = 'Jenis kelamin tidak valid.';
        return;
      }
      if (isNaN(umur) || umur < 1) {
        hasil.textContent = 'Masukan umur yang valid.';
        return;
      }

      let status = '';
      let protein = 0;

      if (kelamin === 'cowok') {
        if (umur >= 1 && umur <= 3) {
          status = 'kamu masih anak anak';
          protein = 14;
        } else if (umur >= 4 && umur <= 8) {
          status = 'kamu masih anak anak';
          protein = 19;
        } else if (umur >= 9 && umur <= 13) {
          status = 'kamu masih anak anak';
          protein = 34;
        } else if (umur >= 14 && umur <= 18) {
          status = 'kamu sudah remaja';
          protein = 52;
        } else if (umur >= 19 && umur <= 50) {
          status = 'kamu sudah dewasa';
          protein = 56;
        } else if (umur > 50) {
          status = 'kamu sudah manula';
          protein = 56;
        }
      } else if (kelamin === 'cewek') {
        if (umur >= 1 && umur <= 3) {
          status = 'kamu masih anak anak';
          protein = 14;
        } else if (umur >= 4 && umur <= 8) {
          status = 'kamu masih anak anak';
          protein = 19;
        } else if (umur >= 9 && umur <= 13) {
          status = 'kamu masih anak anak';
          protein = 34;
        } else if (umur >= 14 && umur <= 18) {
          status = 'kamu sudah remaja';
          protein = 46;
        } else if (umur >= 19 && umur <= 50) {
          status = 'kamu sudah dewasa';
          protein = 46;
        } else if (umur > 50) {
          status = 'kamu sudah manula';
          protein = 46;
        }
      }

      hasil.textContent = `${status}\nProtein yang harus kamu konsumsi perhari adalah ${protein} gram.`;
    }