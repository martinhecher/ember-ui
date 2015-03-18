import Ember from 'ember';
import layout from '../templates/components/import-files-overview';
import GraphicalLogger from '../mixins/glog-app';
import Themeable from '../mixins/themeable';

export default Ember.Component.extend(Themeable, GraphicalLogger, {
  glogApp: true,

  layout: layout,

  actions: {
  	toggleDebugger: function() {
  		console.log('debugger: ' + this.get('glogApp'));
  		this.toggleProperty('glogApp');
  	}
  }
});
