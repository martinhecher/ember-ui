import Ember from 'ember';
import layout from '../templates/components/metadata-editor';
import hkPlugin from '../mixins/hk-plugin';

export default Ember.Component.extend(hkPlugin, {
  classNameBindings: ['isEnabled:js-tool-enabled:js-tool-disabled'],
  layout: layout,
  
  isEnabled: true,

  hkIsDebugging: true,

  hkInitialize: function() {
  	console.log('[metadata-editor] Restarting ...');
  },

  styleRoot: 'wui-metadata-editor',
  styleTheme: 't-light'
});
