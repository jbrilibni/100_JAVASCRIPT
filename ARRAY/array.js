let buah = ['apel', 'nanas', 'semangka', 'mangga', 'buah naga'];

        // Tampilkan buah ke-2
        document.getElementById("hasil1").textContent = "Buah ke-2 adalah: " + buah[1];

        // Ubah buah ke-3 menjadi melon
        buah[2] = 'melon';

        // Tambahkan 'lemon' ke akhir list
        buah.push('lemon');

        // Tampilkan seluruh daftar buah
        const daftar = document.getElementById("daftarBuah");
        buah.forEach((item, index) => {
            const li = document.createElement("li");
            li.textContent = `Buah ke-${index + 1}: ${item}`;
            daftar.appendChild(li);
        });

        // Tampilkan array akhir
        document.getElementById("hasil2").textContent = "Daftar akhir buah: " + JSON.stringify(buah);
