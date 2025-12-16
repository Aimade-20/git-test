let etudiant ={
    nom : "aimad",
    age : "24",
    sePresenter: function() {
    console.log(`Bonjour, je m’appelle ${this.nom} et j’ai ${this.age} ans`);
}
};
etudiant.sePresenter();


let personne = {
    nom : "ayoub",
    prenom : "naffa",
    age : "20",
}
for(let p in personne){
    console.log(p + ":"+personne[p]);
    console.log("----------------------------");
}
function afficherEtudiants()
{
     let classe = {
         etudiants : [`ahmad`, `aimad`,`ali`,`asmaa`,`zinab`,`hamza`],
     
     }

    for (let etu in classe)
    {
        console.log(classe[etu])
    }
 }
 afficherEtudiants()
    

 const livres  = [
    { titre :"la boite",auteur : "ana",annee : "2025"},
    { titre :"brea",auteur : "howa",annee : "2024"},
    { titre :"poli",auteur : "hiya",annee : "2023"},
 ]
 for (let livre of livres) {
    console.log(livre.titre);
}
    function  trouverLivre(titrere){
    for (let livre of livres){
        if(livre.titre === titrere){
            return livre;
        }
    }
    return null;
}

console.log(trouverLivre("poli")); 



