'use strict';

app.config(function($stateProvider) {
	$stateProvider.state('main', {
		url: '/',
		templateUrl: '/main.html',
		controller: 'MainController',
			// RESOLVE!
	 	resolve: {
		  users: function (User) {
		    return User.findAll();

		  },

		  posts: function (Post, users) {

		    return Post.findAll({});
		  }
		}
	})
})

app.controller('MainController', function($scope, posts, Post) {

	$scope.allPosts = posts;
	console.log('posts: ', posts);
	var dataInJsDataCache = Post.getAll()
	console.log('data in jsdata cache: ', dataInJsDataCache)

	// var postData = Post.getAll()
	// Post.ejectAll() // removes all the posts from the data store
	// Post.inject(postData)  // adds them back
	// console.log(Post.getAll())

})


