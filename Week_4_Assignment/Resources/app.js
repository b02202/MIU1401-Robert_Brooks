var win2 = Titanium.UI.createWindow({
    backgroundColor: 'black',
    title: 'FT Target Heart Rate Calculator',
    exitOnClose: true
});

var win1 = Titanium.UI.iOS.createNavigationWindow({
   window: win2,
   exitOnClose: true
});
Ti.include('json.js');
var layoutFile = require('layout');

var win3 = Titanium.UI.createWindow({
    backgroundColor: 'black',
    title: 'Sign-up'
});




win1.open();