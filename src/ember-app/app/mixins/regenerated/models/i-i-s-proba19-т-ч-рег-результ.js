import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  итогСобес: DS.attr('i-i-s-proba19-итог-собес'),
  крКомИлиОбсРеш: DS.attr('string'),
  оценкаКандид: DS.attr('number'),
  сотрудники: DS.belongsTo('i-i-s-proba19-сотрудники', { inverse: null, async: false }),
  регРезульт: DS.belongsTo('i-i-s-proba19-рег-результ', { inverse: 'тЧРегРезульт', async: false })
});

export let ValidationRules = {
  итогСобес: {
    descriptionKey: 'models.i-i-s-proba19-т-ч-рег-результ.validations.итогСобес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  крКомИлиОбсРеш: {
    descriptionKey: 'models.i-i-s-proba19-т-ч-рег-результ.validations.крКомИлиОбсРеш.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  оценкаКандид: {
    descriptionKey: 'models.i-i-s-proba19-т-ч-рег-результ.validations.оценкаКандид.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-proba19-т-ч-рег-результ.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  регРезульт: {
    descriptionKey: 'models.i-i-s-proba19-т-ч-рег-результ.validations.регРезульт.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧРегРезультE', 'i-i-s-proba19-т-ч-рег-результ', {
    итогСобес: attr('Итог собес', { index: 0 }),
    оценкаКандид: attr('Оценка кандид', { index: 1 }),
    крКомИлиОбсРеш: attr('Кр ком или обс реш', { index: 2 }),
    сотрудники: belongsTo('i-i-s-proba19-сотрудники', 'Сотрудники', {
      фИОСотруд: attr('Ф и о сотруд', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'фИОСотруд' })
  });
};
