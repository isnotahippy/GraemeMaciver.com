module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      main: {
        files: [
          {expand: true, cwd: 'source/', src: ['*'], dest: 'build/', filter: 'isFile'},
          {expand: true, cwd: 'source/', src: ['assets/**'], dest: 'build/'},
        ]
      }
    },
    sass: {
      main: {
        files: {
          'build/assets/css/style.css': 'build/assets/scss/style.scss',
        }
      }
    },    
    swig: {
      development: {
        init: {
          root: "source/",
          allowErrors: false,
          autoescape: true
        },
        dest: "build/",
        cwd: "source/",
        src: ['**/*.swig'],
        siteUrl: 'http://mydomain.net/',
        sitemap_priorities: {
            '_DEFAULT_': '0.5',
            'index': '0.8',
        }
      }
    },
    watch: {
      files: ['source/**/*'],
      tasks: ['copy', 'sass', 'swig']
    },
    build_gh_pages: {
      production: {
        options: {
          dist: "build"
        }
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-swig');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-build-gh-pages');

  // Add tasks
  grunt.registerTask('default', ['copy', 'sass', 'swig']);
  grunt.registerTask('github', ['build_gh_pages']);

};