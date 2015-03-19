import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.modelFor('application');
	},

	setupController: function(controller, model) {
		var config = Ember.Object.create(),
			state = Ember.Object.create(),
			sessionPlugins = [],
			stagePlugins = [],
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

		// 'state' contains
		state.set('files', model.files);
		state.set('selectedFiles', []);

		this._super(controller, state);

		controller.set('config', config);
		controller.set('state', state);
	}
});