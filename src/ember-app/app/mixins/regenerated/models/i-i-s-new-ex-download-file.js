import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  pathToLoad: DS.attr('string')
});

export let ValidationRules = {
  pathToLoad: {
    descriptionKey: 'models.i-i-s-new-ex-download-file.validations.pathToLoad.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('DownloadFileE', 'i-i-s-new-ex-download-file', {
    pathToLoad: attr('Path to load', { index: 0 })
  });

  modelClass.defineProjection('DownloadFileL', 'i-i-s-new-ex-download-file', {
    pathToLoad: attr('Path to load', { index: 0 })
  });
};
