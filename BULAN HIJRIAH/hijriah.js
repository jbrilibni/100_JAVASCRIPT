function jalankanProgram() {
    const output = document.getElementById("output");
    output.textContent = ""; // Kosongkan output

    // Daftar bulan Hijriyah
    let bulan = [
        'Muharram',
        'Safar',
        'Rabiul Awal',
        'Rabiul Akhir',
        'Jumadil Awal',
        'Jumadil Akhir',
        'Rajab',
        'Sya\'ban',
        'Ramadhan',
        'Syawal',
        'Dzulkaidah',
        'Dzulhijjah'
    ];

    // Print bulan ke-3 dan ke-10
    output.textContent += bulan[2] + "\n";
    output.textContent += bulan[9] + "\n";

    // Update nama bulan ke-1 dan ke-8
    bulan[0] = "Al-Muharram";
    bulan[7] = "Sha'ban";


    // Tambahkan bulan tambahan
    bulan.push("Maulid (opsional)");

    // Cetak semua bulan dengan nomor
    output.textContent += "\nDaftar bulan:\n";
    let i = 1;
    for (let data of bulan) {
        output.textContent += `Bulan ke-${i} : ${data}\n`;
        i++;
    }
}