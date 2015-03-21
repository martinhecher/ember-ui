import Ember from 'ember';
import HkListMixin from '../../../mixins/hk-list';
import { module, test } from 'qunit';

module('HkListMixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var HkListObject = Ember.Object.extend(HkListMixin);
  var subject = HkListObject.create();
  assert.ok(subject);
});
