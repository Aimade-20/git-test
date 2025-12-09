const p= require("prompt-sync")()

const arry =[];



for (let i = 0;i <= 8; i++)
{
    let n =Number(p("doner 8 nombers :"));
    arry.push(n)
}

let nbr =Number(p("donner un chaine a rechercher :"));
const index = (elemt) => elemt === nbr;
console.log(arry)
if(arry.includes(nbr))
{
    console.log("la position de chaine qui rechercher",arry .findIndex(index));
}
else{
    console.log("Ce numéro n'est pas disponible.")
}


