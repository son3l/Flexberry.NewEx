import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import MethodEnum from '../enums/i-i-s-new-ex-method';

export default FlexberryEnum.extend({
  enum: MethodEnum,
  sourceType: 'IIS.NewEx.Method'
});
