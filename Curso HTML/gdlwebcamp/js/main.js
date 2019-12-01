(function() {
  "use strict";
  var regalo = document.getElementById("regalo");
  document.addEventListener("DOMContentLoaded", function() {
    // Map
    var map = L.map("mapa").setView([-31.638864, -60.693106], 16);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([-31.638864, -60.693106])
      .addTo(map)
      .bindPopup("GdlWebcamp,<br> en el centro cultural")
      .openPopup();
    /*
      .bindTooltip('Datito');
      .openTootlTip(); <-Un nuevo datito */
    //campos datos usuarios
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var email = document.getElementById("email");
    //campos pases
    var pase_dia = document.getElementById("pase_dia");
    var pase_completo = document.getElementById("pase_completo");
    var pase_dosdias = document.getElementById("pase_dosdias");
    // botones y divs
    var calcular = document.getElementById("calcular");
    var errorDiv = document.getElementById("error");
    var botonRegistro = document.getElementById("btnRegistro");
    var lista_productos = document.getElementById("lista-productos");
    var suma = document.getElementById("suma-total");
    // Extras
    var camisas = document.getElementById("camisa_evento");
    var etiquetas = document.getElementById("etiquetas");
    calcular.addEventListener("click", calcularMontos);

    pase_dia.addEventListener("blur", mostrarDias);
    pase_completo.addEventListener("blur", mostrarDias);
    pase_dosdias.addEventListener("blur", mostrarDias);
    // Validando datos
    nombre.addEventListener("blur", validarCampos);
    apellido.addEventListener("blur", validarCampos);
    email.addEventListener("blur", validarCampos);
    email.addEventListener("blur", validarEmail);
    function validarCampos() {
      if (this.value == "") {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = "Este campo es obligatorio";
        this.style.border = "1px solid red";
        errorDiv.style.border = "1px solid red";
      } else {
        errorDiv.style.display = "none";
        this.style.border = "1px solid green";
      }
    }
    //indexOf si no encuentra el caracter buscado asigna value(-1)
    function validarEmail() {
      if (this.value.indexOf("@") > -1) {
        errorDiv.style.display = "none";
        this.style.border = "1px solid green";
      } else {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = "Debe ser un e-mail valido";
        this.style.border = "1px solid red";
        errorDiv.style.border = "1px solid red";
      }
    }
    // Calculando monto a pagar
    function calcularMontos(event) {
      event.preventDefault();
      if (regalo.value === "") {
        alert("Debes elegir un regalo");
        regalo.focus();
      } else {
        var boletosDia = parseInt(pase_dia.value, 10) || 0,
          boletos2Dias = parseInt(pase_dosdias.value, 10) || 0,
          boletosCompletos = parseInt(pase_completo.value, 10) || 0,
          cantCamisas = parseInt(camisas.value, 10) || 0,
          cantEtiquetas = parseInt(etiquetas.value, 10) || 0;

        var totalPagar =
          boletosDia * 30 +
          boletos2Dias * 45 +
          boletosCompletos * 50 +
          cantCamisas * 10 * 0.93 +
          cantEtiquetas * 2;
        console.log(totalPagar);

        var listadoProductos = [];
        if (boletosDia >= 1) {
          listadoProductos.push(boletosDia + " Pases por día");
        }
        if (boletos2Dias >= 1) {
          listadoProductos.push(boletos2Dias + " Pases por dos días");
        }
        if (boletosCompletos >= 1) {
          listadoProductos.push(boletosCompletos + " Pases completos");
        }
        if (cantCamisas >= 1) {
          listadoProductos.push(cantCamisas + " Camisas");
        }
        if (cantEtiquetas >= 1) {
          listadoProductos.push(cantEtiquetas + " Etiquetas");
        }
        lista_productos.style.display = "block";
        lista_productos.innerHTML = "";
        for (var i = 0; i < listadoProductos.length; i++) {
          lista_productos.innerHTML += listadoProductos[i] + "</br>";
        }
        suma.innerHTML = "$" + totalPagar.toFixed(2);
      }
    }
    // Mostrando los eventos segun el pase elegido
    function mostrarDias(event) {
      var boletosDia = parseInt(pase_dia.value, 10) || 0,
        boletos2Dias = parseInt(pase_dosdias.value, 10) || 0,
        boletosCompletos = parseInt(pase_completo.value, 10) || 0;

      var diasElegidos = [];

      if (boletosDia > 0) {
        diasElegidos.push("viernes");
        console.log(diasElegidos);
      }
      if (boletos2Dias > 0) {
        diasElegidos.push("viernes", "sabado");
        console.log(diasElegidos);
      }
      if (boletosCompletos > 0) {
        diasElegidos.push("viernes", "sabado", "domingo");
        console.log(diasElegidos);
      }
      for (var i = 0; i < diasElegidos.length; i++) {
        document.getElementById(diasElegidos[i]).style.display = "block";
      }
    }
  }); // DOM CONTENT LOADED
})();

$(function(){
 $('.menu-programa a').ON('click',function(){
   var enlace=
 })
});
