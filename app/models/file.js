import DS from 'ember-data';

export default DS.Model.extend({
  path: DS.attr('string'),
  size: DS.attr('number'),
  creator: DS.attr('string')
});
