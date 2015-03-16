import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		var appData = {};

		appData.sessionTools = [{
			label: "Import files",
			location: ["sidebar-left"]
		},{
			label: "File information",
			location: ["sidebar-left"]
		},{
			label: "Recently used archives",
			location: ["sidebar-left"]
		}];

		appData.stageEditors = [{
			label: "Metadata editor",
			location: ["sidebar-right"]
		},{
			label: "Tagging",
			location: ["[sidebar-right"]
		},{
			label: "Semantic Enrichment",
			location: ["sidebar-right", "viewport-main"]
		},{
			label: "Export selected",
			location: ["sidebar-right"]
		}];

		return appData;
	},

	setupController: function(controller, model) {
		var store = this.store,
		modelPrepared = Ember.Object.create({}),
		sessionToolsItems = [],
		stageEditors = [];

		model.sessionTools.forEach(function(item) {
			var record = store.createRecord('plugin-component', item);
			sessionToolsItems.push(record);
		});

		model.stageEditors.forEach(function(item) {
			var record = store.createRecord('plugin-component', item);
			stageEditors.push(record);
		});

		modelPrepared.set('sessionTools', sessionToolsItems);
		modelPrepared.set('stageEditors', stageEditors);

		this._super(controller, modelPrepared);
	}
});
