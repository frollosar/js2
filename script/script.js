//функция замены кавычек

function replacequotes() {
	let par = document.getElementById("text");
	let ParText = par.innerHTML;
	par.innerHTML = ParText.replace(/[^(\w'\w)]'/g, '"');
}

document.onload = setTimeout(replacequotes, 3000);
