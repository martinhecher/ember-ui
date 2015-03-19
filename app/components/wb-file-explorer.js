import Ember from 'ember';
import layout from '../templates/components/wb-file-explorer';

export default Ember.Component.extend({
  layout: layout,

  actions: {
  	selectFile: function(file) {
  		console.log('asdf:' + file.get('path'));
  		this.sendAction('onFileSelection', file);
  	}
  }
});
