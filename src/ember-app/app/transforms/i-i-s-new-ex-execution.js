import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ExecutionEnum from '../enums/i-i-s-new-ex-execution';

export default FlexberryEnum.extend({
  enum: ExecutionEnum,
  sourceType: 'IIS.NewEx.Execution'
});
