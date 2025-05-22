 function cekAngka() {
      const input = document.getElementById("angkaInput").value;
      const result = document.getElementById("result");

      if (input === "") {
        result.textContent = "Masukkan dulu angkanya ya!";
        return;
      }

      const angka = parseInt(input);
      if (angka % 2 === 0) {
        result.textContent = angka + " adalah bilangan genap.";
      } else {
        result.textContent = angka + " adalah bilangan ganjil.";
      }
    }