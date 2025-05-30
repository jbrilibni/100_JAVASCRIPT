  function gantiSpasi() {
            const kalimat = document.getElementById("inputKalimat").value;
            const kalimatBaru = kalimat.replace(/ /g, "-");
            document.getElementById("hasil").innerText = kalimatBaru;
        }