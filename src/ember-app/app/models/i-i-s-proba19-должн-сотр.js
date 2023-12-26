import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ДолжнСотрMixin
} from '../mixins/regenerated/models/i-i-s-proba19-должн-сотр';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ДолжнСотрMixin, Validations, {
});

defineProjections(Model);

export default Model;
