import Ember from 'ember';
import layout from '../templates/components/hk-plugin';
import GLog from '../mixins/glog';
import Themeable from '../mixins/themeable';

export default Ember.Mixin.create(Themeable, GLog, {
	classNameBindings: ['hkPluginNamespace'],
  	
  	hkPluginNamespace: 'hkplugin',
  	styleTheme: 'dark',

  	actions: {
  		toggleDebugger: function() {
  			this.toggleProperty('isDebugging');
  			console.log('[hk-plugin] Toggled debugging ...');
  		}
  	},

  	onIsDebuggingChanged: function() {
  		this.set('glogEnabled', false);
  	}
});
