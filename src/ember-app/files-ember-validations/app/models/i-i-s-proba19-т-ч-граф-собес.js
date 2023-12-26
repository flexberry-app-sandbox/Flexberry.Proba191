import {
  defineNamespace,
  defineProjections,
  Model as ТЧГрафСобесMixin
} from '../mixins/regenerated/models/i-i-s-proba19-т-ч-граф-собес';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧГрафСобесMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
