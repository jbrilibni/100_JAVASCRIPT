  function konversiJam() {
      const input = document.getElementById("jam24").value;
      if (input === "") {
        document.getElementById("hasil13").innerText = "Harap masukkan angka jam.";
        return;
      }

      let jam = parseInt(input);

      if (isNaN(jam) || jam < 0 || jam > 23) {
        document.getElementById("hasil13").innerText = "Masukkan jam antara 0–23.";
        return;
      }

      const ampm = jam >= 12 ? "PM" : "AM";
      const jam12 = jam % 12 === 0 ? 12 : jam % 12;

      document.getElementById("hasil13").innerText = `Jam 12-jam: ${jam12} ${ampm}`;
    }