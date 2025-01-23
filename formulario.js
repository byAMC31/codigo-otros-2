var formulario = document.querySelector(".formulario"); // Selección correcta del formulario

formulario.onsubmit = function (e) {
  e.preventDefault(); // Se corrigió 

  var n = formulario.elements.name; //Referencia correcta al campo de nombre
  var eInput = formulario.elements.age; //Cambié el nombre de la variable para evitar conflicto con "e" del evento
  var na = formulario.elements.nationality; //Referencia correcta al campo de nationality

  var nombre = n.value.trim(); 
  var edad = parseInt(eInput.value.trim()); 
  var i = na.selectedIndex; 
  var nacionalidad = na.options[i].value; 

  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    n.classList.add("error"); 
  }

  if (edad < 18 || edad > 120) {
    eInput.classList.add("error"); 
  } 

  if (nombre.length > 0 && edad >= 18 && edad <= 120) {
    agregarInvitado(nombre, edad, nacionalidad); // Agregar el invitado si los datos son válidos
  }
};

var botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
var corteLinea = document.createElement("br");
document.body.appendChild(corteLinea);
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  } else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  } else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  } else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

  var lista = document.getElementById("lista-de-invitados");

  // Si la lista no existe, se crea dinámicamente
  if (!lista) {
    lista = document.createElement("div");
    lista.id = "lista-de-invitados";
    document.body.appendChild(lista);
  }

  var elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista");
  lista.appendChild(elementoLista);

  function crearElemento(descripcion, valor) {
    var spanDescripcion = document.createElement("span");
    var spanValor = document.createElement("span");
    var espacio = document.createElement("br");

    spanDescripcion.textContent = descripcion + ": ";
    spanValor.textContent = valor;

    elementoLista.appendChild(spanDescripcion);
    elementoLista.appendChild(spanValor);
    elementoLista.appendChild(espacio);
  }

  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);

  var botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.id = "boton-borrar";
  var corteLinea = document.createElement("br");
  elementoLista.appendChild(corteLinea);
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function () {
    botonBorrar.parentNode.remove(); 
  };

}
