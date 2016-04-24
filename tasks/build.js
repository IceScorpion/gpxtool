module.exports = function (grunt) {

    grunt.config.set('copy.templates', {
        "files": [
            {
                "expand": true,
                "flatten": false,
                "cwd": 'app/templates',
                "src": [
                    "**/*.*"
                ],
                "dest": "dist"
            },
            {
                "expand": true,
                "flatten": false,
                "cwd": 'app/templates',
                "src": [
                    "**/*.*"
                ],
                "dest": "generated/templates/"
            }
        ]
    });

    grunt.config.set('copy.GMutils', {
        "files": [
            {
                "expand": true,
                "flatten": false,
                "cwd": 'vendor/GM_utils',
                "src": [
                    "**/*.*"
                ],
                "dest": "dist/js/GM_utils"
            },
            {
                "expand": true,
                "flatten": false,
                "cwd": 'vendor/GM_utils',
                "src": [
                    "**/*.*"
                ],
                "dest": "generated/js/GM_utils"
            }
        ]
    });

    grunt.config.set('copy.data', {
        "files": [
            {
                "expand": true,
                "flatten": false,
                "cwd": 'data',
                "src": [
                    "**/*.*"
                ],
                "dest": "dist/data"
            },
            {
                "expand": true,
                "flatten": false,
                "cwd": 'data',
                "src": [
                    "**/*.*"
                ],
                "dest": "generated/data/"
            }
        ]
    });

    grunt.registerTask("htmlbuild", "Copy Cockpit-App to the dist folder.", function () {
        grunt.task.run(['copy:templates', 'copy:data', 'copy:GMutils']);
    });

};