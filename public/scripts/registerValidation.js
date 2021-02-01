window.addEventListener("load", function () {
    console.log(window, "window");

const form = document.querySelector('form');

const name = document.querySelector('#nombre');
const lastname = document.querySelector('#apellido');
const email = document.querySelector('#mail');
const password = document.querySelector('#password3');
const image = document.querySelector('#avatar');

formRegister.addEventListener("submit", function (e) {
    console.log(formRegister, "registro capturado");
    let errores = []; 
    
    //Validaciones Nombre
    if (name.value == "") {
      errores.push("El nombre es obligatorio");
    }
    if (name.value < 3) {
      errores.push("El nombre debe tener más de 3 caracteres");
    }
    
    //Validaciones Apellido
    if (lastname.value == "") {
      errores.push("El apellido es obligatorio");
    }
    if (lastname.value < 2) {
      errores.push("El apellido debe tener al menos 2 caracteres");
    } 
    
  
    //Validaciones Password
    if (password.value == "") {
      errores.push("La contraseña es obligatoria");
    }
    if (password.value < 6) {
      errores.push("La contraseña debe tener más de 6 caracteres");
    }

    //Validaciones Email
        if (email.value == "") {
            errores.push("El email es obligatorio");
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