'use strict';
import path from 'path';

let cwd = path.join.bind(path);

class AureliaInterface {

    constructor() {
      this.path = cwd('jspm_packages/github/aurelia/interface@master/dist/sass');
      this.plugins = [this.path];
    }

    includePaths(...args) {
      return this.plugins.concat(args);
    }

    with(...args) {
      return this.plugins.concat(args);
    }
}

export default AureliaInterface;
