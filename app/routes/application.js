import Ember from 'ember';

export
default Ember.Route.extend({
    model: function() {
        var appConfig = {};

        appConfig.plugins = [{
                id: 0,
                label: "Import Files",
                type: 'import-files-overview',
                anchor: 'session',
                options: {
                    canBeMinimized: true,

                    storageDrivers: [{
                        type: 'files',
                        label: 'Files',
                        defaultFolder: '~/'
                    }, {
                        type: 'folder',
                        label: 'Folder',
                        defaultFolder: '~/'
                    }, {
                        type: 'sftp',
                        label: 'L3S (SFTP)'
                    }]
                },
            }, {
                id: 1,
                label: "Recently Used Archives",
                type: 'metadata-editor',
                anchor: 'session',
                options: {
                    canBeMinimized: true
                }
            }
            // }, {
            //     id: 2,
            //     label: "Metadata",
            //     type: 'metadata-editor',
            //     anchor: 'session'  
            // }, {
            //     id: 3,
            //     label: "File Information",
            //     type: 'import-files-overview',
            //     anchor: 'session'  
            // }, {
            //     id: 4,
            //     label: "Tagging",
            //     type: 'import-files-overview',
            //     anchor: 'session'  
            // }, {
            //     id: 5,
            //     label: "Archive Overview",
            //     type: 'import-files-overview',
            //     anchor: 'session'  
            // }, {
            //     id: 6,
            //     label: "File Preview",
            //     type: 'import-files-overview',
            //     anchor: 'session'  
            // }, {
            //     id: 7,
            //     label: "Geometric Enrichment",
            //     type: 'import-files-overview',
            //     anchor: 'session'  
            // }, {
            //     id: 8,
            //     label: "Export Selected",
            //     type: 'import-files-overview',
            //     anchor: 'session'  
            // }, {
            //     id: 9,
            //     label: "Semantic Enrichment",
            //     type: 'import-files-overview',
            //     anchor: 'session'  
            // }, {
            //     id: 10,
            //     label: "Search & Retrieve",
            //     type: 'import-files-overview',
            //     anchor: 'session'  
            // }
        ];

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