import Ember from 'ember';
import GLog from '../mixins/glog-app';
import Themeable from '../mixins/themeable';

export default Ember.Mixin.create(Themeable, GLog, {
	classNameBindings: ['hkPluginNamespace'],
  	
  	hkPluginNamespace: 'hk-plugin',
  	styleTheme: 'dark',

  	actions: {
  		hkToggleDebugger: function() {
  			this.toggleProperty('hkIsDebugging');
  		}
  	},

  	onIsDebuggingChanged: function() {
  		this.toggleProperty('glogEnabled');
  	}.observes('hkIsDebugging')
});
