const p =require("prompt-sync")()

let nbr=p("demaner un nombre de lignes") ;

for (let i =1 ;i <= nbr ;i++)
{
   let lines ="*".repeat(i * 2 - 1);
   let spac = " ".repeat(nbr - i);
   console.log(spac,lines)
}