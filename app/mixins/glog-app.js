import Ember from 'ember';

export default Ember.Mixin.create({
  classNameBindings: [
    'glogEnabled:js-glog-disabled:js-glog-enabled',
    'glogTheme',
    'glogItemClass'
  ],

  glogEnabled: false,
  glogItemClass: 'glog-item',
  
  glogTheme: function() {
    if (this.get('glogEnabled')) {
      return 'glog-default';
    } else {
      return '';
    }
  }.property('glogEnabled'),

  onGlogEnabledChanged: function() {
    console.log('[hk-plugin] Toggled debugging ... (is now: ' + this.get('glogEnabled') + ')');
  }.observes('glogEnabled')
});