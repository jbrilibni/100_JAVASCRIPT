 function hitungUpah() {
      const golongan = document.getElementById("golongan").value;
      const jamKerja = parseInt(document.getElementById("jamKerja").value);
      const jamLembur = parseInt(document.getElementById("jamLembur").value);
      const hasil = document.getElementById("hasil");

      let upahPerJam = 0;

      if (golongan === 'A') upahPerJam = 4000;
      else if (golongan === 'B') upahPerJam = 5000;
      else if (golongan === 'C') upahPerJam = 6000;
      else if (golongan === 'D') upahPerJam = 7500;

      const upahKerja = jamKerja * upahPerJam;
      const upahLembur = jamLembur * (upahPerJam * 1.5);
      const totalUpah = upahKerja + upahLembur;

      hasil.innerHTML = `
        <strong>Hasil Perhitungan:</strong><br>
        Upah kerja: Rp. ${upahKerja.toLocaleString()}<br>
        Upah lembur: Rp. ${upahLembur.toLocaleString()}<br>
        <strong>Total upah: Rp. ${totalUpah.toLocaleString()}</strong>
      `;
    }