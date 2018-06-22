const gulp = require("gulp");
const browserSync = require("browser-sync");
const reload = browserSync.reload;
const sass = require("gulp-ruby-sass");

gulp.task("sass", function() {
  return sass("scss/main.scss")
  .pipe(gulp.dest("css"))
  .pipe(reload({stream: true}));
});

gulp.task("serve", ["sass"], function() {
  browserSync({
    server: true,
  });

  gulp.watch(["scss/*.scss"], ["sass"]);
  gulp.watch(["index.html", "js/main.js"], reload);
});
