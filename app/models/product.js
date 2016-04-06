import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  company: DS.attr('string'),
  price: DS.attr('number'),
  quantity: DS.attr('number'),
  image: DS.attr('string')
});
