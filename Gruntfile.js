module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        requirejs: {
            compile: {
                options: {
                    baseUrl: 'front/app',
                    out: 'front/app/build/app.min.js',
                    name: 'app'
                },
                preserveLicenseComments : false,
                optimize: 'uglify'
            }
        },
        serve: {
            'path': 'front'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-serve');    

    /*----------  default task  ----------*/

    /*----------  tasks
    grunt serve
      ----------*/
    

    grunt.registerTask('default', ['requirejs', 'serve']);
};