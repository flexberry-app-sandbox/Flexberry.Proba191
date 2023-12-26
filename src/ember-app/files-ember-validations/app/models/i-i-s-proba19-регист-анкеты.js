import {
  defineNamespace,
  defineProjections,
  Model as РегистАнкетыMixin
} from '../mixins/regenerated/models/i-i-s-proba19-регист-анкеты';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РегистАнкетыMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
