const p =require("prompt-sync")()

let arry =[];
while(true)
{
    let nbr = Number(p("doner 10 nombers :"));
    if(nbr <= 0)
    {
        break;
    }
    arry.push(nbr);
    const somme =arry.reduce((acc,cur)=>acc +cur,0);
    console.log("la somme des nomber valides :",somme);
}

