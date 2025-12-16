entreprise ={
    rue : "hey wafa",
    ville :"beni mellal",
    codepostal :"2225"
}
console.log(entreprise.ville)

console.log("----------------------------------")
produits = [
   {nom :"produit1",prix : 250 ,quantite : 10 },
   {nom :"produit2",prix : 15 ,quantite : 3},
   {nom :"produit3",prix : 25 ,quantite : 4},
   {nom :"produit4",prix : 100 ,quantite : 8}
]
produits.forEach(objec =>{
    console.log(`${objec.prix} * ${objec.quantite} = ${objec.prix * objec.quantite}`)
});

console.log("----------------------------------")

class Animal{
    constructor(nom, type){
        this.nom = nom;
        this.type = type;
    }
         parler(){
        console.log(`name :${this.nom}`);
        console.log(`type :${this.type}`);
    }
}
    const chien = new Animal("rexi", "mali")
   chien.parler()
   console.log("----------------------------------")
let employes =[
    {
        name : "aimd",
        salair : 50000
    },
    {
        name :"ayoub",
        salair : 6000
    },
    {
        name :"achraf",
        salair : 3000
    },
    {
        name :"nabil",
        salair : 2500
    },
    {
        name :"nabil",
        salair :10000
    },
    {
        name :"nabil",
        salair : 2500
    }
] 
    const emplo = employes.filter(emp => emp.salair > 3000)
    console.log(emplo)
    console.log("----------------------------------")
 
