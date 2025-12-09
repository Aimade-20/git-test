const p=require("prompt-sync")()

let nbr =p("demander un nombre :");
let premire=true;
 if(nbr <= 1)
 {
    premire=false;
 }
 for(let i =2; i<nbr ;i++)
 {
    if(nbr % i === 0)
    {
        premire=false;
        break;
    }
    
}
   if(premire)
   {
    console.log("est un nomber premier")
   }
   else{
    console.log("n'est pas un nomber premier");
   }
 