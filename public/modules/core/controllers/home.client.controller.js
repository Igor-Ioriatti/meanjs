'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
		/*
		$scope.items = ['modules/core/img/slide/1.jpg',
						'modules/core/img/slide/2.jpg',
						'modules/core/img/slide/3.jpg'
			];*/
		 $scope.myInterval = 5000;
		  var slides = $scope.slides = [];
		  var nSlides = 8;
		  $scope.addSlide = function() {
		    var newWidth = slides.length + 1;
		    
		    slides.push({
	    	image: 'modules/core/img/slide/' + newWidth + '.png',
		      text: ['Spot','Spot','spot'][slides.length % nSlides] + ' ' +
		        ['1', '2', '3'][slides.length % nSlides] + '' +
		        ['x', 'y', 'z'][slides.length % nSlides]
		    });
		  };
		  for (var i=0; i<nSlides; i++) {
		    $scope.addSlide();
		  }

	}
	//ng-style="{'background-image': 'url(' + modules/core/img/slide/1.jpg + ')'}" class="bgimage ng-binding" style="background-image: url(modules/core/img/slide/1.jpg);
]);

