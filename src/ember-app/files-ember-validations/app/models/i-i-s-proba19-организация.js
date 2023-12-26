import {
  defineNamespace,
  defineProjections,
  Model as ОрганизацияMixin
} from '../mixins/regenerated/models/i-i-s-proba19-организация';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОрганизацияMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
