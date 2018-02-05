module.exports = {
  dev: {
    cwd: '<%= cfg.src %>/<%= cfg.templates %>',
    src: ['index.html'],
    dest: '<%= cfg.tmp %>/',
    options: {
      flatten: true
    }
  },
  dist: {
    cwd: '<%= cfg.src %>/<%= cfg.templates %>',
    src: ['index.html'],
    dest: '<%= cfg.dist %>/',
    options: {
      flatten: true
    }
  }
};