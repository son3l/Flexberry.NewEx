import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISNewExDownloadFileLForm from './forms/i-i-s-new-ex-download-file-l';
import IISNewExNoNOptFileLForm from './forms/i-i-s-new-ex-no-n-opt-file-l';
import IISNewExOptFilesLForm from './forms/i-i-s-new-ex-opt-files-l';
import IISNewExOptimizeLForm from './forms/i-i-s-new-ex-optimize-l';
import IISNewExUploadFileLForm from './forms/i-i-s-new-ex-upload-file-l';
import IISNewExDownloadFileEForm from './forms/i-i-s-new-ex-download-file-e';
import IISNewExNoNOptFileEForm from './forms/i-i-s-new-ex-no-n-opt-file-e';
import IISNewExOptFilesEForm from './forms/i-i-s-new-ex-opt-files-e';
import IISNewExOptimizeEForm from './forms/i-i-s-new-ex-optimize-e';
import IISNewExUploadFileEForm from './forms/i-i-s-new-ex-upload-file-e';
import IISNewExDownloadFileModel from './models/i-i-s-new-ex-download-file';
import IISNewExNoNOptFileModel from './models/i-i-s-new-ex-no-n-opt-file';
import IISNewExOptFilesModel from './models/i-i-s-new-ex-opt-files';
import IISNewExOptimizeModel from './models/i-i-s-new-ex-optimize';
import IISNewExUploadFileModel from './models/i-i-s-new-ex-upload-file';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-new-ex-download-file': IISNewExDownloadFileModel,
    'i-i-s-new-ex-no-n-opt-file': IISNewExNoNOptFileModel,
    'i-i-s-new-ex-opt-files': IISNewExOptFilesModel,
    'i-i-s-new-ex-optimize': IISNewExOptimizeModel,
    'i-i-s-new-ex-upload-file': IISNewExUploadFileModel
  },

  'application-name': 'New ex',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'New ex',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'New ex',
          title: 'New ex'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'new-ex': {
          caption: 'NewEx',
          title: 'NewEx',
          'i-i-s-new-ex-no-n-opt-file-l': {
            caption: 'No n opt file',
            title: ''
          },
          'i-i-s-new-ex-download-file-l': {
            caption: 'Download file',
            title: ''
          },
          'i-i-s-new-ex-optimize-l': {
            caption: 'Optimize',
            title: ''
          },
          'i-i-s-new-ex-upload-file-l': {
            caption: 'Upload file',
            title: ''
          },
          'i-i-s-new-ex-opt-files-l': {
            caption: 'Opt files',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-new-ex-download-file-l': IISNewExDownloadFileLForm,
    'i-i-s-new-ex-no-n-opt-file-l': IISNewExNoNOptFileLForm,
    'i-i-s-new-ex-opt-files-l': IISNewExOptFilesLForm,
    'i-i-s-new-ex-optimize-l': IISNewExOptimizeLForm,
    'i-i-s-new-ex-upload-file-l': IISNewExUploadFileLForm,
    'i-i-s-new-ex-download-file-e': IISNewExDownloadFileEForm,
    'i-i-s-new-ex-no-n-opt-file-e': IISNewExNoNOptFileEForm,
    'i-i-s-new-ex-opt-files-e': IISNewExOptFilesEForm,
    'i-i-s-new-ex-optimize-e': IISNewExOptimizeEForm,
    'i-i-s-new-ex-upload-file-e': IISNewExUploadFileEForm
  },

});

export default translations;
