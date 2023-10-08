const data1 = [6]
const data2 = [1, 2, 3, 4, 10, 11]

function simpleArraySum(ar) {
    let hasil = 0;
    for(i = 0; i<ar.length; i++){
        hasil = hasil + ar[i];
    }
    return hasil;
}

console.log(simpleArraySum(data1))
console.log(simpleArraySum(data2))