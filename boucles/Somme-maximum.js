const p =require("prompt-sync")()

const arry=[];

while(true)
{
    let nbr =Number(p("Entrez un numéro (doit se terminer par 0 et <100 :"));
    if(nbr >=100)
    {
        break;
    }else if(nbr <100 && nbr % 10 == 0)
    arry.push(nbr);
    
    const somme =arry.reduce((acc,cur) => acc + cur ,0);
    const max =Math.max(...arry);
   
    console.log("Numéros acceptés que vous avez saisis :",arry);
    console.log("la somme des numbres :",somme);
    console.log("le maximum des valeurs valides",max);
}
