import Ember from 'ember';
import layout from '../templates/components/wui-metadata-indicator';
import hkPlugin from '../mixins/hk-plugin';

function _getFileExtension(filepath) {
	return (/[.]/.exec(filepath)) ? /[^.]+$/.exec(filepath) : null;
}

export default Ember.Component.extend(hkPlugin, {
	layout: layout,

	hkStyle: 'wui-metadata-indicator',
	hkTheme: 't-dark',

	types: ['e57'],

	compatibleFiles: [],

	actions: {
		toggleTheme: function() {
			var theme = this.get('hkTheme');

			console.log('change theme from: ' + theme);

			if (theme === 't-default') {
				this.set('hkTheme', 't-dark');
			} else {
				this.set('hkTheme', 't-default');
			}
		}
	},

	onFilesChange: function() {
		var files = this.get('files'),
			compatibleFiles = [],
			controller = this;

		files.forEach(function(file) {
			var ext = _getFileExtension(file.get('path'))[0],
				types = controller.get('types');

			for (var idx = 0; idx < types.length; idx++) {
				var type = types[idx];
				if (ext.toLowerCase() === type) {
					compatibleFiles.push(file);
					break;
				}
			};

			if (compatibleFiles.length) {
				controller.set('hkIsHighlighted', true);
			} else {
				controller.set('hkIsHighlighted', false);
			}

			controller.set('compatibleFiles', compatibleFiles);
		});
	}.observes('files.@each')
});