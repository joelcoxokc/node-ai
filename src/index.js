'use strict';
import path from 'path';
import gulp from 'gulp';
import sass from 'gulp-sass';
import neat from 'node-neat';
import concat from 'gulp-concat';
import plumber from 'gulp-plumber';
import minifycss from 'gulp-minify-css';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';


let cwd = path.join.bind(path, process.cwd());
let sassdash = cwd('node_modules', 'sassdash', 'scss');

let sassOptions = {
    errLogToConsole: true,
    includePaths: [],
};

class AureliaInterface {

  constructor() {
    this.path = cwd('jspm_packages/github/aurelia/interface@master/stylesheets');
    this.plugins = neat.includePaths.concat(sassdash, this.path);
    this.configPaths = ['_variables.scss', '_settings.scss', '_function', '_mixin.scss'];
  }

  includePaths(...args) {
    return this.plugins.concat(args);
  }

  with(...args) {
    return this.plugins.concat(args);
  }

  build(options) {
    this.options = options;
    console.log('[aurelia-interface]: Sass %s', options.dev ? 'DEV' : 'Production', options);
    return this.logInfo(
      this._build(     gulp.src(options.input)     ).pipe(gulp.dest(options.output))
    );
  }

  _build(stream) {
    sassOptions.includePaths = this.plugins;
    return stream &&
      this.dev(
        this.minify(
          this.autoprefixer(
            this.concat(
               stream.pipe(sass(sassOptions))
            )
          )
        )
      );
  }

  dev(stream, isDevBuilt) {
    return isDevBuilt
      ? stream.pipe(sourcemaps.write()).pipe(plumber.stop())
      : this.dev(stream.pipe(plumber()).pipe(sourcemaps.init({loadMaps:true})), true)
  }

  minify(stream) {
    return this.options.minify ? stream.pipe(minifycss()) : stream;
  }

  autoprefixer(stream) {
    return this.options.autoprefix ? stream.pipe(autoprefixer()) : stream;
  }

  concat(stream) {
    return this.options.concat ? stream.pipe(concat(this.options.concat)) : stream;
  }

  logInfo(stream) {
    return stream
      .on('error', sass.logError)
      .on('end', function(){console.log('[aurelia-interface]: Sass Complete!!')})
  }

}

export default AureliaInterface;
