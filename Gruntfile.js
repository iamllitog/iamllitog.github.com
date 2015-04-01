module.exports = function(grunt) {

//开发环境 ： grunt 
//生产环境 ： grunt product

grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
    //语法检测
    jshint : {
      all:['Gruntfile.js','js/src/*.js','js/src/util/*.js']
    },
    //压缩js
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      dist:{
        files:[
        {
          expand: true,
          src:'js/src/*.js',
          dest:'js/dist/',
          ext:'.min.js',
          flatten : 'true'
        },
        { 
          expand: true,
          src:'js/src/util/*.js',
          dest:'js/dist/util/',
          ext:'.min.js',
          flatten : 'true'
        }
        ]
      }
    },
    //compass
    compass :{
      develop : {
        options :{
          outputStyle:'expanded',
          sassDir:'css/scss',
          cssDir : 'css/css'
        }
      },
      product : {
        options :{
          outputStyle:'compressed',
          sassDir:'css/scss',
          cssDir : 'css/dist'
        }
      }
    },
    //监控
    watch : {
      develop : {
        files : ['js/src/*.js','js/src/util/*.js','**/*.scss'],
        tasks : ['compass:develop','jshint']
      }
    }
  });

grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-compass');
grunt.loadNpmTasks('grunt-contrib-watch');

  //默认环境：监控
  grunt.registerTask('default', ['watch']);
  // 生产环境
  grunt.registerTask('product', ['jshint','uglify','compass']);

};