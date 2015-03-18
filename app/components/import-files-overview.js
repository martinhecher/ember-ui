import Ember from 'ember';
import layout from '../templates/components/import-files-overview';

export default Ember.Component.extend({
  isDebugging: true, // TODO: create base class!

  layout: layout,

  styleNamespace: 'wb-import-files',
  theme: 'dark'
});
