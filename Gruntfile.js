module.exports = function(grunt) {
    var modRewrite = require('connect-modrewrite');
    //var connect = require('connect');
    //var serveStatic = require('serve-static');

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
                    middleware: function(connect, options) {
                        var middlewares = [];

                        middlewares.push(modRewrite(['^[^\\.]*$ /index.html [L]'])); //Matches everything that does not contain a '.' (period)
                        options.base.forEach(function(base) {
                            middlewares.push(connect.static(base));
                        });

                        return middlewares;
                    },
                    port: 9000,
                    base: ['front/', 'front/app/', '.'],
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