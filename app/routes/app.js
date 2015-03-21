import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.modelFor('application');
	},

	setupController: function(controller, model) {
		var app = model.app,
			plugins = model.plugins,
			config = Ember.Object.create(),
			sessionPlugins = [];
			var stagePlugins = [];

		plugins.forEach(function(item) {
			console.log('igte: ' + JSON.stringify(item, null, 4));
			var type = item.get('anchor');
			console.log('acnh: ' + type);
			sessionPlugins.push(item);
			if (type === 'session') {
				sessionPlugins.push(item);
			} else if (type === 'stage') {
				stagePlugins.push(item);
			}
		});

		// 'app' contains per-session state data + an 'about' information from backend data:
		app.files = model.files;
		app.selectedFiles = app.selectedFiles;

		// 'config' contains stored application config loaded from the backend:
		config.set('session', sessionPlugins);
		config.set('stages', stagePlugins);

		this._super(controller, model);

		controller.set('config', config);
		controller.set('app', app);
	}
});