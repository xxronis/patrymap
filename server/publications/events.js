Meteor.publishComposite("geoevents", function() {
  return {
    find: function() {
      return GeoEvents.find({});
    }
    // ,
    // children: [
    //   {
    //     find: function(item) {
    //       return [];
    //     }
    //   }
    // ]
  }
});
