import Ember from 'ember';

export default Ember.Mixin.create({
  classNameBindings: [
    'glogEnabled:js-glog-disabled:js-glog-enabled',
    'glogTheme',
    'glogItemClass'
  ],

  glogEnabled: true,
  glogItemClass: 'glog-item',
  
  glogTheme: function() {
    if (this.get('glogEnabled')) {
      return 'glog-default';
    } else {
      return '';
    }
  }.property('glogEnabled')
});