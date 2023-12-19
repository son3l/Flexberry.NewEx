import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  pathToLoad: DS.attr('string'),
  optimize: DS.belongsTo('i-i-s-new-ex-optimize', { inverse: null, async: false })
});

export let ValidationRules = {
  pathToLoad: {
    descriptionKey: 'models.i-i-s-new-ex-download-file.validations.pathToLoad.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  optimize: {
    descriptionKey: 'models.i-i-s-new-ex-download-file.validations.optimize.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
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
