import Ember from 'ember';

export default Ember.Mixin.create({
	classNameBindings: ['glogApp:js-glog-app:js-glog-none', 
							'glogTheme'],

  	glogApp: true,

  	glogTheme: function() {
  		if (this.get('glogApp')) {
  			return 'glog-default';
  		} else {
  			return '';
  		}
  	}.property('glogApp')
});
