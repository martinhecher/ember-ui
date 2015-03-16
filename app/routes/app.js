import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.modelFor('application');
	},

	setupController: function(controller, model) {
		var context = Ember.Object.create(),
			sessionPlugins = [],
			componentPlugins = [];

		model.forEach(function(item) {
			if (item.get('type') === 'session') {
				sessionPlugins.push(item);
			} else {
				componentPlugins.push(item);
			}
		});

		context.set('session', sessionPlugins);
		context.set('components', componentPlugins);

		this._super(controller, context);
	}
});