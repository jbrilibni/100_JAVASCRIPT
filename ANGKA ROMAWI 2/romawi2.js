 function konversiRomawi() {
      let n = parseInt(document.getElementById("numberInput").value);
      const hasilElemen = document.getElementById("hasilKonversi");

      if (isNaN(n) || n <= 0) {
        hasilElemen.textContent = "Masukkan bilangan bulat positif yang valid.";
        return;
      }

      const romawi = [
        [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
        [100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
        [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]
      ];

      let hasil = "";
      let angkaAsli = n;

      for (const [nilai, simbol] of romawi) {
        while (n >= nilai) {
          hasil += simbol;
          n -= nilai;
        }
      }

      hasilElemen.textContent = `Angka Romawi dari ${angkaAsli} adalah ${hasil}`;
    }
  