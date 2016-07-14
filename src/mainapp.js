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
var map = tabris.create("ESMap", {
    layoutData: {left: 0, right: 0, top: 0, height: 200}
  }).on("ready", function() {
  }).appendTo(page);
function createExample(page) {
  var map = tabris.create("ESMap", {
    layoutData: {left: 0, right: 0, top: 0, height: 200}
  }).on("ready", function() {
    this.set("position", [-33.867, 151.206]);
    this.on("longpress", function(widget, latLng) {
      var text = "Map long press position:<br/>" +
        "Latitude: <b>" + latLng[0] + "</b><br/>" +
        "Longitude: <b>" + latLng[1] + "</b>";
      tapEventDisplay.set("text", text);
    });
  }).appendTo(page);

  var tapEventDisplay = tabris.create("TextView", {
    markupEnabled: true,
    layoutData: {left: 10, top: [map, 10], right: 10}
  }).appendTo(page);
}
createExample(page);
page.open();
//navigator.splashscreen.hide();