//CONTENEDOR DÍA OPCIONES
var diario = document.getElementById("diario");
var dia_descanso = document.getElementById("dia_descanso");
var dia_feriado = document.getElementById("dia_feriado");
//CONTENEDOR DÍA OPCIONES

function validar(){

    //CONTENEDOR DÍA
    var salario_diario = document.getElementById("salario_diario");
    var salario_dia_descanso = document.getElementById("salario_dia_descanso");
    var salario_dia_feriado = document.getElementById("salario_dia_feriado");
    //CONTENEDOR DÍA

    //CONDICIONAL DIARIO
    if(diario.checked){

        salario_diario.style.display = "inline";}

    else{

        salario_diario.style.display = "none";}
    //CONDICIONAL DIARIO

    //CONDICIONAL DÍA DE DESCANSO
    if(dia_descanso.checked){

        salario_dia_descanso.style.display = "inline";}

    else{

        salario_dia_descanso.style.display = "none";}
    //CONDICIONAL DÍA DE DESCANSO

    //CONDICIONAL DÍA FERIADO
    if(dia_feriado.checked){

        salario_dia_feriado.style.display = "inline";}

    else{

        salario_dia_feriado.style.display = "none";}
    //CONDICIONAL DÍA FERIADO

    if(diario.checked == false && dia_descanso.checked == false && dia_feriado.checked == false){

        alert("Por favor seleccione una casilla para continuar");}

}

function calcular(){

    var salario_normal = document.getElementById("salario").value;
    var diario_trabajo = document.getElementById("diario_trabajo").value = parseFloat(salario_normal) / parseFloat(30) + "Bs.S";
    var descanso_trabajo = document.getElementById("descanso_trabajo").value = parseFloat(diario_trabajo) / parseFloat(0.50) + "Bs.S";
    var feriado_trabajo = document.getElementById("feriado_trabajo").value = parseFloat(descanso_trabajo) + "Bs.S";
    var total_dia = document.getElementById("cobrar_dia").value = parseFloat(salario_normal) + "Bs.S";
    var total_dia2 = document.getElementById("cobrar_dia");

    if(diario.checked == true){

        alert("Has activado la casilla diario");
        total_dia2.value = parseFloat(salario_normal) + parseFloat(diario_trabajo) + "Bs.S";}

    else if(dia_descanso.checked == true){

        alert("Has activado la casilla día de descanso");
        total_dia2.value = parseFloat(salario_normal) + parseFloat(descanso_trabajo) + "Bs.S";}

    else if(dia_feriado.checked == true){

        alert("Has activado la casilla día de feriado");
        total_dia2.value = parseFloat(salario_normal) + parseFloat(feriado_trabajo) + "Bs.S";}


    //ACTIVACIÓN DE DOS CASILLAS
    if(diario.checked == true && dia_descanso.checked == true){

        alert("Has activado dos casilla diario y día de descanso");
        total_dia2.value = parseFloat(salario_normal) + parseFloat(diario_trabajo) + parseFloat(descanso_trabajo) + "Bs.S";}

    else if(diario.checked == true && dia_feriado.checked == true){

        alert("Has activado dos casilla diario y día feriado");
        total_dia2.value = parseFloat(salario_normal) + parseFloat(diario_trabajo) + parseFloat(feriado_trabajo) + "Bs.S";}

    else if(dia_descanso.checked == true && dia_feriado.checked == true){

        alert("Has activado dos casilla día de descanso y día feriado");
        total_dia2.value = parseFloat(salario_normal) + parseFloat(descanso_trabajo) + parseFloat(feriado_trabajo) + "Bs.S";}
    //ACTIVACIÓN DE DOS CASILLAS

    //ACTIVACIÓN DE TRES CASILLAS
    if(diario.checked == true && dia_descanso.checked == true && dia_feriado.checked == true){

        alert("Has activado tres casilla, diario, día de descanso y día feriado");
        total_dia2.value = parseFloat(salario_normal) + parseFloat(diario_trabajo) + parseFloat(descanso_trabajo) + parseFloat(feriado_trabajo) + "Bs.S";}
    //ACTIVACIÓN DE TRES CASILLAS
}