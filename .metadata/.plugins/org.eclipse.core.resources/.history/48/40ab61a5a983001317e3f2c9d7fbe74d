console.log("current window loaded");
var currentWindow = Ti.UI.currentWindow;  // setting variable for current window
var imageList = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "recipes");
var dirList = imageList.getDirectoryListing();
var imageContainer = Ti.UI.createView({
	width: "100%",
	height: "100%"	
});
var image = Ti.UI.createImageView({
	image: "recipes/" + dirList[0],
	top: 20,
});
var imageBox = Ti.UI.createLabel({
	text: "Next Recipe",
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	color: "#fff",
	backgroundColor: "#000",
	height: 50,
	width: "100%",
	bottom: 0,
	font: {fontSize: 20, fontFamily: 'Helvetica'}
});
var number = 1;
imageBox.addEventListener("click", function(event){
	number;
	image.image = "recipes/" + dirList[number];
	number++;
	if (number == 7){
		number = 0;
	}
});
imageContainer.add(image, imageBox);
currentWindow.add(imageContainer);