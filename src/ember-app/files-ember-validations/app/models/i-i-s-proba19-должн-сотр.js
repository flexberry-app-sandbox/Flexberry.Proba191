import {
  defineNamespace,
  defineProjections,
  Model as ДолжнСотрMixin
} from '../mixins/regenerated/models/i-i-s-proba19-должн-сотр';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ДолжнСотрMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
