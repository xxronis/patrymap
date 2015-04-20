Meteor.startup(function() {

  Factory.define('geoevent', GeoEvents, {
    name: function() { return Fake.sentence(); },
    rating: function() { return _.random(1, 5); },
    public: true,
    owner: 'ywicySTSi7HbxMG2F'
  });

  //if (GeoEvents.find({}).count() === 0) {

    _(10).times(function(n) {
      Factory.create('geoevent');
    });

  //}

});
//Meteor.call(GeoEvents.insert())