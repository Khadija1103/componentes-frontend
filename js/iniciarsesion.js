//INICIO SESION



//CAMPO USUARIO

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



	let usuario1= "khadija"
	let password1= "clave"



if(usuario2===usuario1 && password2===password1){
		form7.submit()
		alert("Bienvenido")
		window.location.href="inter_cliente.html";
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