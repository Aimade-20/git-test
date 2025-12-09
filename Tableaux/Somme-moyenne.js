const p=require("prompt-sync")()

let arry =[10,20,14,8,9,5,18,19,11,12];
    const somme = arry.reduce((acc,cur)=>acc + cur ,0);
    console.log(arry);
    console.log("la somme des nomber valides :",somme);

    console.log("la moyenne des nomber valides :",somme / 10);

