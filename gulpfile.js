var gulp = require("gulp"),
  concat = require("gulp-concat"),
  rename = require("gulp-rename"),
  uglify = require("gulp-uglify"),
  sass = require("gulp-sass");

gulp.task("concatScripts", function () {
  return gulp
    .src(["js/main.js"])

    .pipe(concat("app.js"))
    .pipe(gulp.dest("js"));
});

gulp.task("minifyScripts", function () {
  return gulp
    .src(["js/app.js"])

    .pipe(uglify())
    .pipe(rename("app.min.js"))
    .pipe(gulp.dest("js"));
});

gulp.task("compileSass", function () {
  return gulp
    .src(["scss/style.scss"])

    .pipe(sass())
    .pipe(gulp.dest("css"));
});

gulp.task("watchSass", function () {
  gulp.watch("scss/**/*.scss", gulp.parallel("compileSass"));
});
