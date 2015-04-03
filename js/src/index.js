avalon.config({
	paths: {
		jquery: "../../framework/jquery.min.js",
                          bootstrap : '../../framework/bootstrap/js/bootstrap.min.js'
    },
    shim: {
        "jquery": {
            exports: "$"
        },
        "bootstrap": {
            deps: ["jquery"],
            exports: "$.fn.popover"
        }
    },
    enforceDefine: true
});

require(['jquery','bootstrap','domReady!'],function () {
	avalon.define("mean", function(vm){
                    vm.loadHead = function () {
                        $('#head_homeBt').addClass('active');
                    };

            });
	avalon.scan();
});