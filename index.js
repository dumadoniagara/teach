const data = ["duma", "vian", "indra"];
const data2 = ["Dona", "ijal", "indra"];

// invoke
//  data[0] ==> duma
// data[1] ==> vian

function tambahGanteng(input) {
  const result = [];
  for (let i = 0; i < input.length; i++) {
    let resultItem = input[i] + " ganteng";
    result.push(resultItem);
  }
  return result;
}

const result2 = 'test'


console.log(tambahGanteng(data));
console.log(tambahGanteng(data2));

// i = 0 => print ke 0
// i = 1 => print ke 1
// i = 2 => print ke 2
// i = 3 => print ke 3
// i = 4 => print ke 4
// i =5

let a = 5;
// a = a + 1
// a++;
