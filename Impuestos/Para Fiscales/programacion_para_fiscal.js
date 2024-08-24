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
    
    //FONDO DE AHORROS DE VIVIENDAS
    var salario_normal = document.getElementById("salario").value;
    var mensualmente = document.getElementById("mensualmente").value = parseFloat(salario_normal) + "Bs.S";
    var diariamente = document.getElementById("diariamente").value = parseFloat(salario_normal) / parseFloat(30) + "Bs.S";
    var bono_vacacional = document.getElementById("bono_vacacional").value = parseFloat(diariamente) * parseFloat(15) / parseFloat(360) + "Bs.S";
    var alicuota_utilidades = document.getElementById("utilidades").value = parseFloat(diariamente) * parseFloat(30) / parseFloat(360) + "Bs.S";
    var salario_integral = document.getElementById("salario_integral").value = parseFloat(diariamente) + parseFloat(bono_vacacional) + parseFloat(alicuota_utilidades) + "Bs.S";
    var total_sso = document.getElementById("cobrar_sso").value = parseFloat(salario_integral) * parseFloat(0.01) + "Bs.S";
    //FONDO DE AHORROS DE VIVIENDAS

    //I.N.C.E.S
    var total_pie = document.getElementById("cobrar_pie").value = parseFloat(mensualmente) * parseFloat(0.005) * parseFloat(3) + "Bs.S";
    //I.N.C.E.S
}