import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  repository: DS.attr('string'),
  downloadFile: DS.belongsTo('i-i-s-new-ex-download-file', { inverse: null, async: false })
});

export let ValidationRules = {
  repository: {
    descriptionKey: 'models.i-i-s-new-ex-opt-files.validations.repository.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  downloadFile: {
    descriptionKey: 'models.i-i-s-new-ex-opt-files.validations.downloadFile.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('OptFilesE', 'i-i-s-new-ex-opt-files', {
    repository: attr('Repository', { index: 0 })
  });

  modelClass.defineProjection('OptFilesL', 'i-i-s-new-ex-opt-files', {
    repository: attr('Repository', { index: 0 })
  });
};
