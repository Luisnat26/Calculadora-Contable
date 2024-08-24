function calcular(){

    var salario_normal = document.getElementById("salario").value;
    var mensualmente = document.getElementById("mensualmente").value = parseFloat(salario_normal) + "Bs.S";
    var diariamente = document.getElementById("diariamente").value = parseFloat(salario_normal) / parseFloat(30) + "Bs.S";
    var bono_vacacional = document.getElementById("bono_vacacional").value = parseFloat(diariamente) * parseFloat(15) / parseFloat(360) + "Bs.S";
    var alicuota_utilidades = document.getElementById("utilidades").value = parseFloat(diariamente) * parseFloat(30) / parseFloat(360) + "Bs.S";
    var anios_empresa = document.getElementById("anios_empresa").value;
    var ultimo_salario_diario = document.getElementById("salario_integral").value = parseFloat(diariamente) + "Bs.S";
    var retroactivos = document.getElementById("salario_ps").value = parseFloat(ultimo_salario_diario) * parseFloat(30) + "Bs.S";
}