var path         = require('path');
var gulp         = require('gulp');
var $            = require('./utils/plugins');
var handleErrors = require('./utils/handleErrors');

gulp.task('deploy', function() {
  return gulp.src('', {read: false})
    .pipe($.shell([
      'jekyll build',
      'gulp usemin',
      'cd _site && git add . -A',
      'cd _site && git commit -m "Publish website"',
      'cd _site && git push -f origin gh-pages'
    ]}))
    .on('error', handleErrors);
});
