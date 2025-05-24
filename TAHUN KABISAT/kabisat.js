function isKabisat(tahun) {
      return (tahun % 4 === 0 && tahun % 100 !== 0) || (tahun % 400 === 0);
    }

    function hitungKabisat() {
      const tahunAwal = parseInt(document.getElementById("tahunInput").value);
      const tahunAkhir = 2028;
      const hasilDiv = document.getElementById("hasilKabisat");

      if (isNaN(tahunAwal) || tahunAwal > tahunAkhir || tahunAwal < 0) {
        hasilDiv.innerHTML = "Masukkan tahun yang valid (0 - 2024).";
        return;
      }

      let jumlahKabisat = 0;
      let daftar = "";

      for (let tahun = tahunAwal; tahun <= tahunAkhir; tahun++) {
        if (isKabisat(tahun)) {
          jumlahKabisat++;
          daftar += `Tahun ${tahun} adalah tahun kabisat.<br>`;
        }
      }

      hasilDiv.innerHTML = `
        ${daftar}
        <br><strong>Dari tahun ${tahunAwal} hingga ${tahunAkhir}, terdapat ${jumlahKabisat} tahun kabisat.</strong>
      `;
    }