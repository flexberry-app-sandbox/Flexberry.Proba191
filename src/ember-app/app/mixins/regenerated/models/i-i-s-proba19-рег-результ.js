import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датРегРезСобес: DS.attr('date'),
  организация: DS.belongsTo('i-i-s-proba19-организация', { inverse: null, async: false }),
  планирСобес: DS.belongsTo('i-i-s-proba19-планир-собес', { inverse: null, async: false }),
  тЧРегРезульт: DS.hasMany('i-i-s-proba19-т-ч-рег-результ', { inverse: 'регРезульт', async: false })
});

export let ValidationRules = {
  датРегРезСобес: {
    descriptionKey: 'models.i-i-s-proba19-рег-результ.validations.датРегРезСобес.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-proba19-рег-результ.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  планирСобес: {
    descriptionKey: 'models.i-i-s-proba19-рег-результ.validations.планирСобес.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧРегРезульт: {
    descriptionKey: 'models.i-i-s-proba19-рег-результ.validations.тЧРегРезульт.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РегРезультE', 'i-i-s-proba19-рег-результ', {
    датРегРезСобес: attr('Дат рег рез собес', { index: 0 }),
    планирСобес: belongsTo('i-i-s-proba19-планир-собес', 'Планир собес', {
      иметьПриСебе: attr('Иметь при себе', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'иметьПриСебе' }),
    организация: belongsTo('i-i-s-proba19-организация', 'Организация', {
      наименование: attr('Наименование', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'наименование' }),
    тЧРегРезульт: hasMany('i-i-s-proba19-т-ч-рег-результ', 'Т ч рег результ', {
      итогСобес: attr('Итог собес', { index: 0 }),
      оценкаКандид: attr('Оценка кандид', { index: 1 }),
      крКомИлиОбсРеш: attr('Кр ком или обс реш', { index: 2 }),
      сотрудники: belongsTo('i-i-s-proba19-сотрудники', 'Сотрудники', {
        фИОСотруд: attr('Ф и о сотруд', { index: 4, hidden: true })
      }, { index: 3, displayMemberPath: 'фИОСотруд' })
    })
  });

  modelClass.defineProjection('РегРезультL', 'i-i-s-proba19-рег-результ', {
    датРегРезСобес: attr('Дат рег рез собес', { index: 0 }),
    планирСобес: belongsTo('i-i-s-proba19-планир-собес', 'Иметь при себе', {
      иметьПриСебе: attr('Иметь при себе', { index: 1 })
    }, { index: -1, hidden: true }),
    организация: belongsTo('i-i-s-proba19-организация', 'Наименование', {
      наименование: attr('Наименование', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
