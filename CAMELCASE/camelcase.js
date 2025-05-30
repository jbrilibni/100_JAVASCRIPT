  function ubahCamelCase() {
      const kalimat = document.getElementById("kalimat").value;
      const kataArray = kalimat.toLowerCase().split(" ");
      const hasil = kataArray.map((kata, i) => {
        if (i === 0) return kata;
        return kata.charAt(0).toUpperCase() + kata.slice(1);
      }).join("");
      document.getElementById("hasil").innerText = hasil;
    }