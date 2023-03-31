/**
 * includes 🔥🔥
 * arr.includes(any)
 */

const availableSize = ["S", "M", "L", "XL"];
const readlineSync = require("readline-sync");
const userSize = readlineSync.question("Which size of Shirt do you want (S/M/L/XL/XXL/XXXL) - ");


const isSizeAvailable = availableSize.includes(userSize);
if (isSizeAvailable){
    console.log("Size is available");
}else{
    console.log("Size is unavailable");
}