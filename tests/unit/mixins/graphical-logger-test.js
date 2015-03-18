import Ember from 'ember';
import GraphicalLoggerMixin from '../../../mixins/graphical-logger';
import { module, test } from 'qunit';

module('GraphicalLoggerMixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var GraphicalLoggerObject = Ember.Object.extend(GraphicalLoggerMixin);
  var subject = GraphicalLoggerObject.create();
  assert.ok(subject);
});
