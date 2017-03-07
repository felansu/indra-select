(function () {
	'use strict';

	angular
		.module('is')
		.service('ProgramaService', ProgramaService);

	/* @ngInject */
	function ProgramaService() {
		var self = this;

		self.salvar = salvar;

		function salvar(programa) {
			return firebase.database()
				.ref()
				.child("programas")
				.push(programa)
				.then(function (result) {
					console.log(result.key);
					return !!result.key;
				});
		}
	}

})();