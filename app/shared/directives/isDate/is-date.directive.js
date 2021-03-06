(function () {
	'use strict';

	angular
		.module('is')
		.directive('isDate', isDate);

	/* @ngInject */
	function isDate() {
		var directive = {
			restrict: 'E',
			require: '^form',
			templateUrl: 'shared/directives/isDate/is-date.template.html',
			link: link,
			scope: {
				label: '@',
				largura: '@',
				icone: '@',
				ngModel: '=',
				ngRequired: '='
			}
		};
		return directive;

		function link($scope, element, attrs, formCtrl) {
			var currentTime = new Date();

			$scope.formCtrl = formCtrl;
			$scope.dateName = 'isDate' + $scope.$id;
			$scope.largura = $scope.largura ? $scope.largura : '12';
			$scope.tamanhoIcone = $scope.tamanhoIcone ? $scope.tamanhoIcone : '48';

			$scope.today = 'Hoje';
			$scope.clear = 'Limpar';
			$scope.close = 'Fechar';
			$scope.selectYears = 50;

			var days = 500;
			$scope.minDate = (new Date(currentTime.getTime() - ( 1000 * 60 * 60 * 24 * days ))).toISOString();
			$scope.maxDate = (new Date(currentTime.getTime() + ( 1000 * 60 * 60 * 24 * days ))).toISOString();

		}
	}
})();