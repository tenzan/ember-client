import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://node-api-pg.herokuapp.com',
  namespace: 'v1'
});
