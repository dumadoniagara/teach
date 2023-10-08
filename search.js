const data = [
  { name: "Xiaomi", harga: 10000 },
  { name: "Xiaomi", harga: 35000 },
  { name: "Realme", harga: 35000 },
  { name: "Oppo", harga: 20000 },
  { name: "Samsung", harga: 30000 },
];

const data2 = [
    { name: "Xiaomi", harga: 10000 },
    { name: "Amsyong", harga: 35000 },
    { name: "IPhone", harga: 35000 },
    { name: "Oppo", harga: 20000 },
    { name: "Samsung", harga: 30000 },
  ];

function searchBerdasarkanNamaAtauHarga(searchKey, harga, inputData){
    const result = [];
    for(let i=0; i< inputData.length; i++){
        if(inputData[i].name == searchKey || inputData[i].harga == harga){
            result.push(inputData[i])
        }
    }
    return result;
}


console.log(searchBerdasarkanNamaAtauHarga('', 35000, data))
console.log(searchBerdasarkanNamaAtauHarga('IPhone', 35000, data2))

// [ { name: 'Xiaomi', harga: 35000 }, { name: 'Realme', harga: 35000 } ]
