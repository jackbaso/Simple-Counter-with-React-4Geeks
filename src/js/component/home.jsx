import React from "react";
import Counter from "./counter.jsx";
import Counterf from "./counterf.jsx";
import Practica from "./practica.jsx";
import ReactDOM from "react-dom";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	var second = 0;
	setInterval(() => {
		second++;
		ReactDOM.render(
			<Counterf seconds={second} />,
			document.querySelector("#counter")
		);
	}, 1000);

	return (
		<div>
			<h1 className="text-center mt-5">
				Contador React - Componente funcional
			</h1>
			<div className="text-center" id="counter"></div>
			<h1 className="text-center mt-5">
				Contador React - Componente con estado
			</h1>
			{/* Componente con estado propio */}
			<div className="text-center">
				<Practica />
			</div>
			<Counter />
		</div>
	);
};

export default Home;
