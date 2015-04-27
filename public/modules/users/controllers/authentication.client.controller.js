'use strict';

angular.module('users').controller('AuthenticationController', ['$scope', '$http', '$location', 'Authentication', '$resource','$routeParams',
	function($scope, $http, $location, Authentication, $resource, $routeParams) {
		$scope.authentication = Authentication;

		// If user is signed in then redirect back home
		if ($scope.authentication.user) $location.path('/');

			$scope.credentials = {roles: {
				type: [{
					type: String,
					enum: ['company', 'architect', 'vendor', 'user', 'editor', 'admin']
				}],
				role: 'user',
				desc:'User Type',
				hide:false
			}};

		
	
		if($location.search().role){
			$scope.credentials.roles.role=$location.search().role;
			$scope.credentials.roles.hide=true;
		}	

			
			// $scope.options =[{name:'user', desc:'I need to restructuring my home', selected:'true'},
			// 						{name:'company', desc:'I\'m an company', selected:'false'} ,
			// 						{name:'architect', desc:'I\'m an architect', selected:'false'},
			// 						{name:'vendor', desc:'I\'m a vendor', selected:'false'}];

			
			// $scope.xxx  = {selectedOption : $scope.options[0]};

		
		$scope.signup = function() {
			$http.post('/auth/signup', $scope.credentials).success(function(response) {
				// If successful we assign the response to the global user model
				$scope.authentication.user = response;

				// And redirect to the index page
				$location.path('/');
			}).error(function(response) {
				$scope.error = response.message;
			});
			
		};

		$scope.signin = function() {
			$http.post('/auth/signin', $scope.credentials).success(function(response) {
				// If successful we assign the response to the global user model
				$scope.authentication.user = response;

				// And redirect to the index page
				$location.path('/');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);