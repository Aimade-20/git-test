function moyenne(tab = [])
{
    const somme =tab.reduce((acc ,cur) => acc +cur ,0)
    let moyenne = somme / tab.length
    console.log("le moyenne de tab :"+ moyenne.toFixed(2))
}
moyenne([12,20,19,18,17,06])