const p = require("prompt-sync")()

const Nom = 'admin';
let passe= 1234;

let uti =p("Nom d'utilisatur :");
let mot =NUmber(p("mot de passe :"));
if(uti == Nom && mot == passe)
{
    console.log("Bienvenue Admin");
}
else if(mot != passe && Nom == uti)
{
    console.log("Mot de passe incorrect" );
}
else{
    console.log("Utilisateur introuvable" );
}