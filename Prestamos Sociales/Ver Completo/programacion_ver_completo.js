alert("Esto es un ejemplo de Préstamos Sociales y Retroactivos Completos")

function calcular(){

    var salario_normal = document.getElementById("salario").value;
    var mensualmente = document.getElementById("mensualmente").value = parseFloat(salario_normal) + "Bs.S";
    var diariamente = document.getElementById("diariamente").value = parseFloat(salario_normal) / parseFloat(30) + "Bs.S";
    var bono_vacacional = document.getElementById("bono_vacacional").value = parseFloat(diariamente) * parseFloat(15) / parseFloat(360) + "Bs.S";
    var alicuota_utilidades = document.getElementById("utilidades").value = parseFloat(diariamente) * parseFloat(30) / parseFloat(360) + "Bs.S";
    var salario_integral = document.getElementById("salario_integral").value = parseFloat(diariamente) + parseFloat(bono_vacacional) + parseFloat(alicuota_utilidades) + "Bs.S";
    var meses_empresa = document.getElementById("meses_empresa").value;
    var prestamos_sociales = document.getElementById("salario_ps").value = parseFloat(salario_integral) * parseFloat(15) * parseFloat(meses_empresa) + "Bs.S";
    var ultimo_salario_diario = document.getElementById("ultimo_si").value = parseFloat(diariamente) + "Bs.S";
    var retroactivos = document.getElementById("salario_retroactivos").value = parseFloat(ultimo_salario_diario) * parseFloat(30) + "Bs.S";
}