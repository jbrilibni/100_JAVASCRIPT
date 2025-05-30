 function balikKata() {
      const kalimat = document.getElementById("kalimat").value.trim();
      const hasil = kalimat.split(" ").reverse().join(" ");
      document.getElementById("hasil").innerText = hasil;
    }