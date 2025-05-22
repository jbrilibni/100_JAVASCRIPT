 function hitungEnergi() {
      const q = parseFloat(document.getElementById("q").value);
      const v = parseFloat(document.getElementById("v").value);
      const l = parseFloat(document.getElementById("l").value);
      const r = parseFloat(document.getElementById("r").value);
      const t = parseFloat(document.getElementById("t").value);
      const output = document.getElementById("output");

      if ([q, v, l, r, t].some(isNaN)) {
        output.innerHTML = "Mohon masukkan semua nilai dengan benar.";
        return;
      }

      const epl = q * v;
      const eldr = l * l * r * t;

      output.innerHTML = `
        Energi Potensial Listrik: ${epl.toFixed(2)} Joule<br>
        Energi Listrik Dalam Rangkaian: ${eldr.toFixed(2)} Joule
      `;
    }
  