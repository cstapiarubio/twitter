 //reemplaza el boton onclick 
	window.onload=function(){
		document.getElementById("boton").addEventListener("click", agregar);
	}
	
function agregar(){
	//recuperamos el texto ingresado en textarea y limpio textarea
	var tareas=document.getElementById("tarea").value;
	document.getElementById("tarea").value="";

	//indicamos donde estaran las tareas recuperadas del textarea
	var cont=document.getElementById("contenedor");

    //crear nuevos nodos elementos
	var nuevasTareas=document.createElement("div");
	var textoNuevaTarea=document.createTextNode(tareas);
	var elementoContenedor=document.createElement("span");
	
    //asignamos padres a nodos creados
	elementoContenedor.appendChild(textoNuevaTarea);
	nuevasTareas.appendChild(elementoContenedor);
	cont.appendChild(nuevasTareas);
	
	//creamos checkbox e iconos, les damos atributo y clases
	var chck=document.createElement("input");
	chck.type="checkbox";
	chck.setAttribute("class", "check");
	var basura=document.createElement("span");
	basura.classList.add("fa", "fa-trash-o");
	var cora =document.createElement("span");
	cora.classList.add("fa", "fa-heart");

    //asignamos padres a nodos creados
	nuevasTareas.appendChild(chck);
	nuevasTareas.appendChild(basura);
	nuevasTareas.appendChild(cora);

    //agregar un evento al hacef click para que elimine o agregue la clase tachado al elementoContenedor
	chck.addEventListener("click", function(){
		elementoContenedor.classList.toggle("tachado");
	})

	//removemos el icono basurero al hacer click sobre el
	basura.addEventListener("click", function(){
		cont.removeChild(nuevasTareas);
	})
    
    //crear funcion click para el corazon y le asignamos la clase red de css
	cora.addEventListener("click", function(){
		cora.classList.toggle("red");
	})

    //para que textarea no este vacia al presionar boton aceptar
	if(tareas==null || tareas.length==0){
		alert("¡Error! Debe ingresar tarea");
		return false;
	}

}







