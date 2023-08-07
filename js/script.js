var select = document.getElementById("fundos");
var input = document.getElementById("batidas");


select.addEventListener("change", function () {
    var valor = select.options[select.selectedIndex].value;

    input.value = valor;
})

