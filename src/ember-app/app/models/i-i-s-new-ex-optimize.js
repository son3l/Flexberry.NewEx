import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as OptimizeMixin
} from '../mixins/regenerated/models/i-i-s-new-ex-optimize';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(OptimizeMixin, Validations, {
});

defineProjections(Model);

export default Model;
