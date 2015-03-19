import Ember from 'ember';

export default Ember.ObjectController.extend({
	actions: {
		onFileSelection: function(file) {
			var selected = this.get('app.selectedFiles');
			this.get('app.selectedFiles').pushObject(file);
		}
	}
});
