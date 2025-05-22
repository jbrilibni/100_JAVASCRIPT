function hitungBiaya() {
      const jamMasuk = parseInt(document.getElementById("jamMasuk").value);
      const jamKeluar = parseInt(document.getElementById("jamKeluar").value);
      const output = document.getElementById("output");

      if (isNaN(jamMasuk) || isNaN(jamKeluar)) {
        output.innerHTML = "<span class='error'>Masukkan jam yang valid.</span>";
        return;
      }

      if (jamKeluar < jamMasuk) {
        output.innerHTML = "<span class='error'>Jam keluar tidak boleh lebih awal dari jam masuk.</span>";
        return;
      }

      let lamaParkir = jamKeluar - jamMasuk;
      let biaya = 2000;

      if (lamaParkir > 2) {
        biaya += (lamaParkir - 2) * 500;
      }

      output.innerHTML = `Biaya = Rp ${biaya}`;
    }