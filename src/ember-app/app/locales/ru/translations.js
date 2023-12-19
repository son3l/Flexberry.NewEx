import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'New ex',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'New ex',
          title: 'New ex'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
