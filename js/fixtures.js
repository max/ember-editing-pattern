App.ITEM_FIXTURES = [
  {
    title: 'Item 1',
    created_at: '2012-01-01T12:00:00Z'
  },
  {
    title: 'Item 2',
    created_at: '2012-01-02T12:00:00Z'
  }
];

App.Item = Ember.Object.extend();

App.ITEM_FIXTURES = App.ITEM_FIXTURES.map(function (item) {
  return App.Item.create(item);
});
