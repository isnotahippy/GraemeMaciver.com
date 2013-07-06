module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      main: {
        files: [
          {expand: true, cwd: 'source/', src: ['assets/**'], dest: 'build/'},
          {expand: true, cwd: '', src: ['CNAME'], dest: 'build/'},
        ]
      }
    },
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['build/assets/js/sizzle.js','build/assets/js/console.image.min.js', 'build/assets/js/fun.js'],
        dest: 'build/assets/js/build.js'
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
        generateSitemap: false,
        generateRobotstxt: false,   
      }
    },
    watch: {
      files: ['source/**/*'],
      tasks: ['copy', 'concat', 'sass', 'swig']
    },
    'gh-pages': {
      'gh-pages': {
        // These files will get pushed to the `gh-pages` branch (the default).
        base: 'build',
        src: ['*']
      },
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-swig');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Add tasks
  grunt.registerTask('build', ['copy', 'concat', 'sass', 'swig']);
  grunt.registerTask('github', ['gh-pages']);

};