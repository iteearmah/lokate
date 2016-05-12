//var utils=require("./utils.js");
var IMAGE_PATH='src/images/';
var PAGE_MARGIN = 16;
var IMAGE_SIZE = 120;
var MARGIN = 12;
var MARGIN_LARGE = 24;
//navigator.splashscreen.show();
var page = new tabris.Page({
  title: "Lokate",
  topLevel: true
});
 window.plugins.GPSLocator.getLocation(function(result){
    //result[0]:latitude,result[1]:longitude.
    navigator.notification.alert(JSON.stringify(result));
    },function(e){
        navigator.notification.alert(JSON.stringify(e));
    });

 // Android customization
/*cordova.plugins.backgroundMode.setDefaults({
   title:'PentTV',
   text:"It's all about Jesus",
  ticker: 'Nokofiooo'
})*/
     
/*    // Enable background mode
    cordova.plugins.backgroundMode.enable();

    // Called when background mode has been activated
    cordova.plugins.backgroundMode.onactivate = function () {
        setTimeout(function () {
            console.log('background');
            // Modify the currently displayed notification
            
        }, 5000);
    }
cordova.plugins.notification.badge.registerPermission(function (granted) {
    console.log('Permission has been granted: ' + granted);
});
tabris.app.on("pause", function() {
   
    setTimeout(function(){ 
    
   cordova.plugins.backgroundMode.configure({
  ticker: 'New message in now'
})
    //navigator.notification.alert('New Message');

navigator.notification.beep(1);
    }, 3000);

});
*/

/*admob.initAdmob("ca-app-pub-3282562808664310/2431822278","ca-app-pub-3282562808664310/5267537477");
admob.showBanner(admob.BannerSize.BANNER,admob.Position.BOTTOM_CENTER);*/
/*var drawer = new tabris.Drawer();
drawer.append(new tabris.PageSelector());*/

/*var drawerImage = tabris.create("ImageView", {
   image: IMAGE_PATH+'ppeett.jpg',
  scaleMode: "fill",
  layoutData: {left: 0, right: 0, top: 0, height: 200}
}).appendTo(drawer);*/
//drawerModule.leftSlideMenu(drawerImage,drawer);
tabris.ui.set("background", "#3E50B3");



page.open();
//navigator.splashscreen.hide();