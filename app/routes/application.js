import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		var appConfig = {};

		appConfig.plugins = [{
			id: 0,
			label: "Import Files",
			type: 'session'
		},{
			id: 1,
			label: "File Information",
			type: 'session'
		},{
			id: 2,
			label: "Recently Used Archives",
			type: 'session'
		},{
			id: 3,
			label: "Metadata Editor",
			type: 'session'
		},{
			id: 4,
			label: "Tagging",
			type: 'tool'
		},{
			id: 5,
			label: "Archive Overview",
			type: 'sip-stage'
		},{
			id: 6,
			label: "File Preview",
			type: 'sip-stage'
		},{
			id: 7,
			label: "Geometric Enrichment",
			type: 'sip-stage'
		},{
			id: 8,
			label: "Export Selected",
			type: 'tool'
		},{
			id: 9,
			label: "Semantic Enrichment",
			type: 'sip-stage'
		},{
			id: 10,
			label: "Search & Retrieve",
			type: 'sip-stage'
		}];


		var records = this.store.pushMany('plugin-component', appConfig.plugins);
		
		return records;
	}
});
