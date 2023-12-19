import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.new-ex.caption'),
          title: i18n.t('forms.application.sitemap.new-ex.title'),
          children: [{
            link: 'i-i-s-new-ex-no-n-opt-file-l',
            caption: i18n.t('forms.application.sitemap.new-ex.i-i-s-new-ex-no-n-opt-file-l.caption'),
            title: i18n.t('forms.application.sitemap.new-ex.i-i-s-new-ex-no-n-opt-file-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-new-ex-download-file-l',
            caption: i18n.t('forms.application.sitemap.new-ex.i-i-s-new-ex-download-file-l.caption'),
            title: i18n.t('forms.application.sitemap.new-ex.i-i-s-new-ex-download-file-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-new-ex-optimize-l',
            caption: i18n.t('forms.application.sitemap.new-ex.i-i-s-new-ex-optimize-l.caption'),
            title: i18n.t('forms.application.sitemap.new-ex.i-i-s-new-ex-optimize-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-new-ex-upload-file-l',
            caption: i18n.t('forms.application.sitemap.new-ex.i-i-s-new-ex-upload-file-l.caption'),
            title: i18n.t('forms.application.sitemap.new-ex.i-i-s-new-ex-upload-file-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-new-ex-opt-files-l',
            caption: i18n.t('forms.application.sitemap.new-ex.i-i-s-new-ex-opt-files-l.caption'),
            title: i18n.t('forms.application.sitemap.new-ex.i-i-s-new-ex-opt-files-l.title'),
            icon: 'tags',
            children: null
          }]
        }
      ]
    };
  }),
})