import Ember from 'ember';
import layout from '../templates/components/import-files-overview';
import hkPlugin from '../mixins/hk-plugin';

export default Ember.Component.extend(hkPlugin, {
  layout: layout,

  hkIsDebugging: true,

  styleRoot: 'wb-import-files',
  styleTheme: 't-light'
});
