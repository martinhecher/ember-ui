import Ember from 'ember';
import layout from '../templates/components/import-files-overview';
import hkPlugin from '../mixins/hk-plugin';

export default Ember.Component.extend(hkPlugin, {
	layout: layout,

	hkStyle: 'wui-import-files',
	hkTheme: 't-light',
	
	hkIsDebugging: true,
	hkInitialize: function() {
		console.log('starting request ...');
		// Ember.$.get('http://localhost:5001/files', function(data) {
		// 	console.log('data: ' + JSON.stringify(data, null, 4));
		// });
	},

	numSelectedFiles: 0,

	// test for observing 'app' data:
	onSelectedFilesChanged: function() {
		var selectedFiles = this.get('numSelectedFiles');
		this.set('numSelectedFiles', ++selectedFiles);
	}.observes('app.selectedFiles.@each')
});