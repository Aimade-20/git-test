const p = require("prompt-sync")()
 
let nbr = p("donne un nombre :");
if(nbr % 3 == 0 && nbr % 5 == 0)
{
    console.log ("FizzBuzz");
}
else if(nbr % 3 == 0)
{
    console.log("Fizz");
}
else if(nbr % 5 == 0)
{
    console.log ("Buzz");
}

else{
    console.log (nbr);
}