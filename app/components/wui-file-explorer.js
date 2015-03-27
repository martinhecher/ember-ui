import Ember from 'ember';
import layout from '../templates/components/wui-file-explorer';

export default Ember.Component.extend({
  layout: layout,

  actions: {
  	selectFile: function(file) {
  		console.log('[wui-file-explorer] selecting file: ' + file.get('path'));
  		this.sendAction('onFileSelection', file);
  	}
  }
});
