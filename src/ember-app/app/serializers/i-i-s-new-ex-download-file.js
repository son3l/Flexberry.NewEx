import { Serializer as DownloadFileSerializer } from
  '../mixins/regenerated/serializers/i-i-s-new-ex-download-file';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(DownloadFileSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
