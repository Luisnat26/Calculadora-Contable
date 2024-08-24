alert("Esto es un ejemplo de un salario completo");

var vacaciones_opciones = 0;
var dias = 0;
var horas = 0;

//BUCLES O CICLOS
do{

    vacaciones_opciones = prompt("¿Cuanto tiempo lleva en la empresa?: ¿Pongalo en meses?");
    
    //VARIABLES CONTENEDOR
    var vacaciones = document.getElementById("vacaciones");
    //VARIABLES CONTENEDOR

    alert("Según la Ley Organica de Trabajadores y Trabajadoras de Venezuela (LOTT) dice que la vacaciones se cobran apartir de que tengan\n6 meses trabajando en la empresa");

    //CONDICIONAL VACACIONES
    if(vacaciones_opciones >= 6){

        alert("Usted lleva 6 meses o más en nuestra empresa recibe vacaciones");
        vacaciones.style.display = "inline";}

    else if(vacaciones_opciones >= 0 && vacaciones_opciones <= 6){

        alert("Usted no tiene derecho de recibir vacaciones");}

    else{

        alert("Intoduzca un numero para saber si usted recibe vacaciones");}
    //CONDICIONAL VACACIONES
}
while(vacaciones_opciones == 0);
//BUCLES O CICLOS


//BUCLES O CICLOS2
do{

    dias = prompt("¿Elija un número para elegir los días que ha trabajado?\n1- Días Diario\n2- Días de descansos\n3- Días Feriados\n4- Días diarios y Días de descansos\n5- Días diarios y Días Feriados\n6- Días de Descansos y Días Feriados\n7- Todos los días");
    
    //VARIABLES CONTENEDOR
    var salario_diario = document.getElementById("salario_diario");
    var salario_dia_descanso = document.getElementById("salario_dia_descanso");
    var salario_dia_feriado = document.getElementById("salario_dia_feriado");
    //VARIABLES CONTENEDOR

    //CONDICIONAL DÍAS
    if(dias == 1){

        alert("Haz elegido días diario");
        salario_diario.style.display = "inline";}

    else if(dias == 2){

        alert("Haz elegido días de descanso");
        salario_dia_descanso.style.display = "inline";}

    else if(dias == 3){

        alert("Haz elegido días feriados");
        salario_dia_feriado.style.display = "inline";}

    else if(dias == 4){

        alert("Haz elegido días diario y días de descanso");
        salario_diario.style.display = "inline";
        salario_dia_descanso.style.display = "inline";}

    else if(dias == 5){

        alert("Haz elegido días diario y días feriados");
        salario_diario.style.display = "inline";
        salario_dia_feriado.style.display = "inline";}

    else if(dias == 6){

        alert("Haz elegido días de descanso y días feriados");
        salario_dia_descanso.style.display = "inline";
        salario_dia_feriado.style.display = "inline";}

    else if(dias == 7){

        alert("Haz elegido días diario, días de descanso y días feriados");
        salario_diario.style.display = "inline";
        salario_dia_descanso.style.display = "inline";
        salario_dia_feriado.style.display = "inline";}

    else if(dias == 0 || dias > 7){

        alert("Por favor introduzca un numero del 1 al 7 para saber los días que ha trabajado")
    }

    else{

        alert("Por favor elija una opción, para saber los días de trabajo");}
    //CONDICIONAL DÍAS
}
while(dias == 0 || dias > 7);
//BUCLES O CICLOS2

//BUCLES O CICLOS3
do{

    horas = prompt("¿Elija un número para elegir las horas que ha trabajado?\n1- Hora Normal\n2- Horas Extras\n3- Horas Nocturnas\n4- Horas Normal y Horas Extras\n5- Horas Normal y Horas Nocturnas\n6- Horas Extras y Horas Nocturnas\n7- Todas las horas");
    
    //VARIABLES CONTENEDOR
    var salario_hora_normal = document.getElementById("hora_normal");
    var salario_horas_extras = document.getElementById("horas_extras");
    var salario_horas_nocturnas = document.getElementById("horas_nocturnas");
    //VARIABLES CONTENEDOR

    //CONDICIONAL HORAS
    if(horas == 1){

        alert("Haz elegido hora normal");
        salario_hora_normal.style.display = "inline";}

    else if(horas == 2){

        alert("Haz elegido días de descanso");
        salario_horas_extras.style.display = "inline";}

    else if(horas == 3){

        alert("Haz elegido horas nocturnas");
        salario_horas_nocturnas.style.display = "inline";}

    else if(horas == 4){

        alert("Haz elegido hora normal y horas extras");
        salario_hora_normal.style.display = "inline";
        salario_horas_extras.style.display = "inline";}

    else if(horas == 5){

        alert("Haz elegido horas normal y horas nocturnas");
        salario_hora_normal.style.display = "inline";
        salario_horas_nocturnas.style.display = "inline";}

    else if(horas == 6){

        alert("Haz elegido días horas extras y horas nocturnas");
        salario_horas_extras.style.display = "inline";
        salario_horas_nocturnas.style.display = "inline";}

    else if(horas == 7){

        alert("Haz elegido hora normal, horas extras y horas nocturnas");
        salario_hora_normal.style.display = "inline";
        salario_horas_extras.style.display = "inline";
        salario_horas_nocturnas.style.display = "inline";}

    else if(horas == 0 || horas > 7){

        alert("Por favor introduzca un numero del 1 al 7 para saber las horas que ha trabajado");}

    else{

        alert("Por favor elija una opción, para saber las horas de trabajo");}
    //CONDICIONAL HORAS
}
while(horas == 0 || horas > 7);
//BUCLES O CICLOS3

function calcular(vacaciones_opciones, dias, horas){

    var salario = document.getElementById("salario").value;
    var salario_mensual = document.getElementById("mensualmente").value = parseFloat(salario) + "Bs.S";
    var salario_vacaciones = document.getElementById("salario_vacaciones").value = parseFloat(salario) / parseFloat(2) + "Bs.S";
    var salario_diario = document.getElementById("diario").value = parseFloat(salario) / parseFloat(30) + "Bs.S";
    var salario_dia_descanso = document.getElementById("salario_descanso").value = parseFloat(salario_diario) * parseFloat(0.50) + "Bs.S";
    var salario_dia_feriado = document.getElementById("salario_feriados").value = parseFloat(salario_dia_descanso) + "Bs.S";
    var salario_hora_normal = document.getElementById("salario_hora_normal").value = parseFloat(salario) / parseFloat(8) + "Bs.S";
    var salario_horas_extras = document.getElementById("salario_horas_extras").value = parseFloat(salario_hora_normal) * parseFloat(0.50) + "Bs.S";
    var salario_horas_nocturnas = document.getElementById("salario_horas_nocturnas").value = parseFloat(salario_hora_normal) * parseFloat(0.30) + "Bs.S";
    

    //CONDICIONAL VACACIONES
    if(vacaciones_opciones >= 6){

        var salario_total = document.getElementById("cobrar_todo");

        //CONDICIONAL DÍAS DIARIOS
        if(dias == 1 && horas == 1){

            salario_total.value = parseFloat(salario) + parseFloat(salario_vacaciones) + parseFloat(salario_diario) + parseFloat(salario_hora_normal) + "Bs.S";}
        
        else if(dias == 1 && horas == 2){

            salario_total.value = parseFloat(salario) + parseFloat(salario_vacaciones) + parseFloat(salario_diario) + parseFloat(salario_horas_extras) + "Bs.S";}

        else if(dias == 1 && horas == 3){

            salario_total.value = parseFloat(salario) + parseFloat(salario_vacaciones) + parseFloat(salario_diario) + parseFloat(salario_horas_nocturnas) + "Bs.S";}

        else if(dias == 1 && horas == 4){

            salario_total.value = parseFloat(salario) + parseFloat(salario_vacaciones) + parseFloat(salario_diario) + parseFloat(salario_hora_normal) + parseFloat(salario_horas_extras) + "Bs.S";}

        else if(dias == 1 && horas == 5){

            salario_total.value = parseFloat(salario) + parseFloat(salario_vacaciones) + parseFloat(salario_diario) + parseFloat(salario_hora_normal) + parseFloat(salario_horas_nocturnas) + "Bs.S";}

        else if(dias == 1 && horas == 6){

            salario_total.value = parseFloat(salario) + parseFloat(salario_vacaciones) + parseFloat(salario_diario) + parseFloat(salario_horas_extras) + parseFloat(salario_horas_nocturnas) + "Bs.S";}

        else if(dias == 1 && horas == 7){

            salario_total.value = parseFloat(salario) + parseFloat(salario_vacaciones) + parseFloat(salario_diario) + parseFloat(salario_hora_normal) + parseFloat(salario_horas_extras) + parseFloat(salario_horas_nocturnas) + "Bs.S";}
        //CONDICIONAL DÍAS DIARIOS

        //CONDICIONAL DÍAS DE DESCANSO
        else if(dias == 2 && horas == 1){

            salario_total.value = parseFloat(salario) + parseFloat(salario_vacaciones) + parseFloat(salario_dia_descanso) + parseFloat(salario_hora_normal) + "Bs.S";}
        
        else if(dias == 2 && horas == 2){

            salario_total.value = parseFloat(salario) + parseFloat(salario_vacaciones) + parseFloat(salario_dia_descanso) + parseFloat(salario_horas_extras) + "Bs.S";}

        else if(dias == 2 && horas == 3){

            salario_total.value = parseFloat(salario) + parseFloat(salario_vacaciones) + parseFloat(salario_dia_descanso) + parseFloat(salario_horas_nocturnas) + "Bs.S";}

        else if(dias == 2 && horas == 4){

            salario_total.value = parseFloat(salario) + parseFloat(salario_vacaciones) + parseFloat(salario_dia_descanso) + parseFloat(salario_hora_normal) + parseFloat(salario_horas_extras) + "Bs.S";}

        else if(dias == 2 && horas == 5){

            salario_total.value = parseFloat(salario) + parseFloat(salario_vacaciones) + parseFloat(salario_dia_descanso) + parseFloat(salario_hora_normal) + parseFloat(salario_horas_nocturnas) + "Bs.S";}

        else if(dias == 2 && horas == 6){

            salario_total.value = parseFloat(salario) + parseFloat(salario_vacaciones) + parseFloat(salario_dia_descanso) + parseFloat(salario_horas_extras) + parseFloat(salario_horas_nocturnas) + "Bs.S";}

        else if(dias == 2 && horas == 7){

            salario_total.value = parseFloat(salario) + parseFloat(salario_vacaciones) + parseFloat(salario_dia_descanso) + parseFloat(salario_hora_normal) + parseFloat(salario_horas_extras) + parseFloat(salario_horas_nocturnas) + "Bs.S";}
        //CONDICIONAL DÍAS DE DESCANSO

        //CONDICIONAL DÍAS FERIADOS
        else if(dias == 3 && horas == 1){

            salario_total.value = parseFloat(salario) + parseFloat(salario_vacaciones) + parseFloat(salario_dia_feriado) + parseFloat(salario_hora_normal) + "Bs.S";}
        
        else if(dias == 3 && horas == 2){

            salario_total.value = parseFloat(salario) + parseFloat(salario_vacaciones) + parseFloat(salario_dia_feriado) + parseFloat(salario_horas_extras) + "Bs.S";}

        else if(dias == 3 && horas == 3){

            salario_total.value = parseFloat(salario) + parseFloat(salario_vacaciones) + parseFloat(salario_dia_feriado) + parseFloat(salario_horas_nocturnas) + "Bs.S";}

        else if(dias == 3 && horas == 4){

            salario_total.value = parseFloat(salario) + parseFloat(salario_vacaciones) + parseFloat(salario_dia_feriado) + parseFloat(salario_hora_normal) + parseFloat(salario_horas_extras) + "Bs.S";}

        else if(dias == 3 && horas == 5){

            salario_total.value = parseFloat(salario) + parseFloat(salario_vacaciones) + parseFloat(salario_dia_feriado) + parseFloat(salario_hora_normal) + parseFloat(salario_horas_nocturnas) + "Bs.S";}

        else if(dias == 3 && horas == 6){

            salario_total.value = parseFloat(salario) + parseFloat(salario_vacaciones) + parseFloat(salario_dia_feriado) + parseFloat(salario_horas_extras) + parseFloat(salario_horas_nocturnas) + "Bs.S";}

        else if(dias == 3 && horas == 7){

            salario_total.value = parseFloat(salario) + parseFloat(salario_vacaciones) + parseFloat(salario_dia_feriado) + parseFloat(salario_hora_normal) + parseFloat(salario_horas_extras) + parseFloat(salario_horas_nocturnas) + "Bs.S";}
        //CONDICIONAL DÍAS FERIADOS

        //CONDICIONAL DÍAS DIARIOS Y DÍAS DE DESCANSO
        else if(dias == 4 && horas == 1){

            salario_total.value = parseFloat(salario) + parseFloat(salario_vacaciones) + parseFloat(salario_diario) + parseFloat(salario_dia_descanso) + parseFloat(salario_hora_normal) + "Bs.S";}
        
        else if(dias == 4 && horas == 2){

            salario_total.value = parseFloat(salario) + parseFloat(salario_vacaciones) + parseFloat(salario_diario) + parseFloat(salario_dia_descanso) + parseFloat(salario_horas_extras) + "Bs.S";}

        else if(dias == 4 && horas == 3){

            salario_total.value = parseFloat(salario) + parseFloat(salario_vacaciones) + parseFloat(salario_diario) + parseFloat(salario_dia_descanso) + parseFloat(salario_horas_nocturnas) + "Bs.S";}

        else if(dias == 4 && horas == 4){

            salario_total.value = parseFloat(salario) + parseFloat(salario_vacaciones) + parseFloat(salario_diario) + parseFloat(salario_dia_descanso) + parseFloat(salario_hora_normal) + parseFloat(salario_horas_extras) + "Bs.S";}

        else if(dias == 4 && horas == 5){

            salario_total.value = parseFloat(salario) + parseFloat(salario_vacaciones) + parseFloat(salario_diario) + parseFloat(salario_dia_descanso) + parseFloat(salario_hora_normal) + parseFloat(salario_horas_nocturnas) + "Bs.S";}

        else if(dias == 4 && horas == 6){

            salario_total.value = parseFloat(salario) + parseFloat(salario_vacaciones) + parseFloat(salario_diario) + parseFloat(salario_dia_descanso) + parseFloat(salario_horas_extras) + parseFloat(salario_horas_nocturnas) + "Bs.S";}

        else if(dias == 4 && horas == 7){

            salario_total.value = parseFloat(salario) + parseFloat(salario_vacaciones) + parseFloat(salario_diario) + parseFloat(salario_dia_descanso) + parseFloat(salario_hora_normal) + parseFloat(salario_horas_extras) + parseFloat(salario_horas_nocturnas) + "Bs.S";}
        //CONDICIONAL DÍAS DIARIOS Y DÍAS DE DESCANSO

        //CONDICIONAL DÍAS DIARIOS Y DÍAS FERIADOS
        else if(dias == 5 && horas == 1){

            salario_total.value = parseFloat(salario) + parseFloat(salario_vacaciones) + parseFloat(salario_diario) + parseFloat(salario_dia_feriado) + parseFloat(salario_hora_normal) + "Bs.S";}
        
        else if(dias == 5 && horas == 2){

            salario_total.value = parseFloat(salario) + parseFloat(salario_vacaciones) + parseFloat(salario_diario) + parseFloat(salario_dia_feriado) + parseFloat(salario_horas_extras) + "Bs.S";}

        else if(dias == 5 && horas == 3){

            salario_total.value = parseFloat(salario) + parseFloat(salario_vacaciones) + parseFloat(salario_diario) + parseFloat(salario_dia_feriado) + parseFloat(salario_horas_nocturnas) + "Bs.S";}

        else if(dias == 5 && horas == 4){

            salario_total.value = parseFloat(salario) + parseFloat(salario_vacaciones) + parseFloat(salario_diario) + parseFloat(salario_dia_feriado) + parseFloat(salario_hora_normal) + parseFloat(salario_horas_extras) + "Bs.S";}

        else if(dias == 5 && horas == 5){

            salario_total.value = parseFloat(salario) + parseFloat(salario_vacaciones) + parseFloat(salario_diario) + parseFloat(salario_dia_feriado) + parseFloat(salario_hora_normal) + parseFloat(salario_horas_nocturnas) + "Bs.S";}

        else if(dias == 5 && horas == 6){

            salario_total.value = parseFloat(salario) + parseFloat(salario_vacaciones) + parseFloat(salario_diario) + parseFloat(salario_dia_feriado) + parseFloat(salario_horas_extras) + parseFloat(salario_horas_nocturnas) + "Bs.S";}

        else if(dias == 5 && horas == 7){

            salario_total.value = parseFloat(salario) + parseFloat(salario_vacaciones) + parseFloat(salario_diario) + parseFloat(salario_dia_feriado) + parseFloat(salario_hora_normal) + parseFloat(salario_horas_extras) + parseFloat(salario_horas_nocturnas) + "Bs.S";}
        //CONDICIONAL DÍAS DIARIOS Y DÍAS FERIADOS

        //CONDICIONAL DÍAS DESCANSO Y DÍAS FERIADOS
        else if(dias == 6 && horas == 1){

            salario_total.value = parseFloat(salario) + parseFloat(salario_vacaciones) + parseFloat(salario_dia_descanso) + parseFloat(salario_dia_feriado) + parseFloat(salario_hora_normal) + "Bs.S";}
        
        else if(dias == 6 && horas == 2){

            salario_total.value = parseFloat(salario) + parseFloat(salario_vacaciones) + parseFloat(salario_dia_descanso) + parseFloat(salario_dia_feriado) + parseFloat(salario_horas_extras) + "Bs.S";}

        else if(dias == 6 && horas == 3){

            salario_total.value = parseFloat(salario) + parseFloat(salario_vacaciones) + parseFloat(salario_dia_descanso) + parseFloat(salario_dia_feriado) + parseFloat(salario_horas_nocturnas) + "Bs.S";}

        else if(dias == 6 && horas == 4){

            salario_total.value = parseFloat(salario) + parseFloat(salario_vacaciones) + parseFloat(salario_dia_descanso) + parseFloat(salario_dia_feriado) + parseFloat(salario_hora_normal) + parseFloat(salario_horas_extras) + "Bs.S";}

        else if(dias == 6 && horas == 5){

            salario_total.value = parseFloat(salario) + parseFloat(salario_vacaciones) + parseFloat(salario_dia_descanso) + parseFloat(salario_dia_feriado) + parseFloat(salario_hora_normal) + parseFloat(salario_horas_nocturnas) + "Bs.S";}

        else if(dias == 6 && horas == 6){

            salario_total.value = parseFloat(salario) + parseFloat(salario_vacaciones) + parseFloat(salario_dia_descanso) + parseFloat(salario_dia_feriado) + parseFloat(salario_horas_extras) + parseFloat(salario_horas_nocturnas) + "Bs.S";}

        else if(dias == 6 && horas == 7){

            salario_total.value = parseFloat(salario) + parseFloat(salario_vacaciones) + parseFloat(salario_dia_descanso) + parseFloat(salario_dia_feriado) + parseFloat(salario_hora_normal) + parseFloat(salario_horas_extras) + parseFloat(salario_horas_nocturnas) + "Bs.S";}
        //CONDICIONAL DÍAS DE DESCANSO Y DÍAS FERIADOS

        //CONDICIONAL DÍAS DIARIOS, DÍAS DE DESCANSO Y DÍAS FERIADOS
        else if(dias == 7 && horas == 1){

            salario_total.value = parseFloat(salario) + parseFloat(salario_vacaciones) + parseFloat(salario_diario) + parseFloat(salario_dia_descanso) + parseFloat(salario_dia_feriado) + parseFloat(salario_hora_normal) + "Bs.S";}
        
        else if(dias == 7 && horas == 2){

            salario_total.value = parseFloat(salario) + parseFloat(salario_vacaciones) + parseFloat(salario_diario) + parseFloat(salario_dia_descanso) + parseFloat(salario_dia_feriado) + parseFloat(salario_horas_extras) + "Bs.S";}

        else if(dias == 7 && horas == 3){

            salario_total.value = parseFloat(salario) + parseFloat(salario_vacaciones) + parseFloat(salario_diario) + parseFloat(salario_dia_descanso) + parseFloat(salario_dia_feriado) + parseFloat(salario_horas_nocturnas) + "Bs.S";}

        else if(dias == 7 && horas == 4){

            salario_total.value = parseFloat(salario) + parseFloat(salario_vacaciones) + parseFloat(salario_diario) + parseFloat(salario_dia_descanso) + parseFloat(salario_dia_feriado) + parseFloat(salario_hora_normal) + parseFloat(salario_horas_extras) + "Bs.S";}

        else if(dias == 7 && horas == 5){

            salario_total.value = parseFloat(salario) + parseFloat(salario_vacaciones) + parseFloat(salario_diario) + parseFloat(salario_dia_descanso) + parseFloat(salario_dia_feriado) + parseFloat(salario_hora_normal) + parseFloat(salario_horas_nocturnas) + "Bs.S";}

        else if(dias == 7 && horas == 6){

            salario_total.value = parseFloat(salario) + parseFloat(salario_vacaciones) + parseFloat(salario_diario) + parseFloat(salario_dia_descanso) + parseFloat(salario_dia_feriado) + parseFloat(salario_horas_extras) + parseFloat(salario_horas_nocturnas) + "Bs.S";}

        else if(dias == 7 && horas == 7){

            salario_total.value = parseFloat(salario) + parseFloat(salario_vacaciones) + parseFloat(salario_diario) + parseFloat(salario_dia_descanso) + parseFloat(salario_dia_feriado) + parseFloat(salario_hora_normal) + parseFloat(salario_horas_extras) + parseFloat(salario_horas_nocturnas) + "Bs.S";}
        //CONDICIONAL DÍAS DIARIOS, DÍAS DESCANSO Y DÍAS FERIADOS
    }
    //CONDICIONAL VACACIONES

    //CONDICIONAL SIN VACACIONES
    if(vacaciones_opciones < 6){

        var salario_total = document.getElementById("cobrar_todo");

        //CONDICIONAL DÍAS DIARIOS
        if(dias == 1 && horas == 1){

            salario_total.value = parseFloat(salario) + parseFloat(salario_diario) + parseFloat(salario_hora_normal) + "Bs.S";}
        
        else if(dias == 1 && horas == 2){

            salario_total.value = parseFloat(salario) +  parseFloat(salario_diario) + parseFloat(salario_horas_extras) + "Bs.S";}

        else if(dias == 1 && horas == 3){

            salario_total.value = parseFloat(salario) + parseFloat(salario_diario) + parseFloat(salario_horas_nocturnas) + "Bs.S";}

        else if(dias == 1 && horas == 4){

            salario_total.value = parseFloat(salario) + parseFloat(salario_diario) + parseFloat(salario_hora_normal) + parseFloat(salario_horas_extras) + "Bs.S";}

        else if(dias == 1 && horas == 5){

            salario_total.value = parseFloat(salario) +  parseFloat(salario_diario) + parseFloat(salario_hora_normal) + parseFloat(salario_horas_nocturnas) + "Bs.S";}

        else if(dias == 1 && horas == 6){

            salario_total.value = parseFloat(salario) +  parseFloat(salario_diario) + parseFloat(salario_horas_extras) + parseFloat(salario_horas_nocturnas) + "Bs.S";}

        else if(dias == 1 && horas == 7){

            salario_total.value = parseFloat(salario) +  parseFloat(salario_diario) + parseFloat(salario_hora_normal) + parseFloat(salario_horas_extras) + parseFloat(salario_horas_nocturnas) + "Bs.S";}
        //CONDICIONAL DÍAS DIARIOS

        //CONDICIONAL DÍAS DE DESCANSO
        else if(dias == 2 && horas == 1){

            salario_total.value = parseFloat(salario) +  parseFloat(salario_dia_descanso) + parseFloat(salario_hora_normal) + "Bs.S";}
        
        else if(dias == 2 && horas == 2){

            salario_total.value = parseFloat(salario) +  parseFloat(salario_dia_descanso) + parseFloat(salario_horas_extras) + "Bs.S";}

        else if(dias == 2 && horas == 3){

            salario_total.value = parseFloat(salario) +  parseFloat(salario_dia_descanso) + parseFloat(salario_horas_nocturnas) + "Bs.S";}

        else if(dias == 2 && horas == 4){

            salario_total.value = parseFloat(salario) +  parseFloat(salario_dia_descanso) + parseFloat(salario_hora_normal) + parseFloat(salario_horas_extras) + "Bs.S";}

        else if(dias == 2 && horas == 5){

            salario_total.value = parseFloat(salario) +  parseFloat(salario_dia_descanso) + parseFloat(salario_hora_normal) + parseFloat(salario_horas_nocturnas) + "Bs.S";}

        else if(dias == 2 && horas == 6){

            salario_total.value = parseFloat(salario) +  parseFloat(salario_dia_descanso) + parseFloat(salario_horas_extras) + parseFloat(salario_horas_nocturnas) + "Bs.S";}

        else if(dias == 2 && horas == 7){

            salario_total.value = parseFloat(salario) +  parseFloat(salario_dia_descanso) + parseFloat(salario_hora_normal) + parseFloat(salario_horas_extras) + parseFloat(salario_horas_nocturnas) + "Bs.S";}
        //CONDICIONAL DÍAS DE DESCANSO

        //CONDICIONAL DÍAS FERIADOS
        else if(dias == 3 && horas == 1){

            salario_total.value = parseFloat(salario) +  parseFloat(salario_dia_feriado) + parseFloat(salario_hora_normal) + "Bs.S";}
        
        else if(dias == 3 && horas == 2){

            salario_total.value = parseFloat(salario) +  parseFloat(salario_dia_feriado) + parseFloat(salario_horas_extras) + "Bs.S";}

        else if(dias == 3 && horas == 3){

            salario_total.value = parseFloat(salario) +  parseFloat(salario_dia_feriado) + parseFloat(salario_horas_nocturnas) + "Bs.S";}

        else if(dias == 3 && horas == 4){

            salario_total.value = parseFloat(salario) +  parseFloat(salario_dia_feriado) + parseFloat(salario_hora_normal) + parseFloat(salario_horas_extras) + "Bs.S";}

        else if(dias == 3 && horas == 5){

            salario_total.value = parseFloat(salario) +  parseFloat(salario_dia_feriado) + parseFloat(salario_hora_normal) + parseFloat(salario_horas_nocturnas) + "Bs.S";}

        else if(dias == 3 && horas == 6){

            salario_total.value = parseFloat(salario) +  parseFloat(salario_dia_feriado) + parseFloat(salario_horas_extras) + parseFloat(salario_horas_nocturnas) + "Bs.S";}

        else if(dias == 3 && horas == 7){

            salario_total.value = parseFloat(salario) +  parseFloat(salario_dia_feriado) + parseFloat(salario_hora_normal) + parseFloat(salario_horas_extras) + parseFloat(salario_horas_nocturnas) + "Bs.S";}
        //CONDICIONAL DÍAS FERIADOS

        //CONDICIONAL DÍAS DIARIOS Y DÍAS DE DESCANSO
        else if(dias == 4 && horas == 1){

            salario_total.value = parseFloat(salario) +  parseFloat(salario_diario) + parseFloat(salario_dia_descanso) + parseFloat(salario_hora_normal) + "Bs.S";}
        
        else if(dias == 4 && horas == 2){

            salario_total.value = parseFloat(salario) +  parseFloat(salario_diario) + parseFloat(salario_dia_descanso) + parseFloat(salario_horas_extras) + "Bs.S";}

        else if(dias == 4 && horas == 3){

            salario_total.value = parseFloat(salario) +  parseFloat(salario_diario) + parseFloat(salario_dia_descanso) + parseFloat(salario_horas_nocturnas) + "Bs.S";}

        else if(dias == 4 && horas == 4){

            salario_total.value = parseFloat(salario) +  parseFloat(salario_diario) + parseFloat(salario_dia_descanso) + parseFloat(salario_hora_normal) + parseFloat(salario_horas_extras) + "Bs.S";}

        else if(dias == 4 && horas == 5){

            salario_total.value = parseFloat(salario) +  parseFloat(salario_diario) + parseFloat(salario_dia_descanso) + parseFloat(salario_hora_normal) + parseFloat(salario_horas_nocturnas) + "Bs.S";}

        else if(dias == 4 && horas == 6){

            salario_total.value = parseFloat(salario) +  parseFloat(salario_diario) + parseFloat(salario_dia_descanso) + parseFloat(salario_horas_extras) + parseFloat(salario_horas_nocturnas) + "Bs.S";}

        else if(dias == 4 && horas == 7){

            salario_total.value = parseFloat(salario) +  parseFloat(salario_diario) + parseFloat(salario_dia_descanso) + parseFloat(salario_hora_normal) + parseFloat(salario_horas_extras) + parseFloat(salario_horas_nocturnas) + "Bs.S";}
        //CONDICIONAL DÍAS DIARIOS Y DÍAS DE DESCANSO

        //CONDICIONAL DÍAS DIARIOS Y DÍAS FERIADOS
        else if(dias == 5 && horas == 1){

            salario_total.value = parseFloat(salario) +  parseFloat(salario_diario) + parseFloat(salario_dia_feriado) + parseFloat(salario_hora_normal) + "Bs.S";}
        
        else if(dias == 5 && horas == 2){

            salario_total.value = parseFloat(salario) +  parseFloat(salario_diario) + parseFloat(salario_dia_feriado) + parseFloat(salario_horas_extras) + "Bs.S";}

        else if(dias == 5 && horas == 3){

            salario_total.value = parseFloat(salario) +  parseFloat(salario_diario) + parseFloat(salario_dia_feriado) + parseFloat(salario_horas_nocturnas) + "Bs.S";}

        else if(dias == 5 && horas == 4){

            salario_total.value = parseFloat(salario) +  parseFloat(salario_diario) + parseFloat(salario_dia_feriado) + parseFloat(salario_hora_normal) + parseFloat(salario_horas_extras) + "Bs.S";}

        else if(dias == 5 && horas == 5){

            salario_total.value = parseFloat(salario) +  parseFloat(salario_vacaciones) + parseFloat(salario_diario) + parseFloat(salario_dia_feriado) + parseFloat(salario_hora_normal) + parseFloat(salario_horas_nocturnas) + "Bs.S";}

        else if(dias == 5 && horas == 6){

            salario_total.value = parseFloat(salario) +  parseFloat(salario_diario) + parseFloat(salario_dia_feriado) + parseFloat(salario_horas_extras) + parseFloat(salario_horas_nocturnas) + "Bs.S";}

        else if(dias == 5 && horas == 7){

            salario_total.value = parseFloat(salario) +  parseFloat(salario_diario) + parseFloat(salario_dia_feriado) + parseFloat(salario_hora_normal) + parseFloat(salario_horas_extras) + parseFloat(salario_horas_nocturnas) + "Bs.S";}
        //CONDICIONAL DÍAS DIARIOS Y DÍAS FERIADOS

        //CONDICIONAL DÍAS DESCANSO Y DÍAS FERIADOS
        else if(dias == 6 && horas == 1){

            salario_total.value = parseFloat(salario) +  parseFloat(salario_dia_descanso) + parseFloat(salario_dia_feriado) + parseFloat(salario_hora_normal) + "Bs.S";}
        
        else if(dias == 6 && horas == 2){

            salario_total.value = parseFloat(salario) +  parseFloat(salario_dia_descanso) + parseFloat(salario_dia_feriado) + parseFloat(salario_horas_extras) + "Bs.S";}

        else if(dias == 6 && horas == 3){

            salario_total.value = parseFloat(salario) +  parseFloat(salario_dia_descanso) + parseFloat(salario_dia_feriado) + parseFloat(salario_horas_nocturnas) + "Bs.S";}

        else if(dias == 6 && horas == 4){

            salario_total.value = parseFloat(salario) +  parseFloat(salario_dia_descanso) + parseFloat(salario_dia_feriado) + parseFloat(salario_hora_normal) + parseFloat(salario_horas_extras) + "Bs.S";}

        else if(dias == 6 && horas == 5){

            salario_total.value = parseFloat(salario) +  parseFloat(salario_dia_descanso) + parseFloat(salario_dia_feriado) + parseFloat(salario_hora_normal) + parseFloat(salario_horas_nocturnas) + "Bs.S";}

        else if(dias == 6 && horas == 6){

            salario_total.value = parseFloat(salario) +  parseFloat(salario_dia_descanso) + parseFloat(salario_dia_feriado) + parseFloat(salario_horas_extras) + parseFloat(salario_horas_nocturnas) + "Bs.S";}

        else if(dias == 6 && horas == 7){

            salario_total.value = parseFloat(salario) +  parseFloat(salario_dia_descanso) + parseFloat(salario_dia_feriado) + parseFloat(salario_hora_normal) + parseFloat(salario_horas_extras) + parseFloat(salario_horas_nocturnas) + "Bs.S";}
        //CONDICIONAL DÍAS DE DESCANSO Y DÍAS FERIADOS

        //CONDICIONAL DÍAS DIARIOS, DÍAS DE DESCANSO Y DÍAS FERIADOS
        else if(dias == 7 && horas == 1){

            salario_total.value = parseFloat(salario) +  parseFloat(salario_diario) + parseFloat(salario_dia_descanso) + parseFloat(salario_dia_feriado) + parseFloat(salario_hora_normal) + "Bs.S";}
        
        else if(dias == 7 && horas == 2){

            salario_total.value = parseFloat(salario) +  parseFloat(salario_diario) + parseFloat(salario_dia_descanso) + parseFloat(salario_dia_feriado) + parseFloat(salario_horas_extras) + "Bs.S";}

        else if(dias == 7 && horas == 3){

            salario_total.value = parseFloat(salario) +  parseFloat(salario_diario) + parseFloat(salario_dia_descanso) + parseFloat(salario_dia_feriado) + parseFloat(salario_horas_nocturnas) + "Bs.S";}

        else if(dias == 7 && horas == 4){

            salario_total.value = parseFloat(salario) +  parseFloat(salario_diario) + parseFloat(salario_dia_descanso) + parseFloat(salario_dia_feriado) + parseFloat(salario_hora_normal) + parseFloat(salario_horas_extras) + "Bs.S";}

        else if(dias == 7 && horas == 5){

            salario_total.value = parseFloat(salario) +  parseFloat(salario_diario) + parseFloat(salario_dia_descanso) + parseFloat(salario_dia_feriado) + parseFloat(salario_hora_normal) + parseFloat(salario_horas_nocturnas) + "Bs.S";}

        else if(dias == 7 && horas == 6){

            salario_total.value = parseFloat(salario) +  parseFloat(salario_diario) + parseFloat(salario_dia_descanso) + parseFloat(salario_dia_feriado) + parseFloat(salario_horas_extras) + parseFloat(salario_horas_nocturnas) + "Bs.S";}

        else if(dias == 7 && horas == 7){

            salario_total.value = parseFloat(salario) +  parseFloat(salario_diario) + parseFloat(salario_dia_descanso) + parseFloat(salario_dia_feriado) + parseFloat(salario_hora_normal) + parseFloat(salario_horas_extras) + parseFloat(salario_horas_nocturnas) + "Bs.S";}
        //CONDICIONAL DÍAS DIARIOS, DÍAS DESCANSO Y DÍAS FERIADOS
    }
    //CONDICIONAL SIN VACACIONES

    
}