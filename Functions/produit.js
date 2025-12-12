function  produitTableau(tab =[])
{
    const mull =tab.reduce((acc ,cur) =>acc +cur ,1)
    console.log(mull)
}
produitTableau([2,3,5,46,4])