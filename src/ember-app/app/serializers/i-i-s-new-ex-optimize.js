import { Serializer as OptimizeSerializer } from
  '../mixins/regenerated/serializers/i-i-s-new-ex-optimize';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(OptimizeSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
