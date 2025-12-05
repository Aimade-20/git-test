const p = require("prompt-sync")()
 let pass = p("donner un mote de pass :");

 let nbr = /\d/;
 let special = /[!@#$%^&*(),.?":{}|<>]/;
switch(true)
{
   case pass.length < 6 :
      console.log("Faible");
      break;

            case pass.length>=8 && nbr.test(pass) && special.test(pass):
               console.log("Fort");
                break;

      case pass.length>=6 && nbr.test(pass):
      console.log("Moyen");
          break;

         default:
            console.log("error");

}