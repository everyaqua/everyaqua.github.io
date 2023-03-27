}

function clearResult() {
	result = '';
	document.getElementById('result').innerHTML = result;
}

function getResult() {
	let answer = eval(result);
	document.getElementById('result').innerHTML = answer;
	result = answer;
}
