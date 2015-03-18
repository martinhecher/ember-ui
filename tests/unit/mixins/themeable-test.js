import Ember from 'ember';
import ThemeableMixin from '../../../mixins/themeable';
import { module, test } from 'qunit';

module('ThemeableMixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var ThemeableObject = Ember.Object.extend(ThemeableMixin);
  var subject = ThemeableObject.create();
  assert.ok(subject);
});
