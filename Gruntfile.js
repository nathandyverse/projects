module.exports = function(grunt) {
  'use strict';

  require('time-grunt')(grunt);

  var config = {
    tmp: 'tmp',
    src: 'src',
    stylesheets: 'stylesheets',
    javascripts: 'javascripts',
    images: 'images',
    templates: 'templates',
    dist: 'dist'
  };

  require('load-grunt-config')(grunt, {
    data: {
      pkg: grunt.file.readJSON('package.json'),
      cfg: config
    }
  });

  grunt.registerTask('default', [
    'clean:dev',
    'less:dev',
    'includes:dev',
    'jshint',
    'connect',
    'watch'
  ]);

  grunt.registerTask('dist', [
    'clean:dist',
    'less:dist',
    'includes:dist',
    'jshint',
    'requirejs:dist',
    'imagemin:dist'
  ]);
};