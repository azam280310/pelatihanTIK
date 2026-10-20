 // Memastikan seluruh struktur HTML sudah selesai dimuat sebelum menjalankan script
document.addEventListener('DOMContentLoaded', function() {
  
    // 1. Pilih elemen tombol berdasarkan ID 'sapaButton'
    const tombolSapa = document.getElementById('sapaButton');

    // Pastikan tombol ditemukan sebelum menambahkan aksi (mencegah eror)
    if (tombolSapa) {
        // 2. Tambahkan 'event listener' untuk mendeteksi aksi klik pada tombol
        tombolSapa.addEventListener('click', function() {
            // 3. Jalankan pesan peringatan (alert) ketika tombol diklik
            alert('Halo! Terima kasih sudah berkunjung!');
        });
    }

});
