/**
 * string.includes() 🐱‍🚀🐱‍🚀
 */

const displayMessage = "Z love to code in dark modez";
const vowels = "aeiou";
let flag = false;

for (let char of displayMessage){
    if (vowels.includes(char.toLowerCase())){
        flag = true;
        break
    }else{
        flag = false;
    }
}

if (flag){
    console.log("String has vowels");
}else{
    console.log("String doesn't have vowels");
}