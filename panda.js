function ilove(panda,tendance){
	if(tendance === "amour"){
		alert("J'aime les pandas " + panda);
	} else if (tendance === "haine"){
		alert("Je hais les pandas " + panda + ',c\'est pour cela que ne n\'ouvre jamais la console dev')
	} else {
		alert('what ?!');
	}
}



$(".panda").click(function(){
	var pandaType = $(this).data('type');
	var tendance = $(this).data('tendance');
	console.log(pandaType);
	ilove(pandaType, tendance);
});









function dontlove(panda){
	alert("Je n'aime pas les " + panda);
}

$("#pas").click(function(){
	dontlove("pandas")

});

