import Ember from 'ember';
import GLog from '../mixins/glog-app';
import Themeable from '../mixins/themeable';

export default Ember.Mixin.create(Themeable, GLog, {
	classNameBindings: ['hkPluginNamespace'],
  	
  	hkPluginNamespace: 'hk-plugin',
  	styleTheme: 'dark',

      onMetaChanged: function() {
        if (this.get('hkInitialize')) {
          this.get('hkInitialize')();
        }
      }.observes('meta').on('init'),

  	actions: {
  		hkToggleDebugger: function() {
  			this.toggleProperty('hkIsDebugging');
  		},

            hkToggleMinimized: function() {
              if (this.get('meta.options.canBeMinimized')) {
                this.toggleProperty('hkIsMinimized');
              }
           }
  	},

  	onIsDebuggingChanged: function() {
  		this.toggleProperty('glogEnabled');
  	}.observes('hkIsDebugging'),

      onIsMinimizedChanged: function() {
        console.log('name: ' + this.get('label'));
        console.log('[hk-plugin] Toggled minimized state ... (is now: ' + this.get('hkIsMinimized') + ')');
      }.observes('hkIsMinimized')
});