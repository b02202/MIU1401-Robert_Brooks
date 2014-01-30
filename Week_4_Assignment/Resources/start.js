console.log("Working");
var currentWindow = Ti.UI.currentWindow;
Ti.include('json.js');
//console.log(formData1[0].age);
//var json = JSON.parse(formData1);
 
//["Name", "Age", "Endurance / Interval", "Phone"];
var formView = Ti.UI.createScrollView({
	layout: "vertical",
	backgroundColor: "#000",
	//borderRadius: 20,
	//borderColor: "#fff",
	top: 30,
	left: 10,
	right: 10,
});
var fieldHeight = 40;
var txt1 = Ti.UI.createTextField({
	  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	  color: '#336699',
	  top: 10,
	  left: 10,
	  right: 10, 
	  height: fieldHeight,
	  hintText: formData[0].name
});
var txt2 = Ti.UI.createTextField({
	  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	  color: '#336699',
	  top: 10,
	  left: 10,
	  right: 10, 
	  height: fieldHeight,
	  hintText: formData[0].age
});
var txt3 = Ti.UI.createTextField({
	  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	  color: '#336699',
	  top: 10,
	  left: 10,
	  right: 10, 
	  height: fieldHeight,
	  //hintText: formData[2]
});
/*var txt4 = Ti.UI.createTextField({
	  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	  color: '#336699',
	  top: 10,
	  left: 10,
	  right: 10, 
	  height: fieldHeight,
	  hintText: formData[3]
});
*/
var submitButton = Ti.UI.createLabel({
	text: "SUBMIT",
	color: "#fff",
	font: {fontSize: 25, fontFamily: "Helvetica"},
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    backgroundColor: "#0099ff",
    borderRadius: 20,
    borderColor: "#fff",
    height: 50,
    top: 13,
    left: 40,
    right: 40
});


 var alertText = function(){
	var maxText = 220 - txt2.value;
	var hRange = maxText * 0.80;
	var lRange = maxText * 0.50;
	
	alert( txt1.value + ", your" + "\n" + "Max Heart Rate is: " + maxText + " BPM" + "\n" + "Target Heart Rate Zone is:"  + "\n" + Math.round(lRange) + " BPM - " + Math.round(hRange) + " BPM" + "\n");
};

submitButton.addEventListener("click", alertText);

formView.add(txt1, txt2, submitButton);
currentWindow.add(formView);