
var collect = require('grunt-collection-helper');


module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            'default': {
                files: {
                    'examples/dist/':
                        [].concat(
                            collect.select('example-lib.css'),
                            collect.select('example-lib.js')
                        )
                }
            }
        },
        less: {
            'default': {
                options: {
                    paths: ['examples', 'bootstrap', 'components/bootstrap/less'],
                    yuicompress: false
                },
                files: {
                    'examples/dist/example-bootstrap.css':
                        collect.select('example-bootstrap.css')
                }
            }
        },
        watch: {
            'default': {
                options: {
                    debounceDelay: 250
                },
                files: [].concat(
                    collect.select('example-bootstrap.css'),
                    collect.select('example-lib.css'),
                    collect.select('example-lib.js'),
                    [
                        'bootstrap/slickgrid.less',
                        'components/bootstrap/less/variables.less'
                    ]
                ),
                tasks: ['copy:default', 'less:default']
            }
        }
    });

    // Load plugins.
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default tasks.
    grunt.registerTask('default', ['copy:default', 'less:default']);

};
