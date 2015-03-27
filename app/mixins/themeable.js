import Ember from 'ember';

export default Ember.Mixin.create({
	classNameBindings: ['styleRoot', 'styleTheme'],
  	
  	hkStyle: 'namespace-module',
  	hkTheme: 'dark'
});
