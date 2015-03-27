import Ember from 'ember';

export default Ember.ObjectController.extend({
	actions: {
		onFileSelection: function(file) {
			var selected = this.get('app.selectedFiles'),
				presentFile = selected.findBy('path', file.get('path'));

			if (presentFile) {
				selected.removeObject(presentFile);
			} else {
				this.get('app.selectedFiles').pushObject(file);
			}
		}
	}
});