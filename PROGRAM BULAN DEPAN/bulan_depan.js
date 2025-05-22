 function cariBulanDepan() {
      const inputBulan = document.getElementById("bulan").value.trim().toLowerCase();
      const output = document.getElementById("output");

      const daftarBulan = [
        "januari", "februari", "maret", "april", "mei", "juni",
        "juli", "agustus", "september", "oktober", "november", "desember"
      ];

      const index = daftarBulan.indexOf(inputBulan);

      if (index === -1) {
        output.innerHTML = "Ini bukan nama bulan.";
      } else {
        const bulanDepan = daftarBulan[(index + 1) % 12];
        output.innerHTML = `Bulan depan adalah <strong>${bulanDepan.charAt(0).toUpperCase() + bulanDepan.slice(1)}</strong>`;
      }
    }