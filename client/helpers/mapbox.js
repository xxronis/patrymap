Mapbox.debug = true;
Mapbox.load('markercluster', 'heat');

Tracker.autorun(function () {
    if (Mapbox.loaded()) {
        L.mapbox.accessToken = 'pk.eyJ1IjoieHhyb25pcyIsImEiOiJscVFVNHdvIn0.H0b4euqdDzJTOz2lpwxe6Q';
        var map = L.mapbox.map('map', 'xxronis.ll27iaib', { zoomControl: false });//.setView([-104.99404, 39.75621], 2);
        // Disable drag and zoom handlers.
        //map.dragging.disable();
        map.touchZoom.disable();
        //map.doubleClickZoom.disable();
        map.scrollWheelZoom.disable();

        // Disable tap handler, if present.
        if (map.tap) map.tap.disable();

        function onEachFeature(feature, layer) {
            // does this feature have a property named popupContent?
            if (feature.properties && feature.properties.popupContent) {
                layer.bindPopup(feature.properties.popupContent);
            }
        }

        var geojsonFeature = {
            "type": "Feature",
            "properties": {
                "name": "Coors Field",
                "amenity": "Baseball Stadium",
                "popupContent": "This is where the Rockies play!"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-104.99404, 39.75621]
            }
        };

        L.geoJson(geojsonFeature, {
            onEachFeature: onEachFeature
        }).addTo(map);
        //map.setView([-104.99404, 39.75621], 18);
        new L.Control.Zoom({ position: 'bottomleft' }).addTo(map);
    }
});