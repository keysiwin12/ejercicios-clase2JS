var numero1;
var numero2;
var numero3;
var numeroMayor;
numero1 = prompt("Ingrese primer numero: ");
numero2 = prompt("Ingrese segundo numero: ");
numero3 = prompt("Ingrese tercer numero: ");


if(numero1>numero2 && numero1>numero3)
    numeroMayor = numero1;
    else 
        if(numero2>numero3)
            numeroMayor=numero2;
        else
            numeroMayor=numero3;

document.write("El numero mayor es : ",numeroMayor);
        