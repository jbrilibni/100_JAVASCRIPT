  function hitungTranslasi() {
      const x = parseInt(document.getElementById("x").value);
      const y = parseInt(document.getElementById("y").value);
      const a = parseInt(document.getElementById("a").value);
      const b = parseInt(document.getElementById("b").value);

      if (isNaN(x) || isNaN(y) || isNaN(a) || isNaN(b)) {
        document.getElementById("hasilTranslasi").innerHTML = "Masukkan semua nilai dengan benar.";
        return;
      }

      const A = x + a;
      const B = y + b;

      document.getElementById("hasilTranslasi").innerHTML = `
        Hasil translasi dari titik (${x}, ${y}) adalah (${A}, ${B})
      `;
    }