import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-new-ex-download-file', 'Unit | Serializer | i-i-s-new-ex-download-file', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-new-ex-download-file',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-new-ex-execution',
    'transform:i-i-s-new-ex-method',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
