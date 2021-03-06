import Ember from 'ember';

export
default Ember.Route.extend({
    model: function() {
        var appConfig = {};

        // TODO: introduce region configs here, e.g. 'session', 'main', 'header', etc.
        
        appConfig.plugins = [{
                id: 0,
                label: "Import Files",
                type: 'import-files-overview',
                anchor: 'session',
                options: {
                    canBeMinimized: true,

                    items: [{
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
                label: "Metadata",
                type: 'wui-metadata-indicator',
                anchor: 'toolbar',
                options: {
                    canBeMinimized: true,

                    needs: ['selectedFiles']
                },
            } 
            // {
            //     id: 1,
            //     label: "Recently Used Archives",
            //     type: 'metadata-editor',
            //     anchor: 'session',
            //     options: {
            //         canBeMinimized: true,

            //         items: [{
            //             type: 'archive',
            //             label: 'Infeldgasse 16c'
            //         }, {
            //             type: 'archive',
            //             label: 'Nygade'
            //         }, {
            //             type: 'archive',
            //             label: 'Haus 30'
            //         }]
            //     }
            // }, {
            //     id: 2,
            //     label: "RISE",
            //     type: 'metadata-editor',
            //     anchor: 'stage'  
            // }, {
            //     id: 3,
            //     label: "IFCReconstruction",
            //     // type: 'geo-ifcreconstruction',
            //     type: 'metadata-editor',
            //     anchor: 'stage'  
            // }, {
            //     id: 4,
            //     label: "DifferenceDetection",
            //     // type: 'geo-differencedetection',
            //     type: 'metadata-editor',
            //     anchor: 'stage'  
            // }, {
            //     id: 5,
            //     label: "Semantic Enrichment",
            //     // type: 'semantic-enrichment',
            //     type: 'metadata-editor',
            //     anchor: 'stage'  
            // },
            // {
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
            path: '/tmp/scan-2014-02-30-haus_30.ifc',
            size: 38273943,
            creator: 'Martin'
        }, {
            id: 3,
            path: '/tmp/scan-2015-02-30-haus_30.ifc',
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

        var appContext = {
            label: 'WorkbenchUI',
            selectedFiles: [],
        }

        return {
            plugins: pluginRecords,
            files: fileRecords,
            app: appContext
        };
    },

    setupController: function(controller, model) {
    }
});