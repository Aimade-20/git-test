const p=require("prompt-sync")()

const tab =[1,2,3,5,1,1,1]

function compterOccurrences(tab, valeur)
{
    const cont = tab.filter(item => item === valeur).length
    console.log(cont)
}
compterOccurrences(tab, 1)