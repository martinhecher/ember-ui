import Ember from 'ember';

export default Ember.Mixin.create({
	classNameBindings: ['styleRoot', 'styleTheme'],
  	
  	styleRoot: 'wb-import-files',
  	styleTheme: 'dark'
});
