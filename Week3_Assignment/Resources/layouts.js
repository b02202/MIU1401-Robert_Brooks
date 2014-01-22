var tabGroup2 = Ti.UI.createTabGroup();
var galleryWin = Ti.UI.createWindow({
	title: "Recipes",
	tabBarHidden: true,
	backgroundColor: "#000",
	backgroundImage: "bg1.png",	
});
var tabGallery = Ti.UI.createTab({
	title: "",
	window: galleryWin
});

var start = function(){
	tabGroup2.addTab(tabGallery);
	tabGroup2.open();
	galleryWin.open();
};
var close = function(){
	tabGroup2.close();
	
};
	var closeBox = Ti.UI.createView({
		bottom: 0,
		backgroundColor: "#0099ff",
		height: 50
	});
	var closeText = Ti.UI.createLabel({
		text: "Close",
		color: "#fff",
		font: {fontSize: 18, fontWeight: "bold", fontFamily: "Arial"}
	});

var imageList = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "recipes");
var dirList = imageList.getDirectoryListing();


var numberofCols = 4;
// view layout logic
var spacing = 5; 
var numberofSpace = (numberofCols + 1) * spacing;
var plaftormWidth = Ti.Platform.displayCaps.platformWidth;
var newWidth = (plaftormWidth - numberofSpace) / numberofCols;
var position = position + (newWidth + spacing); 

var container = Ti.UI.createScrollView({
	contentWidth: 'auto',
	contentHeight: 'auto',
	layout: 'vertical',
	top: 10,
	// Vertical and horizontal scroll indicators if needed
	//showVerticalScrollIndicator: true,
	//showHorizontalScrollIndicator: true
		
});
var mainView = Ti.UI.createView({
	height: 'auto',
	width: '100%',
	layout: 'horizontal',
	top: 0,
	bottom: 10
});
	
var makeViews = function(){
	
	for(var i=0, j=dirList.length; i<j; i++){
		var left = 4;
		position = left;
		var leftStart = position;
		leftStart++;
			if (leftStart >= plaftormWidth){
				left = 3;
			}
			
		var newView = Ti.UI.createView({
			left: leftStart,
			top: 0,
			backgroundImage: "bg1.png",
			width: newWidth,
			height: 100,
			
						
		});
		var imageIcon = Ti.UI.createImageView({
			title: dirList[i],
			image: "recipes/" + dirList[i],
		
		});
		
		mainView.add(newView);
		newView.add(imageIcon);
	}	
};


mainView.addEventListener("click", function(event){
	console.log(event);
	var tabGroup3 = Ti.UI.createTabGroup();
	var recipeWin = Ti.UI.createWindow({
		title: event.source.title,
		tabBarHidden: true,
		backgroundColor: "#000",
		backgroundImage: "bg1.png",
	});
	var tabRecipe = Ti.UI.createTab({
		title: "",
		window: recipeWin
	});
	var recipeImage = Ti.UI.createImageView({
		image: event.source.image,
		top: 10,
		height: 375
	});
	var closeBox2 = Ti.UI.createView({
		bottom: 0,
		backgroundColor: "#0099ff",
		height: 50
	});
	var closeText2 = Ti.UI.createLabel({
		text: "Close",
		color: "#fff",
		font: {fontSize: 18, fontFamily: "Arial"}
	});
	var close2 = function(){
		tabGroup3.close();
	};
	
	closeBox2.add(closeText2);
	recipeWin.add(recipeImage, closeBox2);
	recipeWin.addEventListener("click", close2);
	tabGroup3.addTab(tabRecipe);
	tabGroup3.open();
	recipeWin.open();
});

makeViews();
introView.addEventListener("click", start);
closeBox.addEventListener("click", close);
container.add(mainView);
galleryWin.add(container);
closeBox.add(closeText);
galleryWin.add(closeBox);