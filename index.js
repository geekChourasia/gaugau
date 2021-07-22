
let apply = document.getElementById("apply").addEventListener("click", circle);


//user input 40
//multiply by 2= 40*2 =80
//acc to box 400/80=5
//ball size= 5*5=25 fit 





function circle() {
	let squareSide = document.getElementById("squareSide").value;
	let box = document.getElementById("box");
	box.style.height = squareSide + "px";
	box.style.width = squareSide + "px";
	box.innerHTML = "";
	let circle_radius = document.getElementById("circleRadius").value;
	let dbl = circle_radius * 2;


	let ballSize = parseInt(squareSide/dbl);
	let square = ballSize * ballSize;


	for (let i = 0; i < square; i++) {
		let csscircle = document.createElement("div");
		csscircle.classList.add("circle");
		csscircle.style.width = dbl + "px";
		csscircle.style.height = dbl + "px";
		box.appendChild(csscircle);
	}

	document.getElementById("para").innerText = square;

	for (let i = 0; i < squareSide; i=i+dbl) {
		for (let j = 0; j < squareSide; j = j + dbl) {
			let cor = document.getElementById("cor");
			let corPara = document.createElement("p");
			corPara.innerText = `(${i},${j})`

			cor.appendChild(corPara);

		}
	}
}




