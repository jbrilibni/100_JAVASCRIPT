 function kapitalAwal() {
            const kalimat = document.getElementById("kalimat").value;
            const hasil = kalimat.split(" ").map(kata =>
                kata.charAt(0).toUpperCase() + kata.slice(1).toLowerCase()
            ).join(" ");
            document.getElementById("hasil").innerText = hasil;
        }