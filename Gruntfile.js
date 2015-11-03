module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        requirejs: {
            prod: {
                options: {
                    uglify2: {
                        mangle: false
                    },
                    mainConfigFile: "front/app/main.js",
                    baseUrl: 'front/app',
                    out: 'front/app/build/app.min.js',
                    name: 'app',
                    optimize: 'uglify2'
                }
            },
            dev: {
                options: {
                    mainConfigFile: "front/app/main.js",
                    baseUrl: 'front/app',
                    out: 'front/app/build/app.min.js',
                    name: 'app'
                } 
            }
        },
        connect: {
            all: {
                options: {
                    port: 8000,
                    base: ['front/', '.'],
                    directory: 'front/',
                    keepalive: true,
                    debug: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-requirejs'); 
    grunt.loadNpmTasks('grunt-contrib-connect');
    /*----------  default task  ----------*/

    grunt.registerTask('prod', ['requirejs:prod', 'connect:all']);
    grunt.registerTask('dev', ['connect:all', 'requirejs:dev']);
};