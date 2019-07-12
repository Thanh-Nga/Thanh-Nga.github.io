alert("Welcome To My Page!")
var view;
var map;
var intialLocation;
var london;

function init() {
  initialLocation = ol.proj.fromLonLat ([41.043316, 28.862457]);
  london = ol.proj.fromLonLat([-0.12755, 51.507222]);

  view = new ol.View({
      center: initialLocation,
      zoom: 6
  });
  map = new ol.Map({
    target: 'map', //the target is our <div> name.
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    loadTilesWhileAnimating: true,
    view: view
  });
}

function panHome() {
  view.animate({
    center: london, //London location
    duration: 2000 // Two seconds
  });
}
window.onload = init;
