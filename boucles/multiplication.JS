const p = require("prompt-sync")()

 let nbr =p("demander un nombre :");

for(let i = 0 ; i <= 11; i++)
{
    console.log(nbr +" *"+i+" = "+nbr * i);
}
