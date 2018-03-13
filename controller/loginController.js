nutric.controller("loginController", function($scope,$rootScope,$location){

	$rootScope.sessionUser = {
		username: "",
		password: ""
	};

	$scope.invalidLogin = false;

	$scope.tryLogin = function(){
		if($rootScope.sessionUser.username == "admin" && $rootScope.sessionUser.password == "admin"){
			$location.path('/home');
		}
		else {
			invalidLogin = true;
		}
	}

});