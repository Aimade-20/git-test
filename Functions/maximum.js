const p=require("prompt-sync")()
const arry =[]

function maxTableau(tab)
{
    for(let i = 0;i < tab ;i++)
    {
            let nbr =Number(p("donner des numbre :"))
             arry.push(nbr)
    
    }
    
    console.log(arry)
    let max=Math.max(...arry)
    console.log("le somme des number :"+ max)
}
maxTableau(5)