const p =require("prompt-sync")()

let arry =[];
for(let i =0;i < 5 ;i++)
{
   let nbr= Number(p("doner des nombers :"));
arry.push(nbr);

}
console.log("l'inverser :",arry.reverse());