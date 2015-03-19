import Ember from 'ember';
import layout from '../templates/components/metadata-editor';
import Themeable from '../mixins/themeable';

export default Ember.Component.extend(Themeable, {
  layout: layout,
  glogApp: true,

  styleRoot: 'wb-metadata-editor',
  styleTheme: 'dark'
});
