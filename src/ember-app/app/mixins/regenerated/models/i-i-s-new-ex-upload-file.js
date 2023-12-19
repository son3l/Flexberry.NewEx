import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  pathToFile: DS.attr('string')
});

export let ValidationRules = {
  pathToFile: {
    descriptionKey: 'models.i-i-s-new-ex-upload-file.validations.pathToFile.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('UploadFileE', 'i-i-s-new-ex-upload-file', {
    pathToFile: attr('Path to file', { index: 0 })
  });

  modelClass.defineProjection('UploadFileL', 'i-i-s-new-ex-upload-file', {
    pathToFile: attr('Path to file', { index: 0 })
  });
};
