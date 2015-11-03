'use strict';
import path from 'path';

let cwd = path.join.bind(path);

class AureliaInterface {
    includePaths () {
        return 'jspm_packages/github/aurelia/interface@master/dist/sass';
    }
}

export default AureliaInterface;
