import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СотрудникиMixin
} from '../mixins/regenerated/models/i-i-s-proba19-сотрудники';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СотрудникиMixin, Validations, {
});

defineProjections(Model);

export default Model;
