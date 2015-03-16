import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		var appData = {};

		appData.plugins = [{
			label: "Import files",
			type: 'session'
		},{
			label: "File information",
			type: 'session'
		},{
			label: "Recently used archives",
			type: 'session'
		},{
			label: "Metadata editor",
			type: 'sip-stage'
		},{
			label: "Tagging",
			type: 'general'
		},{
			label: "Semantic Enrichment",
			location: 'sip-stage'
		},{
			label: "Export selected",
			type: 'general'
		}];

		return appData;
	},

	setupController: function(controller, model) {
		var store = this.store,
		context = Ember.Object.create({}),
		sessionPlugins = [],
		componentPlugins = [];

		model.plugins.forEach(function(item) {
			var record = store.createRecord('plugin-component', item);

			if (item.type === 'session') {
				sessionPlugins.push(record);
			} else {
				componentPlugins.push(record);
			}
		});

		context.set('session', sessionPlugins);
		context.set('components', componentPlugins);

		this._super(controller, context);
	}
});
