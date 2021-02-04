window.addEventListener("load", function () {
    

const form = document.querySelector("#formlogin");
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const ulErrores = document.querySelector("div.errores ul");


form.addEventListener("submit", function (e) {
    ulErrores.innerHTML = ""
    let errores = []; 
    
    //Validaciones Password
    if (password.value == "") {
      errores.push("La contraseña es obligatoria");
    }
    if (password.value.length < 8) {
      console.log(password.value);
      errores.push("La contraseña debe tener más de 8 caracteres");
    }

    //Validaciones Email
        if (email.value == "") {
          console.log(password.value);
            errores.push("El email es obligatorio");
          }
  
    if (errores.length > 0) {
      e.preventDefault();
    }
    
    for (let i = 0; i < errores.length; i++) {
        ulErrores.innerHTML += "<li>" + errores[i] + "</li>";  
    }
  });
})
