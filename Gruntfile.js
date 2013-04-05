
var collect = require('grunt-collection-helper');

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            'default': {
                options: {
                    paths: ['examples', 'bootstrap', 'components/bootstrap/less'],
                    yuicompress: false
                },
                files: {
                    'examples/dist/example-bootstrap.css':
                        collect.local('examples').select('example-bootstrap.css')
                }
            }
        },
        watch: {
            'default': {
                options: {
                    debounceDelay: 250
                },
                files: collect.local('examples').select('example-bootstrap.css').concat([
                    'bootstrap/slickgrid.less',
                    'components/bootstrap/less/variables.less'
                ]),
                tasks: ['less:default']
            }
        }
    });

    // Load plugins.
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default tasks.
    grunt.registerTask('default', ['less:default']);

};
