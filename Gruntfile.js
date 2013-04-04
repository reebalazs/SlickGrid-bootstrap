
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            'default': {
                options: {
                    paths: ['examples', 'bootstrap', 'lib/bootstrap'],
                    yuicompress: false
                },
                files: {
                    'examples/example-bootstrap.css': [
                        'examples/example-bootstrap.less'
                    ]
                }
            }
        },
        watch: {
            
            'default': {
                options: {
                    debounceDelay: 250
                },
                files: ['examples/*.less', 'bootstrap/*.less'],
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
