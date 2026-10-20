  // 1. pilih tombol berdasarkan ID-nya
  const tombolSapa = document.getElementById('sapaButton');
  // 2. tambahkan 'event listener' umtuk aksi 'click'
  tombolSapa.addEventListener('click', function() {
      // 3. jalankan kode ini ketika tombol di-klilk
      alert('Halo! terima kasih sudah berkunjung!');
  });
