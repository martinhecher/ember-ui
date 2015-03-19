import Ember from 'ember';
import layout from '../templates/components/glog-app';
import GLog from '../mixins/glog-app';

export default Ember.Component.extend(GLog, {
  layout: layout
});
