Mapbox.debug = true;
Mapbox.load('markercluster', 'heat');

Tracker.autorun(function () {
    if (Mapbox.loaded()) {
        L.mapbox.accessToken = 'pk.eyJ1IjoieHhyb25pcyIsImEiOiJscVFVNHdvIn0.H0b4euqdDzJTOz2lpwxe6Q';
        var map = L.mapbox.map('map', 'xxronis.ll27iaib');
        // Disable drag and zoom handlers.
        //map.dragging.disable();
        map.touchZoom.disable();
        //map.doubleClickZoom.disable();
        map.scrollWheelZoom.disable();

        // Disable tap handler, if present.
        if (map.tap) map.tap.disable();
    }
});