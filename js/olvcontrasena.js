
//FORMULARIO OLVIDO CONTRASEÑA

//SOLICITUD
const olvcontrasena1=document.querySelector('#frmcontrasena')
olvcontrasena1.addEventListener("submit", e=>{
e.preventDefault()
let contrasena=document.getElementById("olvcontrasena").value

	let emailusuario= "dianach@gmail.com"
	let telefonousuario= 3202555555

if (contrasena==emailusuario){

	alert("Gracias por escribirnos, por favor revise su email o teléfono donde hemos enviado un código para resetear la contraseña")
	document.olvcontrasena.olvcontrasena.focus()
}
else if (contrasena==telefonousuario){

	alert("Gracias por escribirnos, por favor revise su email o teléfono donde hemos enviado un código para resetear la contraseña")
	document.olvcontrasena.olvcontrasena.focus()
}
else{
	olvcontrasena1.submit()
	alert("Por favor ingrese los datos correctos para poder resetear la contraseña")
}
})


