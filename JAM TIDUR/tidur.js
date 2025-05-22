 function cekJamTidur() {
      const jam = parseInt(document.getElementById("jamTidur").value);
      const hasil = document.getElementById("hasil");

      if (isNaN(jam) || jam < 1) {
        hasil.innerHTML = `<span class="highlight">Input tidak valid!</span><br>Silakan masukkan bilangan bulat positif.`;
        return;
      }

      let output = "";

      if (jam >= 1 && jam <= 3) {
        output += "<span class='highlight'>Anda harus menjaga pola tidur Anda.</span><br>";
        output += "Dampak buruk:<br>";
        output += "1. Kelelahan ekstrem<br>2. Gangguan kognitif<br>3. Risiko kesehatan mental<br>4. Penyakit fisik<br>5. Potensi kecelakaan";
      } else if (jam === 4) {
        output += "<span class='highlight'>Anda harus menjaga pola tidur Anda.</span><br>";
        output += "Dampak buruk:<br>";
        output += "1. Kelelahan<br>2. Penurunan kinerja<br>3. Mood buruk<br>4. Sulit beradaptasi<br>5. Gangguan fisiologis";
      } else if (jam === 5 || jam === 6) {
        output += "<span class='highlight'>Anda harus menjaga pola tidur Anda.</span><br>";
        output += "Dampak buruk:<br>";
        output += "1. Kelelahan ringan<br>2. Risiko penyakit jantung<br>3. Konsentrasi menurun<br>4. Performa menurun<br>5. Stres meningkat";
      } else if (jam === 7 || jam === 8) {
        output += "<span class='highlight'>Pola tidur Anda sudah bagus.</span><br>";
        output += "Manfaat:<br>";
        output += "1. Pemulihan yang baik<br>2. Kesehatan mental stabil<br>3. Kinerja kognitif meningkat<br>4. Jantung sehat<br>5. Regulasi hormon";
      } else if (jam === 9 || jam === 10) {
        output += "<span class='highlight'>Pola tidur Anda lumayan bagus.</span><br>";
        output += "Manfaat:<br>";
        output += "1. Pemulihan ekstra<br>2. Kreativitas meningkat<br>3. Fokus tajam<br><br>";
        output += "Dampak buruk:<br>";
        output += "1. Kepala sakit<br>2. Sulit bangun<br>3. Risiko penyakit tertentu";
      } else if (jam >= 11) {
        output += "<span class='highlight'>Anda terlalu banyak tidur!</span>";
      }

      hasil.innerHTML = output;
    }