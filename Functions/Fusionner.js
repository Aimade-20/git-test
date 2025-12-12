function fusionner(tab1 = [], tab2 = []) 
{
    let arry = []
    for(let i = 0 ; i < tab1.length;i++)
    {
        arry.push(tab1[i])
    }
    for(let j = 0 ; j < tab2.length ;j++)
    {
        arry.push(tab2[j])
    }
    console.log(arry)
}
fusionner([1,2,3,4,5], [6,7,8,9,10]) 