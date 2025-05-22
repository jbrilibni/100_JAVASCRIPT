function tentukanZat() {
      const suhu = parseInt(document.getElementById("suhuInput").value);
      const hasil = document.getElementById("hasilZat");

      if (isNaN(suhu)) {
        hasil.textContent = "Masukkan angka suhu yang valid.";
        return;
      }

      if (suhu <= 0) {
        hasil.innerHTML = "<b>Ini adalah zat padat.</b>";
      } else if (suhu < 100) {
        hasil.innerHTML = "<b>Ini adalah zat cair.</b>";
      } else {
        hasil.innerHTML = "<b>Ini adalah zat uap.</b>";
      }
    }