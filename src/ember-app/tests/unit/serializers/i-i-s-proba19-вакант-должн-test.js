import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proba19-вакант-должн', 'Unit | Serializer | i-i-s-proba19-вакант-должн', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-proba19-вакант-должн',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-proba19-итог-собес',

    'model:i-i-s-proba19-вакант-должн',
    'model:i-i-s-proba19-граф-собес',
    'model:i-i-s-proba19-должн-сотр',
    'model:i-i-s-proba19-организация',
    'model:i-i-s-proba19-планир-собес',
    'model:i-i-s-proba19-рег-результ',
    'model:i-i-s-proba19-регист-анкеты',
    'model:i-i-s-proba19-сотрудники',
    'model:i-i-s-proba19-т-ч-граф-собес',
    'model:i-i-s-proba19-т-ч-рег-результ',
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
