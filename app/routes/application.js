import Ember from 'ember';

export
default Ember.Route.extend({
    model: function() {
        var appConfig = {};

        appConfig.plugins = [{
            id: 0,
            label: "Import Files",
            type: 'session'
        }, {
            id: 1,
            label: "File Information",
            type: 'session'
        }, {
            id: 2,
            label: "Recently Used Archives",
            type: 'session'
        }, {
            id: 3,
            label: "Metadata Editor",
            type: 'session'
        }, {
            id: 4,
            label: "Tagging",
            type: 'tool'
        }, {
            id: 5,
            label: "Archive Overview",
            type: 'sip-stage'
        }, {
            id: 6,
            label: "File Preview",
            type: 'sip-stage'
        }, {
            id: 7,
            label: "Geometric Enrichment",
            type: 'sip-stage'
        }, {
            id: 8,
            label: "Export Selected",
            type: 'tool'
        }, {
            id: 9,
            label: "Semantic Enrichment",
            type: 'sip-stage'
        }, {
            id: 10,
            label: "Search & Retrieve",
            type: 'sip-stage'
        }];

        appConfig.files = [{
            id: 0,
            path: '/tmp/scan-2012-02-30-haus_30.e57',
            size: 38273943,
            creator: 'Martin'
        }, {
            id: 1,
            path: '/tmp/scan-2013-02-30-haus_30.e57',
            size: 38273943,
            creator: 'Martin'
        }, {
            id: 2,
            path: '/tmp/scan-2014-02-30-haus_30.e57',
            size: 38273943,
            creator: 'Martin'
        }, {
            id: 3,
            path: '/tmp/scan-2015-02-30-haus_30.e57',
            size: 38273943,
            creator: 'Martin'
        }, {
            id: 4,
            path: '/tmp/2012-02-30-haus_30.ifc',
            size: 38273943,
            creator: 'Martin'
        }];

        var pluginRecords = this.store.pushMany('plugin-component', appConfig.plugins);
        var fileRecords = this.store.pushMany('file', appConfig.files);

        return {
            plugins: pluginRecords,
            files: fileRecords
        };
    }
});