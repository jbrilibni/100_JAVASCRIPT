 function hitungHuruf() {
            const kalimat = document.getElementById("kalimat").value;
            // Menghitung jumlah huruf (abaikan spasi dan karakter non-huruf)
            const jumlahHuruf = kalimat.replace(/[^a-zA-Z]/g, "").length;
            document.getElementById("hasil").innerText = "Jumlah huruf: " + jumlahHuruf;
        }