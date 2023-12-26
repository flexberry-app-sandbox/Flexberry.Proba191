import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proba19-должн-сотр', 'Unit | Model | i-i-s-proba19-должн-сотр', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
