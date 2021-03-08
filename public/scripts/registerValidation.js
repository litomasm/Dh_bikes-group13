const form = document.querySelector('#formregister');
const name = document.querySelector('#nombre');
const lastname = document.querySelector('#apellido');
const email = document.querySelector('#email');
const password = document.querySelector('#password3');
const image = document.querySelector('#avatar');
let ulErrores = document.querySelector("div.errores ul");


form.addEventListener('submit', (e) => {
    
    console.log('entre al form');
    ulErrores.innerHTML = ""
    let errores = []; 
    
    //Validaciones Nombre
    if (name.value == "") {
      errores.push("El nombre es obligatorio");
    } else if (name.value.length < 3) {
      errores.push("El nombre debe tener más de 3 caracteres");
    }
    
    //Validaciones Apellido
    if (lastname.value == "") {
      errores.push("El apellido es obligatorio");
    } else if (lastname.value.length < 3) {
      errores.push("El apellido debe tener al menos 3 caracteres");
    } 
    
    //Validaciones Email
    if (email.value == "") {
      errores.push("El email es obligatorio");
    }  
    
    //Validaciones Password
    if (password.value == "") {
      errores.push("La contraseña es obligatoria");
    } else if (password.value.length < 8) {
      errores.push("La contraseña debe tener más de 8 caracteres");
    }

       
   //Imagen
  /* const imageExt = image.split('.')[1];
   const validExt = ['jpg', 'jpeg', 'png', 'gif'];
   if (imageExt == undefined) {
       errores.push('Debe cargar una imagen con uno de los siguientes formatos: JPG, JPEG, PNG, GIF.') ;
   } else {
       if (!(validExt.includes(imageExt.toLowerCase()))) {
           errores.push('Formato de imagen inválido. [Permitidos: JPG, JPEG, PNG, GIF]')
       }
   }*/

   if (image.value == "") {
    errores.push('Debe cargar una foto de perfil');
   }
 
    if (errores.length > 0) {
      e.preventDefault();
    }
        
    for (let i = 0; i < errores.length; i++) {

      
      ulErrores.style.margin = '0px 20px 0px';
      ulErrores.style.fontSize = '15px';
      ulErrores.style.listStyleType = 'none'
      ulErrores.style.color = 'red'
      ulErrores.innerHTML += "<li style='left:0;'>" + errores[i] + "</li>";
      
      name.style.borderColor = '#ccc';
      if(name.value == "" || name.value.length < 3){
        name.style.borderColor = 'red';
      }
      lastname.style.borderColor = '#ccc';
      if(lastname.value == "" || lastname.value.length < 3){
        lastname.style.borderColor = 'red';
      }
      email.style.borderColor = '#ccc';
      if(email.value == ""){
        email.style.borderColor = 'red';
      }
      password.style.borderColor = '#ccc';
      if(password.value.length < 8 || password.value == ""){
      password.style.borderColor = 'red';
      }
      
    }
    
});



