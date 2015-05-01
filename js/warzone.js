var warzoneApp = angular.module("warzoneApp", ["ngRoute", "angularMoment"]);

warzoneApp.filter('capitalizeFirst', function() {
    return function(input, scope) {
        return input.substring(0,1).toUpperCase()+input.substring(1);
    }
});

function randomString(n) { //{{{
    var out = "";
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for(var i=0; i < n; i++)
        out += chars.charAt(Math.floor(Math.random() * chars.length));

    return out;
}
//}}}

warzoneApp.config(['$routeProvider', function($routeProvider) { //{{{
    $routeProvider
	.when('/help', 		{ templateUrl : 'pages/help/index.html' })
	.when('/help/account', 	{ templateUrl : 'pages/help/account.html' })
	.when('/help/overview', { templateUrl : 'pages/help/overview.html' })
	.when('/help/register', { templateUrl : 'pages/help/register.html' })
	.when('/help/configure-browser', { templateUrl : 'pages/help/configure-browser.html' })
	.when('/help/configure-openvpn', { templateUrl : 'pages/help/configure-openvpn.html' })
	.when('/help/connecting-vulnhosts', { templateUrl : 'pages/help/connecting-vulnhosts.html' })
	.when('/profile/:username', {
		templateUrl : 'pages/profile.html',
		controller  : 'profileController'
	})
	.otherwise({ redirectTo: '/overview' });
}]);
//}}}
warzoneApp.controller("registerController", ["$scope", "$location", "$http", function($scope, $location, $http) { //{{{
    $scope.accountTypes = ["client", "router"];
    $scope.account = {};
    $scope.account.type = "client";
    $scope.setAccountType = function(x) {
	$scope.account.type = x;
    };
    $scope.updateCSR = function() {
	var file = $("#selectCSRFile").get(0).files[0];
	var reader = new FileReader();

	reader.onload = function(e) {
	    var filecontent = reader.result;
	    if(filecontent.indexOf("-----BEGIN CERTIFICATE REQUEST-----") == 0) {
		$scope.account.csr = filecontent;
		$scope.error = "This file looks like a CSR";
	    } else {
		$scope.account.csr = "";
		$scope.error = "This file is not a CSR";
	    }
	    // since we're going through jQuery, we need to notify AngularJS that something changed while it wasn't looking
	    $scope.$apply();
	}

	reader.readAsText(file);  
    };
    // this is a dirty hack to trigger an update when a (new) file is selected. AngularJS doesn't support onChange for
    // inputs of type "file" yet, so using jQuery to register a handler
    $('#registrationModal').on('shown.bs.modal', function (e) {
	$("#selectCSRFile").change($scope.updateCSR);
    });
    $scope.register = function(x) { 
	    var token = randomString(32);
	    $http.post('/s/register', {
	    		"username": $scope.account.username, 
			"type": $scope.account.type, 
			"csr": $scope.account.csr,
			"CSRFToken": token,
			}, {headers: {'X-CSRF-Token': token}})
		.success(function(data) {
		    if(data.success) {
		        // wait until modal is closed before going elsewhere
			var username = $scope.account.username;
		        $('#registrationModal').on("hidden.bs.modal", function() {
			    $location.path("/profile/" + username);
			    $scope.$apply();
			});
		        $('#registrationModal').modal("hide");
		    } else {
			$scope.error = data.msg;
		    }
		})
		.error(function(data) {
		    alert("error");
		})
    };
}]);
//}}}
warzoneApp.controller("profileController", ["$scope", "$routeParams", "$http", //{{{
	function($scope, $routeParams, $http) {
	    $http.get('/s/profile/' + $routeParams.username).
		success(function(data) {
		    data.cert_url = "/s/cert/"+data.name;
		    $scope.data = data;
		})
	}
]);
//}}}
warzoneApp.controller("retrieveUsernameController", ["$scope", "$http", "$window", "$location", //{{{
	function($scope, $http, $window, $location) {
	  $window.addEventListener('message', function(e) {
	      console.log(e.data);
	      var username = e.data.username;
	      $('#registrationModal').on("hidden.bs.modal", function() {
                            $location.path("/profile/" + username);
                            $scope.$apply();
                        });
	      $('#registrationModal').modal("hide");
	  });
	  $http.get('/s/whoami').
	    success(function(data) {
	      data.profile_url = "/#/profile/"+data.name;
	      $scope.user = data;
	    })
	}
]);
//}}}

