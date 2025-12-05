const p = require("prompt-sync")()
 let color = p("colore :");

switch(color)
{
    case "rouge":
        console.log("Arrêt");
        break;
        case "jaune":
            console.log("Préparez-vous");
            break;
            case "vert":
                console.log("Allez")
                break;
                default:
                    console.log(`Désolé, nous n'avons plus de couleur. ${color}.`);
}