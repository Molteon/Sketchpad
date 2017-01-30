$(document).ready(function () {
	//Ref for the button to submit the values.
	var submitValues = $('#submitValues');
    //Ref for the button to clear the values.
	var clearValues = $('#clearValues');
	//If the button clicked -->
	submitValues.click(function () {

		//Get the hight and width values and store them inside variables.
		var hightInput = document.getElementById("hightInput").value;
		var widthInput = document.getElementById("widthInput").value;

		//for loop to create table rows;
		for (i = 0; i < hightInput; i++) {
			var tar = document.createElement("tr");
			tar.id = "tar";
			document.getElementById("tableMain").appendChild(tar);

			//for loop to create table coloumns;
			for (x = 0; x < widthInput; x++) {
				var tc = document.createElement("td");
				tc.id = "tc";
				document.getElementById("tableMain").appendChild(tc);
			}
		}

		//Hovering on the td element will make its background-color black.
		$('td').hover(function () {
			$(this).css("background-color", "black");
		});
	});

	//used to remove the created table rows and coloumns.
	clearValues.click(function () {

		//Grab the parent of the rows and coloumns.
		var tableMain = document.getElementById("tableMain");

		while (tableMain.firstChild) {
			tableMain.removeChild(tableMain.firstChild);
		}
		while (tableMain.firstChild) {
			tableMain.removeChild(tableMain.firstChild);
		}
	});

});