var response;
function getQuestion(){
	window.confirm("I am curious about your ancestry.");
	response = window.prompt("Have you taken an ancestry test before?(Answer 'Yes or 'No')", " ");
	if(response ==="Yes"){
		window.prompt("Were you surprised about the results?");
		window.prompt("What is your racial category?", " ");
		var draw = document.getElementById("race");
		document.write('<td>' + response + '</td>');
		
	}
	
}