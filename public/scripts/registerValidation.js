window.addEventListener("load", function () {
    console.log(window, "window");

const form = document.querySelector('#formregister');
const name = document.querySelector('#nombre');
const lastname = document.querySelector('#apellido');
const email = document.querySelector('#mail');
const password = document.querySelector('#password3');
const image = document.querySelector('#avatar');
let ulErrores = document.querySelector("div.errores ul");

form.addEventListener("submit", function (e) {
    ulErrores.innerHTML = ""
    let errores = []; 
    
    //Validaciones Nombre
    if (name.value == "") {
      errores.push("El nombre es obligatorio");
    }
    if (name.value.length < 2) {
      errores.push("El nombre debe tener más de 2 caracteres");
    }
    
    //Validaciones Apellido
    if (lastname.value == "") {
      errores.push("El apellido es obligatorio");
    }
    if (lastname.value.length < 2) {
      errores.push("El apellido debe tener al menos 2 caracteres");
    } 
    
  
    //Validaciones Password
    if (password.value == "") {
      errores.push("La contraseña es obligatoria");
    }
    if (password.value.length < 8) {
      errores.push("La contraseña debe tener más de 8 caracteres");
    }

    //Validaciones Email
        if (email.value == "") {
            errores.push("El email es obligatorio");
          }
  
    
  
    if (errores.length > 0) {
      e.preventDefault();
    }
        
    for (let i = 0; i < errores.length; i++) {
      ulErrores.innerHTML += "<li>" + errores[i] + "</li>";
    }
  });
});