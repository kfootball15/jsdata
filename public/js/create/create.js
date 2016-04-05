'use strict'; 

app.config(function($stateProvider) {
	$stateProvider.state('create', {
		url: '/create/:userId',
		templateUrl: 'js/create/create.html',
		controller: 'CreateCtrl',
		// resolve: {
		// 	author: function(User, $state){
		// 		User.find($state.userId).then(function(user){console.log(2, user)})
		// 	}
		// }
		// params: {
		// 	userId: null
		// }
		/*
				add a resolve block that has an author function which 
				users $stateParams to retrieve the author object
		*/
	})
})

// add necessary dependencies here 
app.controller('CreateCtrl', function($scope, $stateParams, User, $state, Post) {

	$scope.previewTrue = false;

	$scope.preview = function() {
		$scope.previewTrue = !$scope.previewTrue;
	}

	User.find($stateParams.userId)
	.then(function(user){
		$scope.author = user
		$scope.newPost = {
			author: user._id,
			username: user.username
		}
		console.log(1, $scope.author);
	})


	$scope.submit= function(){
		Post.create({
			title: $scope.newPost.title,
			body: $scope.newPost.body,
			author: $scope.newPost.author
		})
		.then(function(post){
			$state.go('post', {
	          postId: post._id
	        })
		})
	}


	console.log(1, $stateParams.userId);

	/*

	TODOS: 
	1 - create the object that the form can use via ng-model
  2 - create a function that 
	 		a) persists the ng-modeled post object 
			b) changes the state to 'main'  

	*/
	
}) 