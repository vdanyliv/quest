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
        connect: {
            prod: {
                options: {
                    port: 8000,
                    base: 'front/',
                    directory: 'front/',
                    keepalive: true,
                    debug: true
                }
            },
            dev: {
                options: {
                    port: 8000,
                    base: 'front/',
                    directory: 'front/',
                    keepalive: true,
                    debug: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-requirejs'); 
    grunt.loadNpmTasks('grunt-contrib-connect');
    /*----------  default task  ----------*/

    grunt.registerTask('prod', ['requirejs', 'connect:prod']);
    grunt.registerTask('dev', ['connect:dev']);
};