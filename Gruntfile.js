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
                    optimize: 'uglify2',
                    include: ['../../node_modules/requirejs/require']
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
        },
        targethtml: {
            dev: {
                files: {
                    'front/index.html': 'front/htmlsrc/index.html'
                }
            },
            prod: {
                files: {
                    'front/index.html': 'front/htmlsrc/index.html'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-requirejs'); 
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-targethtml');
    /*----------  default task  ----------*/

    grunt.registerTask('prod', ['targethtml:prod', 'requirejs:prod', 'connect:all']);
    grunt.registerTask('dev', ['targethtml:dev', 'connect:all', 'requirejs:dev']);
};