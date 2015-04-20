GeoEvents = new Mongo.Collection('geoevents');

//Events.helpers({
//    name: console.log(this)
//});

GeoEvents.before.insert(function (userId, doc) {
  //console.log(userId)
  doc.createdAt = moment().toDate();
  doc.owner = userId;
});
