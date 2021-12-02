
//EVENTOS REGISTRARSE


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
fe1.textContent="El valor no es numérico y/o no tiene entre 7 y 15 caracteres"
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



//REGISTRARSE


form.addEventListener("submit", e=>{
e.preventDefault()
let nombre=document.getElementById("txtnombre").value
let usuario=document.getElementById("txtusuario3").value
let telefono=document.getElementById("txttelefono").value
let correo=document.getElementById("txtemail").value


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
else {
	form.submit()
	Registrarpersona()
   
} 
})



function  Registrarpersona(){

	
	let nombre=document.querySelector("#txtnombre").value;
	let usuario=document.querySelector("#txtusuario3").value;
	let telefono=document.querySelector("#txttelefono").value;
	let correo=document.querySelector("#txtemail").value;
	


	let url = `http://localhost:3001/cliente`;
	let datos = {
		nombre:nombre,
		usuario:usuario,
		telefono:telefono,
		correo:correo

	};
	fetch(url,{
		method: 'POST',
		body: JSON.stringify(datos),
		headers:{
			'Content-Type':'application/json'
		}
	}).then(mensaje => res.json())
	.then(mensaje => {
		console.log(mensaje)
	})
}


