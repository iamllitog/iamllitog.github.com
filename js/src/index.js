avalon.config({
	paths: {
		jquery: "../../framework/jquery.min.js"
	}
});

require(['jquery','domReady!'],function ($) {
	avalon.define("test", function(vm){

	});
	avalon.scan();
});