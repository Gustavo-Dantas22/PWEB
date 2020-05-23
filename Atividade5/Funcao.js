function press(){
    var numeroA = parseFloat(document.getElementById("A").value);
    var numeroB = parseFloat(document.getElementById("B").value);
    var numeroC = parseFloat(document.getElementById("C").value);

    var maior = Math.max(numeroA, numeroB, numeroC);
    
    if((numeroA == numeroB)  && (numeroB == numeroC) && (numeroA == numeroC)){
        document.getElementById("result").innerHTML = "Os 3 numeros são iguais = " + numeroA ;
    }
    else if(maior){
        document.getElementById("result").innerHTML = "O número maior é: " + maior ;
    } 
    else{
        document.getElementById("result").innerHTML = "Preencha todos os campos com número";
    } 
}