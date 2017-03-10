(function () {
	'use strict';

	angular
		.module('is')
		.directive('isSelect', isSelect);

	/* @ngInject */
	function isSelect() {
		var directive = {
			restrict: 'E',
			require: '^form',
			templateUrl: 'shared/directives/isSelect/is-select.template.html',
			link: link,
			scope: {
				label: '@',
				largura: '@',
				icone: '@',
				tamanhoIcone: '@',
				mensagem: '@',
				show: '@',
				ngModel: '=',
				function: '=',
				ngRequired: '=',
				control: '='
			}
		};
		return directive;

		function link($scope, element, attrs, formCtrl) {
			$scope.formCtrl = formCtrl;
			$scope.selectName = 'isSelect' + $scope.$id;
			$scope.selectControl = $scope.control || {};
			$scope.lista = [];
			$scope.largura = $scope.largura ? $scope.largura : '12';
			$scope.tamanhoIcone = $scope.tamanhoIcone ? $scope.tamanhoIcone : '48';

			if (typeof $scope.function === "function") {
				$scope.function().then(function (result) {
					$scope.lista = result;
				});
			}

			$scope.getLista = function () {
				return $scope.lista;
			};
		}
	}

})();
