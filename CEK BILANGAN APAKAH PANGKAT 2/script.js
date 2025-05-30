 function cekPangkatDua() {
      const angka = parseInt(document.getElementById("angka").value);
      if (angka <= 0 || isNaN(angka)) {
        document.getElementById("hasil").innerText = "Masukkan angka positif.";
        return;
      }

      let hasil = angka > 0 && (Math.log2(angka) % 1 === 0);
      document.getElementById("hasil").innerText = hasil
        ? `${angka} adalah pangkat dua.`
        : `${angka} bukan pangkat dua.`;
    }