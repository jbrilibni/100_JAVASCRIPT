 function tukarNilai() {
            let a = document.getElementById("nilaiA").value;
            let b = document.getElementById("nilaiB").value;

            // Tukar menggunakan variabel sementara
            let temp = a;
            a = b;
            b = temp;

            document.getElementById("hasil").innerText = `Setelah ditukar:\nNilai A = ${a}\nNilai B = ${b}`;
        }