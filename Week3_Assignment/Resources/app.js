
var tabGroup1 = Ti.UI.createTabGroup();

var win = Ti.UI.createWindow({
	title: "Mobile Recipes",
	tabBarHidden: true,
	backgroundColor: "#000",
	backgroundImage: "bg1.png",	
});
var tabWin = Ti.UI.createTab({
	title: "",
	window: win
});

var introView = Ti.UI.createView({
	width: 275,
	height: 65,
	borderRadius: 20,
	backgroundColor: "#0099ff",
	bottom: 50
});
var introLabel = Ti.UI.createLabel({
	text: "Click for Recipes",
	color: "#fff",
	shadowColor: "#000",
	font: {fontSize: 18, fontFamily: "Arial"}
});
var ftLogo = Ti.UI.createImageView({
	image: "logo.png", 
	top: 50 
});

var modes = require("layouts");

introView.add(introLabel);
win.add(introView);
win.add(ftLogo);
tabGroup1.addTab(tabWin);
tabGroup1.open();
win.open();

