 function konversiJarak() {
      const cmInput = parseInt(document.getElementById("cmInput").value);
      const KILOMETER = 100000;
      const METER = 100;

      if (isNaN(cmInput) || cmInput < 0) {
        document.getElementById("output").innerHTML = "Silakan masukkan bilangan bulat positif.";
        return;
      }

      let sisaCm = cmInput;
      const km = Math.floor(sisaCm / KILOMETER);
      sisaCm %= KILOMETER;

      const m = Math.floor(sisaCm / METER);
      sisaCm %= METER;

      document.getElementById("output").innerHTML = `<b>${km} km ${m} m ${sisaCm} cm</b>`;
    }