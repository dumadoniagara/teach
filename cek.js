const data = [1, 2, 3, 4, 5, 6];

// iterator

function cekBukanTiga(input) {
  const result = [];
  for (i = 0; i < input.length; i++) {
    let item = null;
    if (input[i] == 2 || input[i] == 1) {
      item = input[i] + 50;
    } else if (input[i] != 3 && input[i] != 4) {
      item = input[i];
    } else if (input[i] != 3) {
      item = input[i] + 10;
    } else {
      item = input[i] + 70;
    }
    result.push(item);
  }
  return result;
}

console.log(cekBukanTiga(data));

// PERBANDINGAN (IF ELSE)
// SAMA DENGAN => '=='
// TIDAK SAMA DENGAN => '!='
// LEBIH DARI => 'a > b'
// LEBIH DARI ATAU SAMA DENGAN 'a >= b'
// KURANG DARI
// KURANG DARI ATAU SAMA DENGAN

// LOGIKA
// DAN & ATAU
// DAN -> akan terpenuhi jika 2 atau lebih kondisi TERPENUH SEMUANYA.
// ATAU -> akan terpenuhi jika 2 atau lebih kondisi TERPENUH SALAH SATUNYA.
