module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {                             
      dist: {                            
        options: {                       
          style: 'compressed',
          sourcemap: 'none',
          lineNumbers: true,
          noCache: true
        },
        files: { 
          'assets/main.css': 'scss/main.scss' 
        }
      }
    },

    concat: {
      options: {
        separator: ';',
        expand: true
      },
      dist: {
        src: ['js/*.js'],
        dest: 'assets/main.js'
      }
    },

    
    watch: {
        files: ['js/*','scss/*'],
        tasks: ['concat', 'sass', 'hogan'],
        options: {
          livereload: true
        }
    },

    hogan: {
      //desired target name
      hoganTemplates : {
        //path to input template
        src : 'js/hogan/*',
        //output path, relative to Gruntfile.js
        dest : 'js/04_hogan_templates.js',
        options: {
          binderName: 'hulk'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-hogan');

  grunt.registerTask('default', ['hogan','concat','sass']);
};