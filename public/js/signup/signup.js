'use strict';

app.config(function($stateProvider) {

	$stateProvider.state('signup', {
		url: '/signup',
		templateUrl: 'js/signup/signup.html',
		controller: 'SignupCtrl'
	})
})

// add necessary dependencies here
app.controller('SignupCtrl', function($scope, $state, User) {

  $scope.sendSignup = function(signup){
    User.create(signup).then(function(user){
        $state.go('create', {
          userId: user._id
        })
    })
  }

})