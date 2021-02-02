window.addEventListener("load", function () {
    console.log(window, "window");

const form = document.querySelector('form');

const name = document.querySelector('#name');
const price = document.querySelector('#price');
const image = document.querySelector('#image');
const description = document.querySelector('#description');
const info = document.querySelector('#info');

form.addEventListener("submit", function (e) {
    console.log(form, "registro capturado");
    let errores = []; 
    
    //Validaciones Nombre
    if (name.value == "") {
      errores.push("El nombre es obligatorio");
    }
    if (name.value < 3) {
      errores.push("El nombre debe tener más de 3 caracteres");
    }
    
    //Validaciones Precio
    if (price.value == "") {
      errores.push("El precio es obligatorio");
    }
    if (price.value < 2) {
      errores.push("El precio debe tener al menos 2 caracteres");
    } 
    
  
    if (description.value < 3) {
        errores.push("La descripción debe tener más de 10 caracteres");
      }
  
    
  
    if (errores.length > 0) {
      e.preventDefault();
    }
    console.log(errores, "contador de errores");
    let ulErrores = document.querySelector("div.errores ul");
    for (let i = 0; i < errores.length; i++) {
      ulErrores.innerHTML += "<li>" + errores[i] + "</li>";
    }
  });
});