const gulp = require('gulp');

require('./_gulp/newdev2.js');
require('./_gulp/newdocs2.js');

gulp.task('default', gulp.series(
  'clean:dev',
  gulp.parallel('build-dev'),
  gulp.parallel('server-dev')
));


gulp.task('docs', gulp.series(
  'clean:docs',
   gulp.parallel('build-docs'),
   gulp.parallel('server-docs')
));

