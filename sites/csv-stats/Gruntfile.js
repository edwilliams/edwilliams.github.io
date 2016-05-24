module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        connect: {
            server: {
                options: {
                    port: 8000,
                    hostname: '*',
                    keepalive: true
                }
            }
        },

        watch: {
            sass: {
                files: 'css/sass/**/*.scss',
                tasks: 'sass:dev'
            },
            scripts: {
                files: ['js/src/*.js'],
                tasks: ['concat:dev', 'babel'],
                options: {
                    spawn: false,
                },
            }
        },

        sass: {
            dev: {
                files: {
                    'css/compiled/style.css': 'css/sass/style.scss'
                }
            }
        },

        concat: {
            dev: {
                src: [
                    'js/src/**/*.js',
                    '!js/src/babel.js'
                ],
                dest: 'js/src/babel.js',
            }
        },

        babel: {
            options: {
                sourceMap: true,
                presets: 'es2015'
            },
            dist: {
                files: {
                    'js/global.js': 'js/src/babel.js',
                }
            }
        }

    });

    grunt.registerTask('default', 'watch');

};
