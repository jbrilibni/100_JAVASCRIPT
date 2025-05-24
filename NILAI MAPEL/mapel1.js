function hitungGrade() {
      const mapel = document.getElementById("mapel").value;
      const uts = parseFloat(document.getElementById("uts").value);
      const uas = parseFloat(document.getElementById("uas").value);
      const tugas = parseFloat(document.getElementById("tugas").value);
      const hasil = document.getElementById("hasil");

      if (!mapel || isNaN(uts) || isNaN(uas) || isNaN(tugas)) {
        hasil.textContent = "Silakan isi semua kolom dengan benar.";
        return;
      }

      const rata = (uts + uas + tugas) / 3;
      let grade = "";

      if (rata >= 85) {
        grade = "A";
      } else if (rata >= 70) {
        grade = "B";
      } else if (rata >= 60) {
        grade = "C";
      } else {
        grade = "D";
      }

      hasil.innerHTML = `Untuk mapel <strong>${mapel}</strong>, kamu dapat grade <strong>${grade}</strong> (rata-rata: ${rata.toFixed(2)})`;
    }