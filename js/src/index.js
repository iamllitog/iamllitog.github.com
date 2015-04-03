avalon.config({
	paths: {
		jquery: "../../framework/jquery.min.js",
        bootstrap : '../../framework/bootstrap/js/bootstrap.min.js'
	},
    shim: {
        "bootstrap": {
            deps: ["jquery"],
            exports: "$.fn.popover"
        }
    },
    enforceDefine: true
});

require(['jquery','bootstrap','domReady!'],function ($) {
	avalon.define("mean", function(vm){
	});
	avalon.scan();
});