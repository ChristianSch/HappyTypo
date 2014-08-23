'use strict';


module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        paths: {
            js: ['src/**.js']
        },

        jshint: {
            src: '<%= paths.js %>',
            options: {
                jshintrc: '.jshintrc' // relative to Gruntfile
            }
        },

        jsbeautifier: {
            options: {
                html: {
                    braceStyle: 'collapse',
                    indentChar: ' ',
                    indentScripts: 'keep',
                    indentSize: 4,
                    maxPreserveNewlines: 10,
                    preserveNewlines: true,
                    unformatted: ['a', 'sub', 'sup', 'b', 'i', 'u'],
                    wrapLineLength: 0
                },
                js: {
                    braceStyle: 'collapse',
                    breakChainedMethods: false,
                    e4x: false,
                    evalCode: false,
                    indentChar: ' ',
                    indentLevel: 0,
                    indentSize: 4,
                    indentWithTabs: false,
                    jslintHappy: false,
                    keepArrayIndentation: false,
                    keepFunctionIndentation: false,
                    maxPreserveNewlines: 10,
                    preserveNewlines: true,
                    spaceBeforeConditional: true,
                    spaceInParen: false,
                    unescapeStrings: false,
                    wrapLineLength: 0
                }
            },
            beautify: {
                src: '<%= paths.js %>'
            },
            check: {
                src: '<%= paths.js %>',
                options: {
                    mode: 'VERIFY_ONLY'
                }
            }
        },

        uglify: {
            min: {
                options: {
                    sourceMap: true,
                    sourceMapName: 'dist/happytypo_<%= pkg.version %>.map',
                    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */'
                },
                files: {
                    'dist/happytypo_<%= pkg.version %>.min.js': '<%= paths.js %>'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jsbeautifier');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['jshint', 'jsbeautifier:check']);
    grunt.registerTask('beautify', ['jsbeautifier:beautify']);
    grunt.registerTask('dist', ['uglify:min']);
};