'use strict';
Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _gulpSass = require('gulp-sass');

var _gulpSass2 = _interopRequireDefault(_gulpSass);

var _nodeNeat = require('node-neat');

var _nodeNeat2 = _interopRequireDefault(_nodeNeat);

var _gulpConcat = require('gulp-concat');

var _gulpConcat2 = _interopRequireDefault(_gulpConcat);

var _gulpPlumber = require('gulp-plumber');

var _gulpPlumber2 = _interopRequireDefault(_gulpPlumber);

var _gulpMinifyCss = require('gulp-minify-css');

var _gulpMinifyCss2 = _interopRequireDefault(_gulpMinifyCss);

var _gulpSourcemaps = require('gulp-sourcemaps');

var _gulpSourcemaps2 = _interopRequireDefault(_gulpSourcemaps);

var _gulpAutoprefixer = require('gulp-autoprefixer');

var _gulpAutoprefixer2 = _interopRequireDefault(_gulpAutoprefixer);

var cwd = _path2['default'].join.bind(_path2['default'], process.cwd());
var sassdash = cwd('node_modules', 'sassdash', 'scss');

var sassOptions = {
  errLogToConsole: true,
  includePaths: []
};

var AureliaInterface = (function () {
  function AureliaInterface() {
    _classCallCheck(this, AureliaInterface);

    this.path = cwd('jspm_packages/github/aurelia/interface@master/stylesheets');
    this.plugins = _nodeNeat2['default'].includePaths.concat(sassdash, this.path);
    this.configPaths = ['_variables.scss', '_settings.scss', '_function', '_mixin.scss'];
  }

  _createClass(AureliaInterface, [{
    key: 'includePaths',
    value: function includePaths() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this.plugins.concat(args);
    }
  }, {
    key: 'with',
    value: function _with() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return this.plugins.concat(args);
    }
  }, {
    key: 'build',
    value: function build(options) {
      this.options = options;
      console.log('[aurelia-interface]: Sass %s', options.dev ? 'DEV' : 'Production', options);
      return this.logInfo(this._build(_gulp2['default'].src(options.input)).pipe(_gulp2['default'].dest(options.output)));
    }
  }, {
    key: '_build',
    value: function _build(stream) {
      sassOptions.includePaths = this.plugins;
      return stream && this.dev(this.minify(this.autoprefixer(this.concat(stream.pipe((0, _gulpSass2['default'])(sassOptions))))));
    }
  }, {
    key: 'dev',
    value: function dev(stream, isDevBuilt) {
      return isDevBuilt ? stream.pipe(_gulpSourcemaps2['default'].write()).pipe(_gulpPlumber2['default'].stop()) : this.dev(stream.pipe((0, _gulpPlumber2['default'])()).pipe(_gulpSourcemaps2['default'].init({ loadMaps: true })), true);
    }
  }, {
    key: 'minify',
    value: function minify(stream) {
      return this.options.minify ? stream.pipe((0, _gulpMinifyCss2['default'])()) : stream;
    }
  }, {
    key: 'autoprefixer',
    value: function autoprefixer(stream) {
      return this.options.autoprefix ? stream.pipe((0, _gulpAutoprefixer2['default'])()) : stream;
    }
  }, {
    key: 'concat',
    value: function concat(stream) {
      return this.options.concat ? stream.pipe((0, _gulpConcat2['default'])(this.options.concat)) : stream;
    }
  }, {
    key: 'logInfo',
    value: function logInfo(stream) {
      return stream.on('error', _gulpSass2['default'].logError).on('end', function () {
        console.log('[aurelia-interface]: Sass Complete!!');
      });
    }
  }]);

  return AureliaInterface;
})();

exports['default'] = AureliaInterface;
module.exports = exports['default'];
//# sourceMappingURL=index.js.map
