// Database Kosakata Lengkap untuk Anak TK s.d SD Kelas 6 (JJ Kids)
// Berisi kosakata dasar statis dan ribuan kombinasi dinamis ber-emoji yang edukatif.

const KamusData = [
  // === HEWAN (ANIMALS) ===
  { word: 'Ant', mean: 'Semut', topic: 'Hewan 🐱', emoji: '🐜' },
  { word: 'Alligator', mean: 'Buaya', topic: 'Hewan 🐱', emoji: '🐊' },
  { word: 'Bear', mean: 'Beruang', topic: 'Hewan 🐱', emoji: '🐻' },
  { word: 'Bee', mean: 'Lebah', topic: 'Hewan 🐱', emoji: '🐝' },
  { word: 'Bird', mean: 'Burung', topic: 'Hewan 🐱', emoji: '🐦' },
  { word: 'Butterfly', mean: 'Kupu-kupu', topic: 'Hewan 🐱', emoji: '🦋' },
  { word: 'Cat', mean: 'Kucing', topic: 'Hewan 🐱', emoji: '🐱' },
  { word: 'Chicken', mean: 'Ayam', topic: 'Hewan 🐱', emoji: '🐔' },
  { word: 'Cow', mean: 'Sapi', topic: 'Hewan 🐱', emoji: '🐮' },
  { word: 'Dog', mean: 'Anjing', topic: 'Hewan 🐱', emoji: '🐶' },
  { word: 'Dolphin', mean: 'Lumba-lumba', topic: 'Hewan 🐱', emoji: '🐬' },
  { word: 'Duck', mean: 'Bebek', topic: 'Hewan 🐱', emoji: '🦆' },
  { word: 'Eagle', mean: 'Elang', topic: 'Hewan 🐱', emoji: '🦅' },
  { word: 'Elephant', mean: 'Gajah', topic: 'Hewan 🐱', emoji: '🐘' },
  { word: 'Fish', mean: 'Ikan', topic: 'Hewan 🐱', emoji: '🐟' },
  { word: 'Frog', mean: 'Katak', topic: 'Hewan 🐱', emoji: '🐸' },
  { word: 'Fox', mean: 'Rubah', topic: 'Hewan 🐱', emoji: '🦊' },
  { word: 'Giraffe', mean: 'Jerapah', topic: 'Hewan 🐱', emoji: '🦒' },
  { word: 'Goat', mean: 'Kambing', topic: 'Hewan 🐱', emoji: '🐐' },
  { word: 'Hippo', mean: 'Kuda Nil', topic: 'Hewan 🐱', emoji: '🦛' },
  { word: 'Horse', mean: 'Kuda', topic: 'Hewan 🐱', emoji: '🐴' },
  { word: 'Jellyfish', mean: 'Ubur-ubur', topic: 'Hewan 🐱', emoji: '🪼' },
  { word: 'Kangaroo', mean: 'Kanguru', topic: 'Hewan 🐱', emoji: '🦘' },
  { word: 'Koala', mean: 'Koala', topic: 'Hewan 🐱', emoji: '🐨' },
  { word: 'Lion', mean: 'Singa', topic: 'Hewan 🐱', emoji: '🦁' },
  { word: 'Monkey', mean: 'Monyet', topic: 'Hewan 🐱', emoji: '🐒' },
  { word: 'Octopus', mean: 'Gurita', topic: 'Hewan 🐱', emoji: '🐙' },
  { word: 'Owl', mean: 'Burung Hantu', topic: 'Hewan 🐱', emoji: '🦉' },
  { word: 'Panda', mean: 'Panda', topic: 'Hewan 🐱', emoji: '🐼' },
  { word: 'Penguin', mean: 'Penguin', topic: 'Hewan 🐱', emoji: '🐧' },
  { word: 'Rabbit', mean: 'Kelinci', topic: 'Hewan 🐱', emoji: '🐰' },
  { word: 'Sheep', mean: 'Domba', topic: 'Hewan 🐱', emoji: '🐑' },
  { word: 'Spider', mean: 'Laba-laba', topic: 'Hewan 🐱', emoji: '🕷️' },
  { word: 'Snail', mean: 'Siput', topic: 'Hewan 🐱', emoji: '🐌' },
  { word: 'Tiger', mean: 'Harimau', topic: 'Hewan 🐱', emoji: '🐯' },
  { word: 'Turtle', mean: 'Kura-kura', topic: 'Hewan 🐱', emoji: '🐢' },
  { word: 'Unicorn', mean: 'Unicorn', topic: 'Hewan 🐱', emoji: '🦄' },
  { word: 'Zebra', mean: 'Zebra', topic: 'Hewan 🐱', emoji: '🦓' },
  { word: 'Whale', mean: 'Paus', topic: 'Hewan 🐱', emoji: '🐋' },
  { word: 'Shark', mean: 'Hiu', topic: 'Hewan 🐱', emoji: '🦈' },

  // === BUAH-BUAHAN (FRUITS) ===
  { word: 'Apple', mean: 'Apel', topic: 'Buah-buahan 🍎', emoji: '🍎' },
  { word: 'Banana', mean: 'Pisang', topic: 'Buah-buahan 🍎', emoji: '🍌' },
  { word: 'Watermelon', mean: 'Semangka', topic: 'Buah-buahan 🍎', emoji: '🍉' },
  { word: 'Grapes', mean: 'Anggur', topic: 'Buah-buahan 🍎', emoji: '🍇' },
  { word: 'Orange', mean: 'Jeruk', topic: 'Buah-buahan 🍎', emoji: '🍊' },
  { word: 'Mango', mean: 'Mangga', topic: 'Buah-buahan 🍎', emoji: '🥭' },
  { word: 'Strawberry', mean: 'Stroberi', topic: 'Buah-buahan 🍎', emoji: '🍓' },
  { word: 'Pineapple', mean: 'Nanas', topic: 'Buah-buahan 🍎', emoji: '🍍' },
  { word: 'Avocado', mean: 'Alpukat', topic: 'Buah-buahan 🍎', emoji: '🥑' },
  { word: 'Cherry', mean: 'Ceri', topic: 'Buah-buahan 🍎', emoji: '🍒' },
  { word: 'Coconut', mean: 'Kelapa', topic: 'Buah-buahan 🍎', emoji: '🥥' },
  { word: 'Lemon', mean: 'Lemon', topic: 'Buah-buahan 🍎', emoji: '🍋' },
  { word: 'Melon', mean: 'Melon', topic: 'Buah-buahan 🍎', emoji: '🍈' },
  { word: 'Papaya', mean: 'Pepaya', topic: 'Buah-buahan 🍎', emoji: '🥭' },
  { word: 'Peach', mean: 'Persik', topic: 'Buah-buahan 🍎', emoji: '🍑' },
  { word: 'Kiwi', mean: 'Kiwi', topic: 'Buah-buahan 🍎', emoji: '🥝' },
  { word: 'Pear', mean: 'Pir', topic: 'Buah-buahan 🍎', emoji: '🍐' },

  // === SEKOLAH & BELAJAR (SCHOOL) ===
  { word: 'Book', mean: 'Buku', topic: 'Sekolah & Belajar ✏️', emoji: '📖' },
  { word: 'Pencil', mean: 'Pensil', topic: 'Sekolah & Belajar ✏️', emoji: '✏️' },
  { word: 'Eraser', mean: 'Penghapus', topic: 'Sekolah & Belajar ✏️', emoji: '🧽' },
  { word: 'Ruler', mean: 'Penggaris', topic: 'Sekolah & Belajar ✏️', emoji: '📏' },
  { word: 'Bag', mean: 'Tas', topic: 'Sekolah & Belajar ✏️', emoji: '🎒' },
  { word: 'Whiteboard', mean: 'Papan Tulis', topic: 'Sekolah & Belajar ✏️', emoji: '📋' },
  { word: 'Crayon', mean: 'Krayon', topic: 'Sekolah & Belajar ✏️', emoji: '🖍️' },
  { word: 'Teacher', mean: 'Guru', topic: 'Sekolah & Belajar ✏️', emoji: '🧑‍🏫' },
  { word: 'Student', mean: 'Murid', topic: 'Sekolah & Belajar ✏️', emoji: '🧑‍🎓' },
  { word: 'Classroom', mean: 'Ruang Kelas', topic: 'Sekolah & Belajar ✏️', emoji: '🏫' },
  { word: 'Desk', mean: 'Meja Tulis', topic: 'Sekolah & Belajar ✏️', emoji: '🪑' },
  { word: 'Scissors', mean: 'Gunting', topic: 'Sekolah & Belajar ✏️', emoji: '✂️' },
  { word: 'Glue', mean: 'Lem', topic: 'Sekolah & Belajar ✏️', emoji: '🧪' },
  { word: 'Paper', mean: 'Kertas', topic: 'Sekolah & Belajar ✏️', emoji: '📄' },
  { word: 'Notebook', mean: 'Buku Catatan', topic: 'Sekolah & Belajar ✏️', emoji: '📓' },

  // === KELUARGA (FAMILY) ===
  { word: 'Father', mean: 'Ayah', topic: 'Keluarga Kita 👨‍👩‍👧‍👦', emoji: '👨' },
  { word: 'Mother', mean: 'Ibu', topic: 'Keluarga Kita 👨">', emoji: '👩' },
  { word: 'Brother', mean: 'Saudara Laki-laki', topic: 'Keluarga Kita 👨‍👩‍👧‍👦', emoji: '👦' },
  { word: 'Sister', mean: 'Saudara Perempuan', topic: 'Keluarga Kita 👨‍👩‍👧‍👦', emoji: '👧' },
  { word: 'Baby', mean: 'Bayi', topic: 'Keluarga Kita 👨‍👩‍👧‍👦', emoji: '👶' },
  { word: 'Grandfather', mean: 'Kakek', topic: 'Keluarga Kita 👨‍👩‍👧‍👦', emoji: '👴' },
  { word: 'Grandmother', mean: 'Nenek', topic: 'Keluarga Kita 👨‍👩‍👧‍👦', emoji: '👵' },
  { word: 'Uncle', mean: 'Paman', topic: 'Keluarga Kita 👨‍👩‍👧‍👦', emoji: '👨' },
  { word: 'Aunt', mean: 'Bibi', topic: 'Keluarga Kita 👨‍👩‍👧‍👦', emoji: '👩' },

  // === ANGGOTA TUBUH (BODY PARTS) ===
  { word: 'Eye', mean: 'Mata', topic: 'Tubuh Kita 💪', emoji: '👁️' },
  { word: 'Nose', mean: 'Hidung', topic: 'Tubuh Kita 💪', emoji: '👃' },
  { word: 'Mouth', mean: 'Mulut', topic: 'Tubuh Kita 💪', emoji: '👄' },
  { word: 'Ear', mean: 'Telinga', topic: 'Tubuh Kita 💪', emoji: '👂' },
  { word: 'Hand', mean: 'Tangan', topic: 'Tubuh Kita 💪', emoji: '✋' },
  { word: 'Foot', mean: 'Kaki', topic: 'Tubuh Kita 💪', emoji: '🦶' },
  { word: 'Hair', mean: 'Rambut', topic: 'Tubuh Kita 💪', emoji: '💇' },
  { word: 'Finger', mean: 'Jari', topic: 'Tubuh Kita 💪', emoji: '🖐️' },
  { word: 'Teeth', mean: 'Gigi', topic: 'Tubuh Kita 💪', emoji: '🦷' },
  { word: 'Tongue', mean: 'Lidah', topic: 'Tubuh Kita 💪', emoji: '👅' },
  { word: 'Shoulder', mean: 'Bahu', topic: 'Tubuh Kita 💪', emoji: '💪' },

  // === WARNA & MAKANAN (COLORS & FOODS) ===
  { word: 'Red', mean: 'Merah', topic: 'Warna & Makanan 🎨', emoji: '🔴' },
  { word: 'Blue', mean: 'Biru', topic: 'Warna & Makanan 🎨', emoji: '🔵' },
  { word: 'Yellow', mean: 'Kuning', topic: 'Warna & Makanan 🎨', emoji: '🟡' },
  { word: 'Green', mean: 'Hijau', topic: 'Warna & Makanan 🎨', emoji: '🟢' },
  { word: 'Purple', mean: 'Ungu', topic: 'Warna & Makanan 🎨', emoji: '🟣' },
  { word: 'Pink', mean: 'Merah Muda', topic: 'Warna & Makanan 🎨', emoji: '💗' },
  { word: 'White', mean: 'Putih', topic: 'Warna & Makanan 🎨', emoji: '⚪' },
  { word: 'Black', mean: 'Hitam', topic: 'Warna & Makanan 🎨', emoji: '⚫' },
  { word: 'Brown', mean: 'Cokelat', topic: 'Warna & Makanan 🎨', emoji: '🟤' },
  { word: 'Orange', mean: 'Jingga', topic: 'Warna & Makanan 🎨', emoji: '🟠' },
  { word: 'Ice Cream', mean: 'Es Krim', topic: 'Warna & Makanan 🎨', emoji: '🍦' },
  { word: 'Milk', mean: 'Susu', topic: 'Warna & Makanan 🎨', emoji: '🥛' },
  { word: 'Bread', mean: 'Roti', topic: 'Warna & Makanan 🎨', emoji: '🍞' },
  { word: 'Cake', mean: 'Kue', topic: 'Warna & Makanan 🎨', emoji: '🍰' },
  { word: 'Candy', mean: 'Permen', topic: 'Warna & Makanan 🎨', emoji: '🍬' },
  { word: 'Donut', mean: 'Donat', topic: 'Warna & Makanan 🎨', emoji: '🍩' },
  { word: 'Rice', mean: 'Nasi', topic: 'Warna & Makanan 🎨', emoji: '🍚' },
  { word: 'Cheese', mean: 'Keju', topic: 'Warna & Makanan 🎨', emoji: '🧀' },
  { word: 'Pizza', mean: 'Piza', topic: 'Warna & Makanan 🎨', emoji: '🍕' },
  { word: 'Egg', mean: 'Telur', topic: 'Warna & Makanan 🎨', emoji: '🥚' },

  // === KENDARAAN (VEHICLES) ===
  { word: 'Car', mean: 'Mobil', topic: 'Kendaraan 🚗', emoji: '🚗' },
  { word: 'Bus', mean: 'Bus', topic: 'Kendaraan 🚗', emoji: '🚌' },
  { word: 'Bicycle', mean: 'Sepeda', topic: 'Kendaraan 🚗', emoji: '🚲' },
  { word: 'Motorcycle', mean: 'Sepeda Motor', topic: 'Kendaraan 🚗', emoji: '🏍️' },
  { word: 'Train', mean: 'Kereta Api', topic: 'Kendaraan 🚗', emoji: '🚂' },
  { word: 'Plane', mean: 'Pesawat', topic: 'Kendaraan 🚗', emoji: '✈️' },
  { word: 'Ship', mean: 'Kapal Laut', topic: 'Kendaraan 🚗', emoji: '🚢' },
  { word: 'Helicopter', mean: 'Helikopter', topic: 'Kendaraan 🚗', emoji: '🚁' },
  { word: 'Truck', mean: 'Truk', topic: 'Kendaraan 🚗', emoji: '🚚' },
  { word: 'Ambulance', mean: 'Ambulans', topic: 'Kendaraan 🚗', emoji: '🚑' },

  // === MAINAN & HOBI (TOYS & HOBBIES) ===
  { word: 'Doll', mean: 'Boneka', topic: 'Mainan & Hobi 🎈', emoji: '🧸' },
  { word: 'Robot', mean: 'Robot', topic: 'Mainan & Hobi 🎈', emoji: '🤖' },
  { word: 'Kite', mean: 'Layang-layang', topic: 'Mainan & Hobi 🎈', emoji: '🪁' },
  { word: 'Yo-yo', mean: 'Yoyo', topic: 'Mainan & Hobi 🎈', emoji: '🪀' },
  { word: 'Balloon', mean: 'Balon', topic: 'Mainan & Hobi 🎈', emoji: '🎈' },
  { word: 'Blocks', mean: 'Balok susun', topic: 'Mainan & Hobi 🎈', emoji: '🧱' },
  { word: 'Ball', mean: 'Bola', topic: 'Mainan & Hobi 🎈', emoji: '⚽' },
  { word: 'Puzzle', mean: 'Teka-teki silang', topic: 'Mainan & Hobi 🎈', emoji: '🧩' },
  { word: 'Guitar', mean: 'Gitar', topic: 'Mainan & Hobi 🎈', emoji: '🎸' },
  { word: 'Drum', mean: 'Drum', topic: 'Mainan & Hobi 🎈', emoji: '🥁' },

  // === PAKAIAN (CLOTHES) ===
  { word: 'Shirt', mean: 'Kemeja', topic: 'Pakaian 👕', emoji: '👕' },
  { word: 'Pants', mean: 'Celana', topic: 'Pakaian 👕', emoji: '👖' },
  { word: 'Dress', mean: 'Gaun', topic: 'Pakaian 👕', emoji: '👗' },
  { word: 'Hat', mean: 'Topi', topic: 'Pakaian 👕', emoji: '🧢' },
  { word: 'Shoes', mean: 'Sepatu', topic: 'Pakaian 👕', emoji: '👟' },
  { word: 'Socks', mean: 'Kaos kaki', topic: 'Pakaian 👕', emoji: '🧦' },
  { word: 'Coat', mean: 'Mantel', topic: 'Pakaian 👕', emoji: '🧥' },
  { word: 'Glasses', mean: 'Kacamata', topic: 'Pakaian 👕', emoji: '👓' },
  { word: 'Bag', mean: 'Tas', topic: 'Pakaian 👕', emoji: '🎒' },

  // === KATA KERJA SEDERHANA (VERBS - UNTUK MELENGKAPI DATA DASAR) ===
  { word: 'Eat', mean: 'Makan', topic: 'Aktivitas 🏃‍♂️', emoji: '🍽️' },
  { word: 'Drink', mean: 'Minum', topic: 'Aktivitas 🏃‍♂️', emoji: '🥤' },
  { word: 'Sleep', mean: 'Tidur', topic: 'Aktivitas 🏃‍♂️', emoji: '💤' },
  { word: 'Run', mean: 'Lari', topic: 'Aktivitas 🏃‍♂️', emoji: '🏃‍♂️' },
  { word: 'Jump', mean: 'Lompat', topic: 'Aktivitas 🏃‍♂️', emoji: '🦘' },
  { word: 'Sing', mean: 'Menyanyi', topic: 'Aktivitas 🏃‍♂️', emoji: '🎤' },
  { word: 'Dance', mean: 'Menari', topic: 'Aktivitas 🏃‍♂️', emoji: '💃' },
  { word: 'Read', mean: 'Membaca', topic: 'Aktivitas 🏃‍♂️', emoji: '📚' },
  { word: 'Write', mean: 'Menulis', topic: 'Aktivitas 🏃‍♂️', emoji: '✏️' },
  { word: 'Smile', mean: 'Tersenyum', topic: 'Aktivitas 🏃‍♂️', emoji: '😊' }
];

// Generator Algoritmik Pembesar Kosakata untuk menyimulasikan 1500+ kata unik secara andal.
const dapatkanKamusLengkap = () => {
  const hasilGabungan = [...KamusData];

  // Daftar Modifikasi Kata Sifat & Warna (Diperkaya menjadi 16 tipe)
  const modifikasi = [
    { prefix: 'Big', prefixMean: 'Besar', tag: 'Sifat 🧠' },
    { prefix: 'Small', prefixMean: 'Kecil', tag: 'Sifat 🧠' },
    { prefix: 'Happy', prefixMean: 'Ceria', tag: 'Sifat 🧠' },
    { prefix: 'Sad', prefixMean: 'Sedih', tag: 'Sifat 🧠' },
    { prefix: 'Red', prefixMean: 'Merah', tag: 'Warna 🎨' },
    { prefix: 'Blue', prefixMean: 'Biru', tag: 'Warna 🎨' },
    { prefix: 'Yellow', prefixMean: 'Kuning', tag: 'Warna 🎨' },
    { prefix: 'Green', prefixMean: 'Hijau', tag: 'Warna 🎨' },
    { prefix: 'Beautiful', prefixMean: 'Indah', tag: 'Sifat 🧠' },
    { prefix: 'Funny', prefixMean: 'Lucu', tag: 'Sifat 🧠' },
    { prefix: 'Fast', prefixMean: 'Cepat', tag: 'Sifat 🧠' },
    { prefix: 'Slow', prefixMean: 'Lambat', tag: 'Sifat 🧠' },
    { prefix: 'Clean', prefixMean: 'Bersih', tag: 'Sifat 🧠' },
    { prefix: 'Dirty', prefixMean: 'Kotor', tag: 'Sifat 🧠' },
    { prefix: 'Strong', prefixMean: 'Kuat', tag: 'Sifat 🧠' },
    { prefix: 'Sweet', prefixMean: 'Manis', tag: 'Sifat 🧠' }
  ];

  // Kata benda dasar yang cocok dikombinasikan (Hewan, Buah, Mainan, Kendaraan, Pakaian)
  const kataBendaCocok = KamusData.filter(item => 
    item.topic.includes('Hewan') || 
    item.topic.includes('Buah-buahan') || 
    item.topic.includes('Mainan') ||
    item.topic.includes('Kendaraan') ||
    item.topic.includes('Pakaian')
  );

  // Kombinasi Matematika: 16 (Modifikasi) * 86 (Benda Cocok) = 1376 kombinasi dinamis
  for (let mod of modifikasi) {
    for (let benda of kataBendaCocok) {
      if (benda.topic.includes('Warna') && mod.tag.includes('Warna')) continue;

      let kataBaruEng = `${mod.prefix} ${benda.word}`;
      let kataBaruIndo = `${benda.mean} ${mod.prefixMean}`;

      hasilGabungan.push({
        word: kataBaruEng,
        mean: kataBaruIndo,
        topic: `${benda.topic} (${mod.prefixMean})`,
        emoji: benda.emoji
      });
    }
  }

  // Hasil Akhir: 151 (Statis) + 1376 (Dinamis) = 1527 total kosakata unik!
  return hasilGabungan;
};

// Pasang database dinamis ke scope window
window.JJ_Kamus_Lengkap = dapatkanKamusLengkap();