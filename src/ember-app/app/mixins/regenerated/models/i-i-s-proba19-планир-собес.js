import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаПланСобес: DS.attr('date'),
  иметьПриСебе: DS.attr('string'),
  организация: DS.belongsTo('i-i-s-proba19-организация', { inverse: null, async: false }),
  регистАнкеты: DS.belongsTo('i-i-s-proba19-регист-анкеты', { inverse: null, async: false })
});

export let ValidationRules = {
  датаПланСобес: {
    descriptionKey: 'models.i-i-s-proba19-планир-собес.validations.датаПланСобес.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  иметьПриСебе: {
    descriptionKey: 'models.i-i-s-proba19-планир-собес.validations.иметьПриСебе.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-proba19-планир-собес.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  регистАнкеты: {
    descriptionKey: 'models.i-i-s-proba19-планир-собес.validations.регистАнкеты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПланирСобесE', 'i-i-s-proba19-планир-собес', {
    датаПланСобес: attr('Дата план собес', { index: 0 }),
    иметьПриСебе: attr('Иметь при себе', { index: 1 }),
    организация: belongsTo('i-i-s-proba19-организация', 'Организация', {
      наименование: attr('Наименование', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'наименование' }),
    регистАнкеты: belongsTo('i-i-s-proba19-регист-анкеты', 'Регист анкеты', {
      фИОКандидата: attr('Ф и о кандидата', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'фИОКандидата' })
  });

  modelClass.defineProjection('ПланирСобесL', 'i-i-s-proba19-планир-собес', {
    датаПланСобес: attr('Дата план собес', { index: 0 }),
    иметьПриСебе: attr('Иметь при себе', { index: 1 }),
    организация: belongsTo('i-i-s-proba19-организация', 'Наименование', {
      наименование: attr('Наименование', { index: 2 })
    }, { index: -1, hidden: true }),
    регистАнкеты: belongsTo('i-i-s-proba19-регист-анкеты', 'Ф и о кандидата', {
      фИОКандидата: attr('Ф и о кандидата', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
