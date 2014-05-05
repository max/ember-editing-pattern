App = Ember.Application.create();

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return App.ITEM_FIXTURES;
  }
});

App.IndexController = Ember.ArrayController.extend({
  actions: {
    add: function(title) {
      var item = Ember.Object.create({title: title, stage: 'add'});
      var items = this.get('model');
      items.addObject(item);

      this.set('title', '');
    },

    remove: function(item) {
      item.set('stage', 'delete');
    },

    discard: function() {
      var items = this.get('model');

      items.forEach(function (item) {
        if (item.stage) {
          items.removeObject(item);
        }
      });

      this.set('isEditing', false);
    },

    edit: function() {
      this.set('isEditing', true);
    }
  },

  isEditing: true
});
