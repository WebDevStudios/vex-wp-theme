module.exports = function( grunt ) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		compass: {
			dist: {
				options: {
					sassDir: 'sass',
					cssDir: 'css'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-compass');

	grunt.registerTask('default', ['compass']);
};