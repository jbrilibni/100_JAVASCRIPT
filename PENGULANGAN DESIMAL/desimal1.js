function konversi() {
      const pembilang = parseFloat(document.getElementById("pembilang").value);
      const penyebut = parseFloat(document.getElementById("penyebut").value);
      const hasilDiv = document.getElementById("hasil");

      hasilDiv.innerHTML = ""; // reset hasil

      if (isNaN(pembilang) || isNaN(penyebut)) {
        hasilDiv.innerHTML = `<div class="error">Harap isi kedua nilai dengan angka.</div>`;
        return;
      }

      if (penyebut === 0) {
        hasilDiv.innerHTML = `<div class="error">Tidak dapat membagi dengan nol.</div>`;
      } else {
        const hasil = pembilang / penyebut;
        hasilDiv.innerHTML = `
          <div class="result">
            Hasil konversi dari <strong>${pembilang}/${penyebut}</strong> adalah:<br>
            ${hasil}
          </div>
        `;
      }
    }