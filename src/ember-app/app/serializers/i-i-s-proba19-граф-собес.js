import { Serializer as ГрафСобесSerializer } from
  '../mixins/regenerated/serializers/i-i-s-proba19-граф-собес';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ГрафСобесSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
