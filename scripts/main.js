$(document).ready(function () {
	//=============================================================================================================

	//Used to enable and disable the Submit button.
	var z = 0;

	//Ref for the button to submit the values.
	var submitValues = $('#submitValues');

	//Ref for the button to clear the values.
	var clearValues = $('#clearValues');

	//Will store the chosen color.
	var colorPicked = "";

	//=============================================================================================================

	//Change the value of colorPicked.

	var colorBlue = $('#colorBlue');
	colorBlue.click(function () {
		colorPicked = "blue";
	});


	var colorBlack = $('#colorBlack');
	colorBlack.click(function () {
		colorPicked = "black";
	});


	var colorGreen = $('#colorGreen');
	colorGreen.click(function () {
		colorPicked = 'green';
	});


	var colorRed = $('#colorRed');
	colorRed.click(function () {
		colorPicked = 'red';
	});


	var colorPink = $('#colorPink');
	colorPink.click(function () {
		colorPicked = 'pink';
	});

	//=============================================================================================================

	//If the button clicked -->
	submitValues.click(function () {

		if (z == 0) {
			//Get the hight and width values and store them inside variables.
			var hightInput = document.getElementById("hightInput").value;
			var widthInput = document.getElementById("widthInput").value;
			var container_width = $("#tableMain").innerWidth();
			var container_height = $("#tableMain").innerHeight();
			var cellH = container_height / hightInput;
			var cellW = container_width / widthInput;

			//for loop to create table rows;
			for (i = 0; i < hightInput; i++) {
				var tar = document.createElement("tr");
				tar.id = i;
				document.getElementById("tableMain").appendChild(tar);

				//for loop to create table coloumns;
				for (x = 0; x < widthInput; x++) {
					var tc = document.createElement("td");
					tc.id = "tc";
					$("#tc").css("width", cellW);
					$("#tc").css("height", cellH);
					document.getElementById(i).appendChild(tc);
				}
			}

			//Hovering on the td element will change its background-color .
			$('td').hover(function () {
				$(this).css("background-color", colorPicked);
			});

			//Changing the value of z to disable the function from running again + change its color.
			z = 1;
			$('#submitValues').css("background-color", "grey");
		}
	});



	//=============================================================================================================

	//Clear button will call clearAll function.
	clearValues.click(function () {
		clearAll()
		z = 0;
		$('#submitValues').css("background-color", "#4CAF50");
	});

	//=============================================================================================================

	//Function to remove the created table rows and coloumns.
	var clearAll = function () {
		//Grab the parent of the rows and coloumns.
		var tableMain = document.getElementById("tableMain");

		while (tableMain.firstChild) {
			tableMain.removeChild(tableMain.firstChild);
		}
		while (tableMain.firstChild) {
			tableMain.removeChild(tableMain.firstChild);
		}

	};

	//=============================================================================================================

});