import Ember from 'ember';
import layout from '../templates/components/rpe-app';

export default Ember.Component.extend({
  layout: layout,
  items: [{
  	label: 'plugin 1',
  	type: 'import-files-overview'
  }, {
  	label: 'plugin 2',
  	type: 'metadata-editor'
  }]
});
