'use strict';
import path from 'path';

let cwd = path.join.bind(path);

class AureliaInterface {

    constructor() {
      this.path = cwd('jspm_packages/github/aurelia/interface@master/sass');
      this.plugins = [this.path];
      this.configPaths = ['_variables.scss', '_settings.scss', '_function', '_mixin.scss'];
    }

    includePaths(...args) {
      return this.plugins.concat(args);
    }

    with(...args) {
      return this.plugins.concat(args);
    }

    configure(pathToSass) {
      this.configPaths = this.configPaths.map(p => {
        return cwd(pathToSass, this.configPaths);
      });
    }
}

export default AureliaInterface;
