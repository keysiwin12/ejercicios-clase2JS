var tipo;
var mensaje;

tipo = prompt("Ingrese tipo de motor de bomba(1-4)");


switch(tipo) {
    case "0" : 
        mensaje = "No hay establecido un valor definido para la bomba ";
    break;

    case "1" : 
        mensaje = "La bomba es una bomba de agua";
    break;

    case "2" : 
        mensaje = "La bomba es una bomba de gasolina";
    break;

    case "3" : 
        mensaje = "La bomba es una bomba de hormigon";
    break;

    case "4" : 
        mensaje = "La bomba es una bomba de pasta alimenticia";
    break;

    default : 
        mensaje = "No existe un valor definido para el tipo de bomba";
    break;
}

document.write(mensaje);