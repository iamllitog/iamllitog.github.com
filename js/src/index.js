avalon.config({
	paths: {
		jquery: "../../framework/jquery.min.js"
	}
});

require(['jquery','domReady!'],function ($) {
	avalon.define("mean", function(vm){
		vm.loadedHead =  function () {
			avalon.scan();
			var navigation = responsiveNav("#nav");
		};
	});
	avalon.scan();
});