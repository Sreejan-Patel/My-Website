var submit = document.getElementById("submit");
submit.addEventListener("click", display);

var row = 1;

function display() {
	var name = document.getElementById("name").value;
	var skill = document.getElementById("skill").value;
	var level = document.getElementById("level").value;
	

	if(!name || !skill || !level) {
		alert("ERROR! Fill all the boxes");
		return;
	}

	var show = document.getElementById("show");

	var newrow = show.insertRow(row);

	var cell1 = newrow.insertCell(0);
	var cell2 = newrow.insertCell(1);
	var cell3 = newrow.insertCell(2);

	cell1.innerHTML = name;
	cell2.innerHTML = skill;
	cell3.innerHTML = level;

	row++;

}