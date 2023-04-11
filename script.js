function add(){
	var no1 = Number(document.getElementById("n1").value);
	var no2 = Number(document.getElementById("n2").value);


	let X1 = no1 + no2;
	let X2 = Number(X1.toFixed(2));

	document.getElementById("dum_result").style.display = "none";
	document.getElementById("result").style.display = "block";
	document.getElementById("presult").style.display = "block";
	document.getElementById("presult").innerHTML = X2;
}

function sub(){ 
	var no1 = Number(document.getElementById("n1").value);
	var no2 = Number(document.getElementById("n2").value);

	let X1 = no1 - no2;
	let X2 = Number(X1.toFixed(2));

	document.getElementById("dum_result").style.display = "none";
	document.getElementById("result").style.display = "block";
	document.getElementById("presult").style.display = "block";
	document.getElementById("presult").innerHTML = X2;
}

function mult(){ 
	var no1 = Number(document.getElementById("n1").value);
	var no2 = Number(document.getElementById("n2").value);

	let X1 = no1 * no2;
	let X2 = Number(X1.toFixed(2));


	document.getElementById("dum_result").style.display = "none";
	document.getElementById("result").style.display = "block";
	document.getElementById("presult").style.display = "block";
	document.getElementById("presult").innerHTML = X2;
}

function div(){ 
	var no1 = Number(document.getElementById("n1").value);
	var no2 = Number(document.getElementById("n2").value);

	let X1 = no1/no2;
	let X2 = Number(X1.toFixed(2));

	document.getElementById("dum_result").style.display = "none";
	document.getElementById("result").style.display = "block";
	document.getElementById("presult").style.display = "block";
	document.getElementById("presult").innerHTML = X2;
}

function mod(){
	var no1 = Number(document.getElementById("n1").value);
	var no2 = Number(document.getElementById("n2").value);

	let X1 = no1 % no2;
	let X2 = Number(X1.toFixed(2));

	document.getElementById("dum_result").style.display = "none";
	document.getElementById("result").style.display = "block";
	document.getElementById("presult").style.display = "block";
	document.getElementById("presult").innerHTML = X2;
}