function calcular(){

    var salario_normal = document.getElementById("salario").value;
    var mensualmente = document.getElementById("mensualmente").value = parseFloat(salario_normal) + "Bs.S";
    var diariamente = document.getElementById("diariamente").value = parseFloat(salario_normal) / parseFloat(30) + "Bs.S";
    var bono_vacacional = document.getElementById("bono_vacacional").value = parseFloat(diariamente) * parseFloat(15) / parseFloat(360) + "Bs.S";
    var alicuota_utilidades = document.getElementById("utilidades").value = parseFloat(diariamente) * parseFloat(30) / parseFloat(360) + "Bs.S";
    var salario_integral = document.getElementById("salario_integral").value = parseFloat(diariamente) + parseFloat(bono_vacacional) + parseFloat(alicuota_utilidades) + "Bs.S";
}