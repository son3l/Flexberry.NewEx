import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-new-ex-download-file-l');
  this.route('i-i-s-new-ex-download-file-e',
  { path: 'i-i-s-new-ex-download-file-e/:id' });
  this.route('i-i-s-new-ex-download-file-e.new',
  { path: 'i-i-s-new-ex-download-file-e/new' });
  this.route('i-i-s-new-ex-no-n-opt-file-l');
  this.route('i-i-s-new-ex-no-n-opt-file-e',
  { path: 'i-i-s-new-ex-no-n-opt-file-e/:id' });
  this.route('i-i-s-new-ex-no-n-opt-file-e.new',
  { path: 'i-i-s-new-ex-no-n-opt-file-e/new' });
  this.route('i-i-s-new-ex-opt-files-l');
  this.route('i-i-s-new-ex-opt-files-e',
  { path: 'i-i-s-new-ex-opt-files-e/:id' });
  this.route('i-i-s-new-ex-opt-files-e.new',
  { path: 'i-i-s-new-ex-opt-files-e/new' });
  this.route('i-i-s-new-ex-optimize-l');
  this.route('i-i-s-new-ex-optimize-e',
  { path: 'i-i-s-new-ex-optimize-e/:id' });
  this.route('i-i-s-new-ex-optimize-e.new',
  { path: 'i-i-s-new-ex-optimize-e/new' });
  this.route('i-i-s-new-ex-upload-file-l');
  this.route('i-i-s-new-ex-upload-file-e',
  { path: 'i-i-s-new-ex-upload-file-e/:id' });
  this.route('i-i-s-new-ex-upload-file-e.new',
  { path: 'i-i-s-new-ex-upload-file-e/new' });
});

export default Router;
