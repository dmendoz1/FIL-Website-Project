var app = angular.module('santaclarauniversity', ['ngRoute','oc.lazyLoad', 'directives']);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'pages/home.html',
			controller: 'mainController'
		})

		.when('/home', {
			templateUrl: 'pages/home.html',
			controller: 'mainController'
		})

		.when('/projects', {
			templateUrl: 'pages/projects.html',
			controller: 'projectsController'
		})

		.when('/team', {
			templateUrl: 'pages/team.html',
			controller: 'teamController'
		})

		.when('/quiz', {
			templateUrl: 'pages/quiz.html',
			controller: 'quizController'
		})

		.when('/forum', {
			templateUrl: 'pages/forum.html',
			controller: 'forumController'
		})
		.otherwise({
			redirectTo: '/home',
			templateUrl: 'pages/home.html',
			controller: 'mainController'
		});

		$locationProvider.html5Mode(true);
});

app.controller('mainController', ['$scope', function($scope) {
}]);


app.controller('teamController', function($scope) {

});

app.controller('projectsController', function($scope, projectsFactory) {
	$scope.getProjects = function() {
		var projects = projectsFactory.getProjects();
		$scope.projects = projects;
	};
});

app.controller('quizController', function($scope, $ocLazyLoad) {
	$ocLazyLoad.load('javascripts/quiz.js');
});

app.controller('forumController', function($scope, $http, $ocLazyLoad) {
	$scope.forumPost = function(user) {
		if ($("#g-recaptcha-response").val()) {
            $.ajax({
                type: 'POST',
                url: "forum_post.php", // The file we're making the request to
                dataType: 'html',
                async: true,
                data: {
                    captchaResponse: $("#g-recaptcha-response").val(),
                    name: $("#name").val(),
                    title: $("#title").val(),
                    entry: $("#entry").val()  // The generated response from the widget sent as a POST parameter
                },
                success: function () {
                    $('#post-status').css('color', 'green');
					$('#post-status').html('Your post was successfully submitted.');
                },
                error: function () {
					$('#post-status').css('color', '#ff9999');
					$('#post-status').html('Catpcha failed.  Please try again!');
                }
            });
        } else {
            $('#post-status').css('color', '#ff9999');
			$('#post-status').html('Please fill in catpcha!');
        }
     };

	$ocLazyLoad.load('https://www.google.com/recaptcha/api.js');
	
	$http.get("forum_questions.php").success(function(data){
    	$scope.entries = data;
	}).error(function() {
	    $scope.data = "error in fetching previous entries";
	})

});

app.controller('donationsController', function($scope) {
});

app.controller('headerController', function($scope, $location) {
	$scope.isActive = function(viewLocation) {
		return viewLocation === $location.path();
	}
});

