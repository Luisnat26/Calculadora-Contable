alert("Esto es una ejemplo del Impuesto Sobre La Renta(I.S.L.R)");

function calcular(){

    var ingreso_bruto = document.getElementById("ingreso_bruto").value;
    var gastos_educacion = document.getElementById("educacion").value;
    var gastos_salud = document.getElementById("salud").value;
    var gastos_deportes = document.getElementById("deportes").value;
    var gastos_viviendas = document.getElementById("viviendas").value;
    var total_gastos = document.getElementById("gastos_brutos").value = parseFloat(gastos_educacion) + parseFloat(gastos_salud) + parseFloat(gastos_deportes) + parseFloat(gastos_viviendas) + "Bs.S";
    var impuestos_declarar = document.getElementById("declaracion").value = parseFloat(ingreso_bruto) - parseFloat(total_gastos) + "Bs.S";
    var impuestos_pagar_nj = document.getElementById("impuestos_pagados").value = parseFloat(impuestos_declarar) / parseFloat(9) + "Unidades Tributarias(U.T)";
    var total = document.getElementById("impuestos_pagados").value = parseFloat(impuestos_pagar_nj);
    
    //PERSONA NATURAL
    if(total > 0 && total < 1000){

        alert("Usted está clasificado por el S.E.N.I.A.T como: persona natural\ntiene que pagar impuestos de 1U.T a 900U.T");}

    else if(total >= 1000 && total < 1500){

        alert("Usted está clasificado por el S.E.N.I.A.T como: persona natural\ntiene que pagar impuestos de 1.000U.T a 1.400U.T");}

    else if(total >= 1500 && total < 2000){

        alert("Usted está clasificado por el S.E.N.I.A.T como: persona natural\ntiene que pagar impuestos de 1.500U.T a 1.900U.T");}

    else if(total >= 2000 && total < 2500){

        alert("Usted está clasificado por el S.E.N.I.A.T como: persona natural\ntiene que pagar impuestos de 2.000U.T a 2.400U.T");}

    else if(total >= 2500 && total < 3000){

        alert("Usted está clasificado por el S.E.N.I.A.T como: persona natural\ntiene que pagar impuestos de 2.500U.T a 2.900U.T");}

    else if(total >= 3000 && total < 4000){

        alert("Usted está clasificado por el S.E.N.I.A.T como: persona natural\ntiene que pagar impuestos de 3.000U.T a 3.900U.T");}

    else if(total >= 4000 && total < 5000){

        alert("Usted está clasificado por el S.E.N.I.A.T como: persona natural\ntiene que pagar impuestos de 4.000U.T a 4.900U.T");}

    else if(total >= 5000 && total < 6000){

        alert("Usted está clasificado por el S.E.N.I.A.T como: persona natural\ntiene que pagar impuestos de 5.000U.T a 5.900U.T");}
    //PERSONA NATURAL

    //PERSONA JURIDÍCA
    else if(total >= 6500 && total < 8000){

        alert("Usted está clasificado por el S.E.N.I.A.T como: persona juridíca\ntiene que pagar impuestos de 6.500U.T a 7.900U.T");}

    else if(total >= 8000 && total < 9500){

        alert("Usted está clasificado por el S.E.N.I.A.T como: persona juridíca\ntiene que pagar impuestos de 8.000U.T a 9.400U.T");}

    else if(total >= 9500 && total < 11000){

        alert("Usted está clasificado por el S.E.N.I.A.T como: persona juridíca\ntiene que pagar impuestos de 9.500U.T a 10.900U.T");}

    else if(total >= 11000 && total < 12500){

        alert("Usted está clasificado por el S.E.N.I.A.T como: persona juridíca\ntiene que pagar impuestos de 11.000U.T a 12.400U.T");}

    else if(total >= 12500 && total < 14000){

        alert("Usted está clasificado por el S.E.N.I.A.T como: persona juridíca\ntiene que pagar impuestos de 12.500U.T a 13.900U.T");}

    else if(total >= 14000 && total < 15500){

        alert("Usted está clasificado por el S.E.N.I.A.T como: persona juridíca\ntiene que pagar impuestos de 14.000U.T a 15.400U.T");}

    else if(total >= 15500 && total < 17000){

        alert("Usted está clasificado por el S.E.N.I.A.T como: persona juridíca\ntiene que pagar impuestos de 15.500U.T a 16.900U.T");}

    else if(total >= 17000 && total < 18500){

        alert("Usted está clasificado por el S.E.N.I.A.T como: persona juridíca\ntiene que pagar impuestos de 17.000U.T a 18.400U.T");}
    //PERSONA JURIDÍCA
    else{

        alert("Error en calculo de impuestos");}
    
}