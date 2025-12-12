function tableMultiplication(n )
{
    const arry = []
    for (let i = 1; i <= 10 ;i++)
    {
        const index =  i * n
        arry.push(index)
    }
    console.log(arry)
}
tableMultiplication(3)