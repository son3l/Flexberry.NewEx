import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  lvlCompress: DS.attr('number'),
  method: DS.attr('i-i-s-new-ex-method')
});

export let ValidationRules = {
  lvlCompress: {
    descriptionKey: 'models.i-i-s-new-ex-optimize.validations.lvlCompress.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  method: {
    descriptionKey: 'models.i-i-s-new-ex-optimize.validations.method.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('OptimizeE', 'i-i-s-new-ex-optimize', {
    lvlCompress: attr('Lvl compress', { index: 0 }),
    method: attr('Method', { index: 1 })
  });

  modelClass.defineProjection('OptimizeL', 'i-i-s-new-ex-optimize', {
    lvlCompress: attr('Lvl compress', { index: 0 }),
    method: attr('Method', { index: 1 })
  });
};
