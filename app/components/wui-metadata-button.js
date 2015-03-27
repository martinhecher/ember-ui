import Ember from 'ember';
import layout from '../templates/components/wui-metadata-button';
import hkElement from '../mixins/hk-plugin';

export default Ember.Component.extend(hkElement, {
	layout: layout,

	classNameBindings: ['hasItems:js-hk-items:js-hk-no-items'],

	hkIsDebugging: true,
	hkInitialize: function() {
		console.log('Initializing "wui-metadata-button" ...');
	},

	hkStyle: 'wui-metadata-button',
	hkTheme: 't-light',

	hasItems: false,

	onItemsChange: function() {
		var items = this.get('model');

		console.log('model: ' + items.get('length'));

		if (items.get('length')) {
			this.set('hasItems', true);
		} else {
			this.set('hasItems', false);
		}
	}.observes('model').on('init')
});