function filtrerPairs(tab =[])
{
    const pairs =tab.filter(n => n %2 === 0)
    console.log(pairs)
}
filtrerPairs([22,336,844,87,15,71,65,2,20,55,100])