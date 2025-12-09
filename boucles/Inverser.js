const p =require("prompt-sync")()
 let nbr = p("demande un entier et l’affiche inversée :");

let inverse = nbr.split("").reverse().join("");
console .log("Le nombre inversé est:", inverse);