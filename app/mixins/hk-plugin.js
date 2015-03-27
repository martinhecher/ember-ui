import Ember from 'ember';
import GLog from '../mixins/glog-app';
import Themeable from '../mixins/themeable';

export default Ember.Mixin.create(Themeable, GLog, {
    classNameBindings: [
        'hkStyle',
        'hkTheme',
        'hkIsEnabled:js-hk-enabled:js-hk-not-enabled',
        'hkIsMinimized:js-hk-minimized:js-hk-not-minimized',
        'hkIsHighlighted:js-hk-highlighted:js-hk-not-highlighted',
        'hkIsDebugging:js-hk-debugging:js-hk-not-debugging',
    ],

    // States:
    // TODO: encapsulate into 'states' hash, similar to 'actions'?
    hkIsEnabled: true,
    hkIsMinimized: false,
    hkIsHighlighted: false,
    hkIsDebugging: false,

    // Themeable:
    hkStyle: 'hk-plugin-style',
    hkTheme: 't-default',

    actions: {
        hkToggleMinimized: function() {
            // if (this.get('meta.options.canBeMinimized')) {
            this.toggleProperty('hkIsMinimized');
            console.log('[hk-plugin] Toggled minimization state ...');
            // }
        },

        hkToggleHighlight: function() {
            // if (this.get('meta.options.canBeMinimized')) {
            this.toggleProperty('hkIsHighlighted');
            console.log('[hk-plugin] Toggled highlight state ...');
            // }
        },

        hkToggleDebugger: function() {
            this.toggleProperty('hkIsDebugging');
            console.log('[hk-plugin] Toggled debugger state ...');
        },
    },
    onMetaChanged: function() {
        if (this.get('hkInitialize')) {
            this.get('hkInitialize')();
        }
    }.observes('meta').on('init'),

    onIsDebuggingChanged: function() {
        this.toggleProperty('glogEnabled');
    }.observes('hkIsDebugging'),

    onIsMinimizedChanged: function() {
        console.log('name: ' + this.get('label'));
        console.log('[hk-plugin] Toggled minimized state ... (is now: ' + this.get('hkIsMinimized') + ')');
    }.observes('hkIsMinimized')
});