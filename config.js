nutric.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/', {
			templateUrl: 'html/login.html',
			controller: 'loginController'
		}).
		when('/404', {
			templateUrl: 'html/404.html',
			controller: '404Controller'
		}).
		when('/home', {
			templateUrl: 'html/home.html',
			controller: 'homeController'
		}).
		when('/admissao', {
			templateUrl: 'html/admission.html',
			controller: 'homeController'
		}).
		otherwise({
			redirectTo:'/404'
		});
}]);