module.exports = function(grunt){

grunt.initConfig({
  concat: {
    js: {
      src: ['js/**/*.js'],
      dest: 'build/js/main.js',
    },
     css: {
      src: ['css/**/*.css'],
      dest: 'build/css/main.css',
    },
  },
  watch: {
    options:{livereload:true},
    js: {
      files: ['js/**/*.js',],
      tasks: ['concat:js']
    },
    css: {
      files: ['css/**/*.css'],
      tasks: ['concat:css'],
      
    }
}, 

 express: {
    server: {
      options: {
        port: 9000,
        bases: ['build'],
        hostname:'localhost',
        livereload:true
      }
    }
  },

});

grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-express');
grunt.registerTask('default',['watch']);
grunt.registerTask('server',['express','watch']);

};