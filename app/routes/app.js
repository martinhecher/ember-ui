import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.modelFor('application');
	},

	setupController: function(controller, model) {
		var config = Ember.Object.create(),
			app = Ember.Object.create(),
			sessionPlugins = [],
			toolPlugins = [];

		model.plugins.forEach(function(item) {
			var type = item.get('anchor');
			sessionPlugins.push(item);
			if (type === 'session') {
				sessionPlugins.push(item);
			} else if (type === 'tool') {
				toolPlugins.push(item);
			}
		});

		// 'config' contains all data loaded from the backend:
		config.set('session', sessionPlugins);
		config.set('tools', sessionPlugins);

		// 'app' contains per-session state data
		app.set('files', model.files);
		app.set('selectedFiles', []);

		this._super(controller, app);

		controller.set('config', config);
		controller.set('app', app);
	}
});