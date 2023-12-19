import {
  defineNamespace,
  defineProjections,
  Model as NoNOptFileMixin
} from '../mixins/regenerated/models/i-i-s-new-ex-no-n-opt-file';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(NoNOptFileMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
