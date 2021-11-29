
//EVENTOS REGISTRARSE



//REGISTRARSE
document.getElementById("registro1").addEventListener("click",function(){
	document.getElementsByClassName("fondo_transparente")[0].style.display="block"
	return false

})

	document.getElementsByClassName("modal_cerrar")[0].addEventListener("click",function(){
		document.getElementsByClassName("fondo_transparente")[0].style.display="none"
	})


//NOMBRE


//EJERCICIO NOMBRE

const form=document.querySelector('#frmvalidacion')
const fe3=document.querySelector('#camponombre .feedback')

const nombre=/^[A-záéíóúáéíóúÁÉÍÓÚñÑ\s]{5,25}$/

form.nombre.addEventListener('input', e =>{
e.preventDefault()

if(nombre.test(e.target.value)){
form.nombre.setAttribute("class","success")
fe3.textContent=""
fe3.style.setProperty("visibility","hidden")
fe3.style.setProperty("opacity","0")

}

else{
form.nombre.setAttribute("class","error")
fe3.textContent="Entre 5 y 25 caracteres, no números ni caracteres especiales"
fe3.style.setProperty("visibility","visible")
fe3.style.setProperty("opacity","1")

}


})

//CAMPO USUARIO

const form1=document.querySelector('#frmvalidacion')
const fe4=document.querySelector('#campousuario .feedback')

const usuario=/^[A-z0-9]{5,20}$/

form.usuario.addEventListener('input', e =>{
e.preventDefault()

if(usuario.test(e.target.value)){
form1.usuario.setAttribute("class","success")
fe4.textContent=""
fe4.style.setProperty("visibility","hidden")
fe4.style.setProperty("opacity","0")

}

else{
form1.usuario.setAttribute("class","error")
fe4.textContent="Minimo 5 caracteres puede contener numeros (no caracteres especiales ni espacios)"
fe4.style.setProperty("visibility","visible")
fe4.style.setProperty("opacity","1")

}


})


//CAMPO TELEFONO:

const form2=document.querySelector('#frmvalidacion')
const fe1=document.querySelector('#campoTelefono .feedback')

const numero=/^[0-9]{5,15}$/

form.telefono.addEventListener('input', e =>{
e.preventDefault()

if(numero.test(e.target.value)){
form2.telefono.setAttribute("class","success")
fe1.textContent=""
fe1.style.setProperty("visibility","hidden")
fe1.style.setProperty("opacity","0")

}
else{
form2.telefono.setAttribute("class","error")
fe1.textContent="El valor no es numérico y/o no tiene entre 5 y 15 caracteres"
fe1.style.setProperty("visibility","visible")
fe1.style.setProperty("opacity","1")
}

})


//CAMPO  CORREO ELECTRONICO

//QUERY SELECTOR DA ACCESO EN ESE CASO A TODOS LOS INPUT DEL FORM
const form3=document.querySelector('#frmvalidacion')
const fe2=document.querySelector('#campocorreo .feedback')


const correo=/^[A-Za-z0-9_.-]+@\w+\.[a-zA-z]+\.?[a-zA-z]+/

form.correo.addEventListener('input', e =>{
e.preventDefault()

if(correo.test(e.target.value)){
form3.correo.setAttribute("class","success")
fe2.textContent=""
fe2.style.setProperty("visibility","hidden")
fe2.style.setProperty("opacity","0")

}
else{
form3.correo.setAttribute("class","error")
fe2.textContent="Valor no valido para correo electrónico"
fe2.style.setProperty("visibility","visible")
fe2.style.setProperty("opacity","1")
}

})


//CAMPO CONTRASEÑA

const form4=document.querySelector('#frmcontrasena')
const fe5=document.querySelector('#campopassword .feedback')

const contrasena=/^[A-z0-9*./]{5,20}$/

form.contrasena.addEventListener('input', e =>{
e.preventDefault()

if(contrasena.test(e.target.value)){
form4.contrasena.setAttribute("class","success")
fe5.textContent=""
fe5.style.setProperty("visibility","hidden")
fe5.style.setProperty("opacity","0")

}

else{
form4.contrasena.setAttribute("class","error")
fe5.textContent="Entre 5 y 20 caracteres puede contener numeros y caracteres especiales *_./"
fe5.style.setProperty("visibility","visible")
fe5.style.setProperty("opacity","1")

}

})

//REGISTRARSE

form.addEventListener("submit", e=>{
e.preventDefault()
let nombre=document.getElementById("nombre").value
let usuario=document.getElementById("usuario3").value
let telefono=document.getElementById("telefono").value
let correo=document.getElementById("email").value
let password=document.getElementById("password1").value
let radio=document.getElementById('radio').checked == true
let radio1=document.getElementById('radio1').checked == true
let radio2=document.getElementById('radio2').checked == true



 if(nombre==0){
	alert("El nombre debe ser diligenciado")
	document.formulario.nombre.focus()
}

 else if(usuario==0){
	alert("Por favor confirme su usuario")
	document.formulario.usuario.focus()
}

 else if(telefono==0){
	alert("El teléfono debe ser diligenciado")
	document.formulario.telefono.focus()
}

else if (correo==0){
	alert("El correo electronico debe ser diligenciado")
	document.formulario.email.focus()
}

else if(password==0){
	alert("Por favor diligencie la contraseña")
	document.formulario.password1.focus()
}


else if(!form.querySelector("input[name='button']:checked")){
	alert("Seleccione si es alumno o profesor")
	document.formulario.button.focus()
}


else if(radio==radio1) { 
        	location.replace("formularioprofesor.html")
   }
 else if(radio==radio2) { 
        	location.replace("inscribir.html")
        }

else {
	form.submit()
	alert("Bienvenido")
}
})






//INICIO SESION



const form6=document.querySelector('#frmvalidacion1')
const fe6=document.querySelector('#campousuario2 .feedback')

const usuario3=/^[A-z0-9]{5,20}$/

form6.usuario2.addEventListener('input', e =>{
e.preventDefault()

if(usuario3.test(e.target.value)){
form6.usuario2.setAttribute("class","success")
fe6.textContent=""
fe6.style.setProperty("visibility","hidden")
fe6.style.setProperty("opacity","0")

}

else{
form6.usuario2.setAttribute("class","error")
fe6.textContent="Minimo 5 caracteres puede contener numeros (no caracteres especiales ni espacios)"
fe6.style.setProperty("visibility","visible")
fe6.style.setProperty("opacity","1")
}

})


//CAMPO CONTRASEÑA

const form7=document.querySelector('#frmvalidacion1')
const fe7=document.querySelector('#campopassword2 .feedback')

const contrasena2=/^[A-z0-9*./]{5,20}$/

form7.contrasena.addEventListener('input', e =>{
e.preventDefault()

if(contrasena2.test(e.target.value)){
form7.contrasena.setAttribute("class","success")
fe7.textContent=""
fe7.style.setProperty("visibility","hidden")
fe7.style.setProperty("opacity","0")

}

else{
form7.contrasena.setAttribute("class","error")
fe7.textContent="Entre 5 y 20 caracteres puede contener numeros y caracteres especiales *_./"
fe7.style.setProperty("visibility","visible")
fe7.style.setProperty("opacity","1")

}

})


form7.addEventListener("submit", e=>{
e.preventDefault()

let usuario2=document.getElementById("usuario2").value
let password2=document.getElementById("password2").value
let password3=document.getElementById("password2").value
let radio=document.getElementById('radio').checked == true
let radio1=document.getElementById('radio1').checked == true
let radio2=document.getElementById('radio2').checked == true

	


if(usuario2===usuario1 && password2===password1 && radio===radio1){
		form7.submit()
		alert("Bienvenido")
		window.location.href="areapersonalalumno.html";
}
else if(usuario2===usuario1 && password3===password4 && radio===radio2){
		form7.submit()
		alert("Bienvenido")
		window.location.href="areapersonalprofe.html";
}
else if(usuario2==0){
	alert("Por favor confirme su usuario")
	document.formulario.usuario2.focus()
}


else if(password2==0){
	alert("Por favor diligencie la contraseña")
	document.formulario.password1.focus()
}


else{
	form7.submit()
	alert("Ingrese los datos correctos")
}
})



