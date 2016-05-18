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

tabris.ui.set("background", "#3E50B3");
 window.plugins.GPSLocator.getLocation(function(result){
    //result[0]:latitude,result[1]:longitude.
    //navigator.notification.alert(JSON.stringify(result));
    displayMap(result,page);
},function(e){
    navigator.notification.alert(JSON.stringify(e));
});


function displayMap(result,page) 
{
  var webview = new tabris.WebView({
  layoutData: {left: 0, top: 0, right: 0, bottom: 0},
  html:mapDisplay(result)
  }).appendTo(page);
  /*var map = tabris.create("ESMap", {
    layoutData: {left: 0, right: 0, top: 0, height: 200}
  }).on("ready", function() {
  }).appendTo(page);

  var locationButtons = tabris.create("Composite", {
    layoutData: {centerX: 0, top: [map, 10]}
  }).appendTo(page);*/
}

function mapDisplay(result)
{
  var disp='<!DOCTYPE html>'+
'<html>'+
  '<head>'+
    '<title>View Map</title>'+
    '<meta name="viewport" content="initial-scale=1.0">'+
    '<meta charset="utf-8">'+
    '<style>'+
      'html, body {'+
        'height: 100%;'+
        'margin: 0;'+
        'padding: 0;'+
      '}'+
      '#map {'+
        'height: 100%;'+
      '}'+
    '</style>'+
  '</head>'+
 '<div id="map" style="height:100%"><h4>Map Here</h4></div>'+
 '<script>'+
      'var map;'+
      'function initMap() {'+
        'map = new google.maps.Map(document.getElementById(\'map\'), {'+
         'center: {lat: '+result[0]+', lng: '+result[1]+'},'+
          'zoom: 15'+
        '});'+
      '}'+
   '<\/script>'+
  '<script src="https:\/\/maps.googleapis.com\/maps\/api\/js?key=AIzaSyD6vBXS1oPbnL4ziCmiVy986cs12H1Xyjk&callback=initMap"'+
  'async defer><\/script>';
 return disp;
}
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


page.open();
//navigator.splashscreen.hide();