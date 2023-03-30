const readlineSync = require("readline-sync");
const totalMarksInPercentage = Number(readlineSync.question("Enter your marks in percentage? "));

const passingPercentage = 50;
const minAPlusPercentage = 75;
const minAPercentage = 65;
const minBPlusPercentage = 60;
const minBPercentage = 50;

if (totalMarksInPercentage >= passingPercentage) {

    if (totalMarksInPercentage > minAPlusPercentage){
        console.log("A+");
    }else if (totalMarksInPercentage > minAPercentage && totalMarksInPercentage < minAPlusPercentage){
        console.log("A");
    }else if (totalMarksInPercentage > minBPlusPercentage && totalMarksInPercentage < minAPercentage){
        console.log("B+");
    }else if (totalMarksInPercentage > minBPercentage && totalMarksInPercentage < minBPlusPercentage){
        console.log("B");
    }else {
        console.log("You barely made it through");
    }

}else {
    console.log("You should study hard")
}
