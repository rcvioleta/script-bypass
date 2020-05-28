!(function() {
	window.confirm = function() {
		return true;
	};

	console.log('window?', window);
})();
