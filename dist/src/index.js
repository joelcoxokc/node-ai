'use strict';
Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var cwd = _path2['default'].join.bind(_path2['default']);

var AureliaInterface = (function () {
  function AureliaInterface() {
    _classCallCheck(this, AureliaInterface);

    this.path = cwd('jspm_packages/github/aurelia/interface@master/sass');
    this.plugins = [this.path];
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
    key: 'configure',
    value: function configure(pathToSass) {
      var _this = this;

      this.configPaths = this.configPaths.map(function (p) {
        return cwd(pathToSass, _this.configPaths);
      });
    }
  }]);

  return AureliaInterface;
})();

exports['default'] = AureliaInterface;
module.exports = exports['default'];
//# sourceMappingURL=index.js.map
