let voiture ={
    marque :"audi",
    modele :"rs7 mtm",
    annee :"2023",
}
console.log("-------------------------")
console.log(voiture)
console.log("-------------------------")
console.log(voiture.annee)
console.log(voiture.marque)
console.log("-------------------------")
voiture.annee = 2022
console.log(voiture)
console.log("-------------------------")
voiture.color = "black"
delete voiture.modele
console.log(voiture)
