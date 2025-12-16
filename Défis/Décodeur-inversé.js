const p=require("prompt-sync")()

const arry =[];

let phrase=p("donner une phrase :");
arry.push(phrase)
let inverse = phrase.split("").reverse().join("");
console .log("Le nombre inversé est:", inverse);