import {
  defineNamespace,
  defineProjections,
  Model as OptFilesMixin
} from '../mixins/regenerated/models/i-i-s-new-ex-opt-files';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(OptFilesMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
