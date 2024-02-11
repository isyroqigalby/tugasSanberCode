const prompt = require('prompt-sync')({ sigint: true });

// take the input from the user
const number = prompt("Masukkan angka : ");

const result = Math.sqrt(number);
if (number%2==0){
    console.log("Akar kuadrat dari " + number + " adalah " + result);
}
else if (number<0){
    console.log("Tidak bisa input bilangan negatif")
} else if (number&2!=0){
    console.log("Tidak bisa input bilangan ganjil")
}