function validar(){

    var seleccion_opciones = document.getElementById("seleccion");
    var seleccion_opciones2 = document.getElementById("seleccion_dos");
    var seleccion_opciones3 = document.getElementById("seleccion_tres");

    if(seleccion_opciones.value == 1){

        window.location.href = './Salarios/index_salario.html';}

    else if(seleccion_opciones.value == 2){

        window.location.href = './Vacaciones/index_vacaciones.html';}

    else if(seleccion_opciones.value == 3){

        window.location.href = './Dias/index_dias.html';}

    else if(seleccion_opciones.value == 4){

        window.location.href = './Horas/index_horas.html';}

    else if(seleccion_opciones.value == 5){

        window.location.href = './Ver Completo/index_ver_completo.html';}

    else if(seleccion_opciones2.value == 6){

        window.location.href = './Prestamos Sociales/Salarios Diarios/index_salario_diario.html';}

    else if(seleccion_opciones2.value == 7){

        window.location.href = './Prestamos Sociales/Alicuota del Bono Vacacional/index_alicuota_bv.html';}

    else if(seleccion_opciones2.value == 8){

        window.location.href = './Prestamos Sociales/Alicuota de Utilidades/index_alicuota_utilidades.html';}

    else if(seleccion_opciones2.value == 9){

        window.location.href = './Prestamos Sociales/Salarios Integral/index_salario_integral.html';}

    else if(seleccion_opciones2.value == 10){

        window.location.href = './Prestamos Sociales/index_prestamos_sociales.html';}

    else if(seleccion_opciones2.value == 11){

        window.location.href = './Prestamos Sociales/Retroactivos/index_retroactivos.html';}

    else if(seleccion_opciones2.value == 12){

        window.location.href = './Prestamos Sociales/Ver Completo/index_ver_completo.html';}

    else if(seleccion_opciones3.value == 13){

        window.location.href = './Impuestos/Fiscales/index_fiscales.html';}

    else if(seleccion_opciones3.value == 14){

        window.location.href = './Impuestos/Para Fiscales/index_para_fiscales.html';}

    else if(seleccion_opciones3.value == 15){

        window.location.href = './Impuestos/index_islr.html';}

    else{

        alert("Por favor seleccione una opción");}
    
}