import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.modelFor('application');
	},

	setupController: function(controller, model) {
		var context = Ember.Object.create(),
			sessionPlugins = [],
			stagePlugins = [],
			toolPlugins = [];

		model.plugins.forEach(function(item) {
			var type = item.get('type');
			if (type === 'session') {
				sessionPlugins.push(item);
			} else if (type === 'sip-stage') {
				stagePlugins.push(item);
			} else if (type === 'tool') {
				toolPlugins.push(item);
			}
		});

		context.set('session', sessionPlugins);
		context.set('stages', stagePlugins);
		context.set('tools', toolPlugins);
		context.set('files', model.files)

		this._super(controller, context);
	}
});