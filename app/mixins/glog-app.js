import Ember from 'ember';

export default Ember.Mixin.create({
  classNameBindings: [
    'glogEnabled:js-glog-app:js-glog-none',
    'glogTheme'
  ],

  glogEnabled: true,

  glogTheme: function() {
    if (this.get('glogEnabled')) {
      return 'glog-default';
    } else {
      return '';
    }
  }.property('glogEnabled'),

  onGlogEnabledChanged: function() {
    console.log('[hk-plugin] Toggled debugging ...');
  }.observes('glogEnabled')
});