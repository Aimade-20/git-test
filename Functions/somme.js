const p=require("prompt-sync")()
const arry =[]

function sommeTableau(tab)
{
    for(let i = 0;i < tab ;i++)
    {
            let nbr =Number(p("donner des numbre :"))
             arry.push(nbr)
    
    }
    
    console.log(arry)
    let somme =arry.reduce((acc,cur) => acc+cur,0)
    console.log("le somme des number :"+ somme)
}
sommeTableau(5)