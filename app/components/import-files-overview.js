import Ember from 'ember';
import layout from '../templates/components/import-files-overview';
import GraphicalLogger from '../mixins/glog-app';

export default Ember.Component.extend(GraphicalLogger, {
  glogApp: true,

  layout: layout,

  styleNamespace: 'wb-import-files',
  theme: 'dark',

  actions: {
  	toggleDebugger: function() {
  		console.log('debugger: ' + this.get('glogApp'));
  		this.toggleProperty('glogApp');
  	}
  }
});
