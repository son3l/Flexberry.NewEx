import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  date: DS.attr('date'),
  exe: DS.attr('i-i-s-new-ex-execution'),
  name: DS.attr('string'),
  repository: DS.attr('string'),
  size: DS.attr('number')
});

export let ValidationRules = {
  date: {
    descriptionKey: 'models.i-i-s-new-ex-no-n-opt-file.validations.date.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  exe: {
    descriptionKey: 'models.i-i-s-new-ex-no-n-opt-file.validations.exe.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  name: {
    descriptionKey: 'models.i-i-s-new-ex-no-n-opt-file.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  repository: {
    descriptionKey: 'models.i-i-s-new-ex-no-n-opt-file.validations.repository.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  size: {
    descriptionKey: 'models.i-i-s-new-ex-no-n-opt-file.validations.size.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('NoNOptFileE', 'i-i-s-new-ex-no-n-opt-file', {
    date: attr('Date', { index: 0 }),
    repository: attr('Repository', { index: 1 }),
    name: attr('Name', { index: 2 }),
    size: attr('Size', { index: 3 }),
    exe: attr('Exe', { index: 4 })
  });

  modelClass.defineProjection('NoNOptFileL', 'i-i-s-new-ex-no-n-opt-file', {
    date: attr('Date', { index: 0 }),
    repository: attr('Repository', { index: 1 }),
    name: attr('Name', { index: 2 }),
    size: attr('Size', { index: 3 }),
    exe: attr('Exe', { index: 4 })
  });
};
