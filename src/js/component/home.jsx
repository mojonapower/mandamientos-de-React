import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
function Home () {
	const estilo ={
		"backgroundColor": "black",
		"color": "white"
	}
	return (
		<div className="text-center" style={estilo}>
			<Saludar/>
			<p>
				<img src={rigoImage} />
			</p>
			
			<Mandamiento/>
			
		</div>
	);
};

function Saludar(){
	return <>
	<h1>Los mandamientos de React :D! </h1>
	<h2>debes obedecer</h2>
	</>
}
//etiqueta vacía se llama fragment 
function Mandamiento (){
	return(
		<ol>
				<li>Todos los componentes retornan html</li>
				<li>Todos los componentes retornan UNA etiqueta padre</li>
				<li>Todos los componentes se definen CON PASCAL CASE (inician con letra mayuscula)</li>
				<li>Todos los componentes creados en otro archivo deben ser exportados para ser utilizados donde uno desee</li>
				<li>Todas las clases asociadas a una etiqueta se les llama className</li>
				<li>Para insertar valores JS (variables, arreglos, objetos, etc...) dentro de un componente, debemos dejarlo dentro de "{}"</li>
				<li> toda etiqueta que se abre, se debe cerrar</li>
				
			</ol>
	)
}
export default Home;
