
var o = {
	a: 0,
	b: 10,
	'1': 30
}

for(var prop in o){
	// доступ к переменной prop
	console.log(o[prop]);
}