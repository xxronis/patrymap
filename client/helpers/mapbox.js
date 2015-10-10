Mapbox.debug = true;
Mapbox.load('markercluster', 'heat');
Meteor.subscribe('geoevents');
Tracker.autorun(function () {
  if (Mapbox.loaded()) {
    L.mapbox.accessToken = 'pk.eyJ1IjoieHhyb25pcyIsImEiOiJscVFVNHdvIn0.H0b4euqdDzJTOz2lpwxe6Q';
    var map = L.mapbox.map('map', 'xxronis.ll27iaib', { zoomControl: false });//.setView([-104.99404, 39.75621], 2);
    var geocoder = L.mapbox.geocoder('mapbox.places');
    geocoder.query('Europe', showEvents);

    var myLayer = L.mapbox.featureLayer().addTo(map);

    map.touchZoom.disable();

    map.scrollWheelZoom.disable();
    // Disable tap handler, if present.
    if (map.tap) map.tap.disable();

    function onEachFeature(feature, layer) {
        // does this feature have a property named popupContent?
        if (feature.properties && feature.properties.popupContent) {
            layer.bindPopup(feature.properties.popupContent);
        }
    }

    function showEvents(err, data) {
      var markers = [];
      // The geocoder can return an area, like a city, or a
      // point, like an address. Here we handle both cases,
      // by fitting the map bounds to an area or zooming to a point.
      if (data.lbounds) {
        map.fitBounds(data.lbounds);
      } else if (data.latlng) {
        //map.setView([data.latlng[0], data.latlng[1]], 22);
      }
      var geojsonFeature = GeoEvents.find({}).fetch();

      //var athens = {
      //  "type": "Feature",
      //    "properties": {
      //    "title": "Athens",
      //      "name": "Athens",
      //      "amenity": "City",
      //      "popupContent": "This is where the shit goes down!"
      //  },
      //    "geometry": {
      //      "type": "Point",
      //        "coordinates": [data.latlng[1], data.latlng[0]]
      //    }
      //  };

      _.each(geojsonFeature, function(item, index,list) {
        _.each(item.feature.features, function(marker, index,list){
          markers.push(marker)
        });
      });

      L.geoJson(markers, {
        onEachFeature: onEachFeature
      }).addTo(map);
    }

    //map.setView([-104.99404, 39.75621], 18);
    new L.Control.Zoom({ position: 'bottomleft' }).addTo(map);


    map.addControl(L.mapbox.geocoderControl('mapbox.places', {
        keepOpen: true,
        position: 'bottomleft'
    }));
  }
});