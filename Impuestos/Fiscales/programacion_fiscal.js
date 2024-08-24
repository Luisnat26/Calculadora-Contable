function validar(){

    //OPCIONES
    var seguro_sso = document.getElementById("seguro_so");
    var seguro_pie = document.getElementById("seguro_pie");
    //OPCIONES

    var salario_sso = document.getElementById("contenedor_sso");
    var salario_pie = document.getElementById("contenedor_pie");

    //CONDICIONAL SEGURO SOCIAL OBLIGATORIO
    if(seguro_sso.checked){

        salario_sso.style.display = "inline";}

    else{

        salario_sso.style.display = "none";}
    //CONDICIONAL SEGURO_SOCIAL OBLIGATORIO

    //CONDICIONAL P.I.E O P.F
    if(seguro_pie.checked){

        salario_pie.style.display = "inline";}

    else{

      salario_pie.style.display = "none";}
    //P.I.E O P.F 
}

function calcular(){

    //SEGURO SOCIAL OBLIGATORIO
    var salario = document.getElementById("salario").value;
    var mensualmente = document.getElementById("mensualmente").value = parseFloat(salario) + "Bs.S";
    var dia = document.getElementById("dia").value

    if(salario >= 0 && salario < 1300){

        var total_sso = document.getElementById("cobrar_sso").value = parseFloat(mensualmente) * parseFloat(12) / parseFloat(52) * parseFloat(0.04) * parseFloat(dia) + "Bs.S";}

    else{

        alert("Lo sentimos pero usted tiene un salario superio a los 1.300,00Bs.S\nEl S.S.O solo puede cubrir 1.300,00Bs.S");
        var total_sso = document.getElementById("cobrar_sso").value = parseFloat(1300) * parseFloat(12) / parseFloat(52) * parseFloat(0.04) * parseFloat(dia) + "Bs.S";}
    //SEGURO SOCIAL OBLIGATORIO

    //P.I.E o P.F
    var total_pie = document.getElementById("cobrar_pie").value = parseFloat(mensualmente) * parseFloat(12) / parseFloat(52) * parseFloat(0.005) * parseFloat(dia) + "Bs.S";
    //P.I.E o P.F
}