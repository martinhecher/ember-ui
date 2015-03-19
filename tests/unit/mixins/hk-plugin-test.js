import Ember from 'ember';
import HkPluginMixin from '../../../mixins/hk-plugin';
import { module, test } from 'qunit';

module('HkPluginMixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var HkPluginObject = Ember.Object.extend(HkPluginMixin);
  var subject = HkPluginObject.create();
  assert.ok(subject);
});
