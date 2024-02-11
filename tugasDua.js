const prompt = require('prompt-sync')({ sigint: true });
const {productBin} = require("./propertyTugasDua");

var jumlahkan = prompt("Apakah anda mau menjumlahkan quantity nya?"); //input 1
var jawab = prompt("Storage ID berapa yang ingin anda jumlah quantitynya? : ")
    
if(jawab == 10000008207 || jawab != 10000008207) {
        jumlahkan = false
    }
console.log(productBin.data[0].quantity + productBin.data[1].quantity + productBin.data[2].quantity)
