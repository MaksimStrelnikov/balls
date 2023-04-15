let age = 20;
function onLoad() {
	if (!document.cookie.split(";").some((item) => item.trim().startsWith("redBall="))) {
		const d = new Date();
        d.setTime(d.getTime() + (age * 1000));
		document.cookie = "redBall=0;"+"expires="+d.toUTCString();
		document.cookie = "greenBall=0;"+"expires="+d.toUTCString();
		document.cookie = "blueBall=0;"+"expires="+d.toUTCString();
	}
	see();
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

function redBallAdd() {
	const d = new Date();
    d.setTime(d.getTime() + (age * 1000));
	const out = parseInt(getCookie("redBall")) + 1;
	if (!isNaN(out)) {
	    document.cookie = "redBall="+out+";"+"expires="+d.toUTCString();
	see();
		return;
	}
	attention();
}

function greenBallAdd() {
	const d = new Date();
    d.setTime(d.getTime() + (age * 1000));
    let expires = "expires="+d.toUTCString();
	const out = parseInt(getCookie("greenBall")) + 1;
	if (!isNaN(out)) {
		document.cookie = "greenBall="+out+";"+"expires="+d.toUTCString();
	see();
		return;
	}
	attention();
}

function blueBallAdd() {
	const d = new Date();
    d.setTime(d.getTime() + (age * 1000));
    let expires = "expires="+d.toUTCString();
	const out = parseInt(getCookie("blueBall")) + 1;
	if (!isNaN(out)) {
		document.cookie = "blueBall="+out+";"+"expires="+d.toUTCString();
	see();
		return;
	}
	attention();
}

function attention() {
	alert("Данные устарели. Перезагрузите страницу");
	document.location.reload();
}

function watch() {
	const output = document.getElementById("cookies");
    output.textContent = document.cookie;
}

function see() {
	const redCount = document.getElementById("red");
	const greenCount = document.getElementById("green");
	const blueCount = document.getElementById("blue");
    redCount.textContent = getCookie("redBall");
	greenCount.textContent = getCookie("greenBall");
	blueCount.textContent = getCookie("blueBall");
	const redPrice = document.getElementById("redPrice");
	const greenPrice = document.getElementById("greenPrice");
	const bluePrice = document.getElementById("bluePrice");
    redPrice.textContent = getCookie("redBall") * 2500;
	greenPrice.textContent = getCookie("greenBall") * 1500;
	bluePrice.textContent = getCookie("blueBall") * 3700;
	const totalPrice = document.getElementById("totalPrice");
	totalPrice.textContent = getCookie("redBall") * 2500 + getCookie("greenBall") * 1500 + getCookie("blueBall") * 3700;
}