window.onload = function(){

//SETTING NAMES
//Funcion para asignar el nombre a los enlaces del Aside
function setNames(){

	var nombres = [];

fetch('https://swapi.co/api/people/')
   .then(data => data.json())
   .then(data =>{
   	var result = data.results

  	result.forEach(function (item,index){
  		nombres.push(item.name)
  	});


  	var container =  document.getElementById("aside");
	var enlacesNombres = container.getElementsByTagName("a");

	//console.log(enlacesNombres[0]).innerHTML	
	

  	nombres.forEach(function(item,index){
		enlacesNombres[index].innerHTML = item;
  	});
 
   }); 

}

setNames();


/***********************************************/


function getinfo(dato){

var nombres = [];
var personaje =[];
var personajeLimpio = [];

fetch('https://swapi.co/api/people/')
   .then(data => data.json())
   .then(data =>{
   	var result = data.results

   	result.forEach(function(item,index){
   		if(dato == item.name){
   			personaje = item; //Datos del personaje psado por el evento
   			console.log(personaje)
   		}   		
   	})


//HACIENDO PETICION PARA TENER LOS DATOS DEL HOMEWORLD
var url_w = (JSON.stringify(personaje.homeworld)).substr(1,31)
fetch(url_w)
   .then(data => data.json())
   .then(data =>{
   	var resultworld = data //var con datos del planeta
   		console.log(resultworld)		
   	})

//HACIENDO PETICION PARA TENER LOS DATOS DEL species
var url_s = (JSON.stringify(personaje.species)).substr(2,31)
fetch(url_s)
   .then(data => data.json())
   .then(data =>{
   	var resultspecies = data //var con datos de la especie
   		console.log(resultspecies)		
   	})


//HACIENDO PETICION PARA TENER LOS DATOS DEL vehicles
var tamaño = personaje.vehicles
if(tamaño.length > 0){
	var url_v = (JSON.stringify(personaje.vehicles[0])).substr(1,32)
	fetch(url_v)
   .then(data => data.json())
   .then(data =>{
   	var resultvehicle = data //var con datos de vehicle
   		console.log(resultvehicle)		
   	})

}else{
	console.log("no hay naves")
}


//HACIENDO PETICION PARA TENER LOS DATOS DEL starships
var tamaño2 = personaje.starships
if(tamaño2.length > 0){
var url_st = (JSON.stringify(personaje.starships[0])).substr(1,33)
fetch(url_st)
   .then(data => data.json())
   .then(data =>{
   	var resultstarship = data //var con datos de starships
   		console.log(resultstarship)		
   	})
}else{
	console.log("No hay Starships")
}



var h1 = document.getElementsByTagName("h1")[0].innerHTML = personaje.name


var datosPersonaje = document.getElementById("parrafos_per");
var parrafos = datosPersonaje.getElementsByTagName("p");



parrafos[0].innerHTML = personaje.name;
parrafos[1].innerHTML = personaje.height;
parrafos[2].innerHTML = personaje.mass;
parrafos[3].innerHTML = personaje.hair_color;
parrafos[4].innerHTML = personaje.skin_color;
parrafos[5].innerHTML = personaje.eye_color;
parrafos[6].innerHTML = personaje.birth_year;
parrafos[7].innerHTML = personaje.gender; 		


 })
}



getinfo("Obi-Wan Kenobi")


















function getWorld(dato){

var nombres = [];
var mundo =[];
var personajeLimpio = [];

fetch(homeworld)
   .then(data => data.json())
   .then(data =>{
   	var result = data.results

   	result.forEach(function(item,index){
   		if(dato == item.name){
   			mundo = item;
   			console.log(mundo)
   		}
   		
   	})

var h1 = document.getElementsByTagName("h1")[0].innerHTML = personaje.name


var datosPersonaje = document.getElementById("parrafos_per");
var parrafos = datosPersonaje.getElementsByTagName("p");



parrafos[0].innerHTML = mundo.name;
parrafos[1].innerHTML = mundo.height;
parrafos[2].innerHTML = mundo.mass;
parrafos[3].innerHTML = mundo.hair_color;
parrafos[4].innerHTML = mundo.skin_color;
parrafos[5].innerHTML = mundo.eye_color;
parrafos[6].innerHTML = mundo.birth_year;
parrafos[7].innerHTML = mundo.gender; 		


 })
}

//getworld("R2-D2");






}

