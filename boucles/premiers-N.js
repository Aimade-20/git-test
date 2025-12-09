const p =require("prompt-sync")()

let n =Number(p("demander un entier :"));


for( let i = 2; i <= n ; i++)
{
    let premier = true;
    for (let d = 2 ; d <= Math.sqrt(i) ; d++)
    {
        if(i % d === 0)
        {
            premier = false;
            break;
        }
    }
    if(premier){
        console.log(i);
    }
}
