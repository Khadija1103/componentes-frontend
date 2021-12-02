//EVENTOS REGISTRAR MASCOTA


//NOMBRE


const nombre=document.querySelector('#frmprofesor')

const nombre=document.querySelector('#camponombre.feedback')
const nombre=/^[A-záéíóúáéíóúÁÉÍÓÚñÑ\s]{5,25}$/

formprofesor.nombre.addEventListener('input', e =>{
e.preventDefault()

if(nombre.test(e.target.value)){
formprofesor.nombre.setAttribute("class","success")
nombre.textContent=""
nombre.style.setProperty("visibility","hidden")
nombre.style.setProperty("opacity","0")

}

else{
formprofesor.nombreprof.setAttribute("class","error")
nombre.textContent="Entre 5 y 25 caracteres, no números ni caracteres especiales"
nombre.style.setProperty("visibility","visible")
nombre.style.setProperty("opacity","1")
}
})

//CAMPO id clienete:

const idcliente=document.querySelector('#campoid_cliente.feedback')
const idcliente=/^[A-záéíóúáéíóúÁÉÍÓÚñÑ\0-9]{5,25}$/

formprofesor.idcliente.addEventListener('input', e =>{
e.preventDefault()

if(curso.test(e.target.value)){
formprofesor.idcliente.setAttribute("class","success")
idcliente.textContent=""
idcliente.style.setProperty("visibility","hidden")
idcliente.style.setProperty("opacity","0")
}

else{
formprofesor.idcliente.setAttribute("class","error")
idcliente.textContent="Máximo 25 caracteres"
idcliente.style.setProperty("visibility","visible")
idcliente.style.setProperty("opacity","1")
}
})


// especie

const especie=document.querySelector('#campoespecie .feedback')
const  especie=/^[A-záéíóúáéíóúÁÉÍÓÚñÑ\0-9]{5,25}$/

formprofesor. especie.addEventListener('input', e =>{
e.preventDefault()

if( especie.test(e.target.value)){
formprofesor. especie.setAttribute("class","success")
especie.textContent="Máximo 25 caracteres"
especie.style.setProperty("visibility","hidden")
especie.style.setProperty("opacity","0")
}

else{
formprofesor. especie.setAttribute("class","error")
especie.textContent="Máximo 25 caracteres"
especie.style.setProperty("visibility","visible")
especie.style.setProperty("opacity","1")
}
})




//CAMPO edad:


const edad=document.querySelector('#campoedad .feedback')

const edad=/^[0-9]{0,100}$/

formprofesor.edad.addEventListener('input', e =>{
e.preventDefault()

if(edad.test(e.target.value)){
formprofesor.edad.setAttribute("class","success")
edad.textContent=""
edad.style.setProperty("visibility","hidden")
edad1.style.setProperty("opacity","0")

}
else{
formprofesor.edad.setAttribute("class","error")
edad.textContent="El valor no es numérico y/o no tiene entre 0 y 100 caracteres"
edad.style.setProperty("visibility","visible")
edad.style.setProperty("opacity","1")
}

})

//CAMPO  RAZA

const Raza=document.querySelector('#camporaza .feedback')
const  Raza=/^[A-záéíóúáéíóúÁÉÍÓÚñÑ\0-9]{5,25}$/

formprofesor. Raza.addEventListener('input', e =>{
e.preventDefault()

if( Raza.test(e.target.value)){
formprofesor. Raza.setAttribute("class","success")
Raza.textContent="Máximo 25 caracteres"
Raza.style.setProperty("visibility","hidden")
Raza.style.setProperty("opacity","0")
}

else{
formprofesor. Raza.setAttribute("class","error")
Raza.textContent="Máximo 25 caracteres"
Raza.style.setProperty("visibility","visible")
Raza.style.setProperty("opacity","1")
}
})


//SOLICITUD

frmprofesor.addEventListener("submit", e=>{
e.preventDefault()
let nombre=document.getElementById("nombreC").value
let idcliente=document.getElementById("idcliente").value
let edad=document.getElementById("Edad").value
let especie=document.getElementById("Especie").value
let Raza=document.getElementById("Raza").value
let fecha=document.getElementById("fecha").value



 if(nombre==0){
	alert("El nombre debe ser diligenciado")
	document.frmprofesor.nombreprof.focus()
}

else if(idcliente==0){
	alert("El id cliente debe ser diligenciado")
	document.frmprofesor.perfilprof.focus()
}

else if(edad==0){
	alert("la edad debe ser diligenciada")
	document.frmprofesor.curso.focus()
}

else if(especie==0){
	alert("la especie debe ser diligenciada")
	document.frmprofesor.descripcurso.focus()
}

else if(Raza==0){
	alert("la raza debe ser diligenciada")
	document.frmprofesor.duracioncurso.focus()
}

else if(fecha==0){
	alert("El fecha debe ser diligenciado")
	document.frmprofesor.telefonoprof.focus()
}

else{
	frmprofesor.submit()
	Registrarmascota()
}
})


function  Registrarmascota(){



	let nombre=document.querySelector("#txtnombreC").value;
	let idclienete=document.querySelector("#txtidcliente").value;
	let edad=document.querySelector("#txtedad").value;
	let Especie=document.querySelector("#txtespecie").value;
	let Raza=document.querySelector("#txtraza").value;
	let fecha=document.querySelector("#txtfecha").value;
	


	let url = `http://localhost:3001/cliente`;
	let datos = {
		nombre:nombreC,
		idcliente:idclienete,
		edada:Edad,
		Especie:Especie,
		Raza:raza,
		fecha:fecha
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






