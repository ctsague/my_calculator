function add(a, b){
	return a + b;
}

function substract(a, b){
	return a - b;
}

function mult(a,b){
	return a * b;
}

function divide (a, b){
	return a / b;
}



$( "form" ).on('submit',function(e) {
	e.preventDefault();

  	var a = parseInt($('#input1').val(), 10);
	var b = parseInt($('#input2').val(), 10);
	

	var operation = $("#selectsign").val();

	if(operation === "+") {
		var result = add(a, b);
	
	} else if (operation === "-"){
		var result = substract(a, b);

	} else if(operation === "*"){
		var result = mult(a, b);
	} else {
		var result = divide(a, b);
	}

	console.log(result);
	$("#result").html(result);

});


$("#reinit").click(function() {
	$("input").val("");
	$("#result").html("?");
});

