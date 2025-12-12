const p=require("prompt-sync")()
const arry= []

function  remplirTableau(length){
for (let i = 0; i < length; i++)
{
    let nbr =Number(p("donner un nombre :"))
    arry.push(nbr)

}
console.log(arry)
}

remplirTableau(3)