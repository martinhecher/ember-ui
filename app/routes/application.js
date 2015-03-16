import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		var appConfig = {};

		appConfig.plugins = [{
			id: 0,
			label: "Import files",
			type: 'session'
		},{
			id: 1,
			label: "File information",
			type: 'session'
		},{
			id: 2,
			label: "Recently used archives",
			type: 'session'
		},{
			id: 3,
			label: "Metadata editor",
			type: 'sip-stage'
		},{
			id: 4,
			label: "Tagging",
			type: 'general'
		},{
			id: 5,
			label: "Semantic Enrichment",
			location: 'sip-stage'
		},{
			id: 6,
			label: "Export selected",
			type: 'general'
		}];


		var records = this.store.pushMany('plugin-component', appConfig.plugins);
		
		return records;
	}
});
