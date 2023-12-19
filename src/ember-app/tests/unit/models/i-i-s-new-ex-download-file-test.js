import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-new-ex-download-file', 'Unit | Model | i-i-s-new-ex-download-file', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-new-ex-download-file',
    'model:i-i-s-new-ex-no-n-opt-file',
    'model:i-i-s-new-ex-opt-files',
    'model:i-i-s-new-ex-optimize',
    'model:i-i-s-new-ex-upload-file',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
