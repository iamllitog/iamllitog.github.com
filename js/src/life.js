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
            deps: ["jquery"]
        }
    }
});

require(['jquery','bootstrap','domReady!'],function () {
	avalon.define("mean", function(vm){
                    vm.loadHead = function () {
                        $('#head_lifeBt').addClass('active');
                    };

            });
	avalon.scan();
});