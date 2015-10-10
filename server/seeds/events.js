Meteor.startup(function() {
  var randomGeo = Meteor.npmRequire('geojson-random');
  //var random = randomGeo.point(1);
  Factory.define('geoevent', GeoEvents, {
    name: function() { return Fake.sentence(); },
    rating: function() { return _.random(1, 5); },
    public: true,
    owner: 'ywicySTSi7HbxMG2F',
    feature: function() { return randomGeo.point(1); }
  });

  //console.log(random);

  if (GeoEvents.find({}).count() === 0) {

    _(10).times(function(n) {
      Factory.create('geoevent');
    });

  }

});
//Meteor.call(GeoEvents.insert())