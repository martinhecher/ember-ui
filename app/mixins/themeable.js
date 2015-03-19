import Ember from 'ember';

export default Ember.Mixin.create({
	classNameBindings: ['styleRoot', 'styleTheme'],
  	
  	styleRoot: 'namespace-module',
  	styleTheme: 'dark'
});
