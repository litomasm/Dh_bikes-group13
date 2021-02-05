const form = document.querySelector('#formReg');

const name = document.querySelector('#name');
const price = document.querySelector('#price');
const category = document.querySelector('select#category');
const image = document.querySelector('#imageProduct');
const description = document.querySelector('#description');
const info = document.querySelector('#info');
const button = document.querySelector('#botonCrear');
const errors = document.querySelector('ul.errors');

button.addEventListener("click", function (e) {
    console.log(form, "registro capturado");
    errors.innerHTML = '';
    let errores = []; 
    
    //Validaciones Nombre
    if (name.value == "") {
      errores.push("El nombre es obligatorio");
    } else if (name.value.trim().length <= 3) {
      errores.push("El nombre debe tener más de 3 caracteres");
    }
    
    //Validaciones Precio
    if (price.value == "") {
      errores.push("El precio es obligatorio");
    }else if (price.value.length < 3) {
      errores.push("Este campo debe tener al menos 3 digitos");
    } 
    
    //Categoria 
    if(category.value == 0){
      errores.push("Tiene que seleccionar una categoria");
    }
    
     //Imagen
   /* const imageExt = image.split('.')[1];
    const validExt = ['jpg', 'jpeg', 'png', 'gif'];
        if (imageExt == undefined) {
            errores.push('Debe cargar una imagen con uno de los siguientes formatos: JPG, JPEG, PNG, GIF.') ;
        }  else { 
            if (!(validExt.includes(imageExt.toLowerCase()))) {
                errores.push('Formato de imagen invalido. [Permitidos: JPG, JPEG, PNG, GIF]')
            }*/

            if (image.value == "") {
              errores.push('Debe cargar la imagen del producto.');
          }
        

    //Validaciones de Descripción
  
    if (description.value.trim().length <= 10) {
      errores.push("La descripción debe tener más de 10 caracteres");
    }

    //Validaciones de Informacion
    if (info.value.trim().length <= 10) {
      errores.push("La informacion debe tener más de 10 caracteres");
    }

    if (errores.length > 0) {
      e.preventDefault();
     
    }
      
    for (let i = 0; i < errores.length; i++) {
      errors.style.color = 'red';
      errors.style.listStyleType = 'none';
      errors.style.margin = '0px';  
      errors.style.padding = '0px';   
      errors.innerHTML += "<li style='position:static;margin-bottom:5px'>" + errores[i] + "</li>";
    }

   
    if(!(errores.length)){
        form.submit()
    }

  });