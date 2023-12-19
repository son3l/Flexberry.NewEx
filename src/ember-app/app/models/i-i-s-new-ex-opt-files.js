import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as OptFilesMixin
} from '../mixins/regenerated/models/i-i-s-new-ex-opt-files';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(OptFilesMixin, Validations, {
});

defineProjections(Model);

export default Model;
