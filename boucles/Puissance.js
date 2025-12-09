const p =require("prompt-sync")()
let base =Number (p("base > 0:"));
let expo =Number (p("exposant >= 0:"));
let resulte = 1;
let i =0;
while(i < expo)
{
resulte = base * resulte;
i++;
}
console.log(`${base} ^ ${expo} = ${resulte}`);