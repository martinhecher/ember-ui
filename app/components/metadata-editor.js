import Ember from 'ember';
import layout from '../templates/components/metadata-editor';
import hkPlugin from '../mixins/hk-plugin';

export default Ember.Component.extend(hkPlugin, {
	layout: layout,

	hkStyle: 'wui-metadata-editor',
	hkTheme: 't-light',
});