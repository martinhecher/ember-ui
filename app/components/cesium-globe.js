import Ember from 'ember';
import layout from '../templates/components/cesium-globe';

export default Ember.Component.extend({
  layout: layout,

  didInsertElement: function() {
  	var viewer = new Cesium.Viewer('cesiumContainer');
  }
});
