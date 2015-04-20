DashboardController = AppController.extend({
  waitOn: function() {
    return this.subscribe('geoevents');
  },
  data: {
    geoevents: GeoEvents.find({})
  },
  onAfterAction: function () {
    Meta.setTitle('Dashboard');
  }
});

DashboardController.events({
  'click [data-action=doSomething]': function (event, template) {
    event.preventDefault();
  }
});
