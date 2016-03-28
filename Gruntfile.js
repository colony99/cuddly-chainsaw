module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	concat: {
	  js: {
		src: 'js/**/*.js',
		dest: 'build/test.js'
	  },
	  css: {
		src: 'css/**/*.css',
		dest: 'build/test.css'
	  }
	},
    uglify: {
		options: {
		  banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
			'<%= grunt.template.today("yyyy-mm-dd") %> */'
		},
		my_target:{
			dest:'build/test.min.js',
			src:'build/test.js'
		}
    },
	cssmin: {
	  options: {
		shorthandCompacting: false,
		roundingPrecision: -1
	  },
	  target: {
			files: [{src: 'build/test.css',dest: 'build/test.min.css'}]
	  }
	},
	clean:{
		main:['build/test.{js,css}']
	},
	processhtml: {
		main:{
			files:[
				{'build/Main.html':'Main.html'}
			]
		}
	},
	copy: {
		main: {
			files: [
			  {expand: true,cwd:'img',src: ['**/*.jpg'], dest: 'build/img/'}
			],
		},
	},
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['concat','uglify','cssmin','clean','processhtml','copy']);

};