function calcular(){

    var salario_normal = document.getElementById("salario").value;
    var mensualmente = document.getElementById("mensualmente").value = parseFloat(salario_normal) + "Bs.S";
    var diariamente = document.getElementById("diariamente").value = parseFloat(salario_normal) / parseFloat(30) + "Bs.S";
    var bono_vacacional = document.getElementById("bono_vacacional").value = parseFloat(diariamente) * parseFloat(15) / parseFloat(360) + "Bs.S";
}