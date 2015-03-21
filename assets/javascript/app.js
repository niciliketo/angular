(function() {
	var app = angular.module ('store', []);
	app.controller('StoreController', ['$http', function($http){
		//this.products = gems;
    var store = this;
    store.products = [];
    $http.get('./assets/json/products.json').success(function(data){
      console.log(data);
      store.products = data;
      debugger;
    });
	}]);

  app.controller('PanelController', function(){
    this.tab = 1;
    this.selectTab = function(setTab){
      this.tab = setTab;
    };
    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };
  });

  app.controller("ReviewController", function(){
    this.review = {};
    this.addReview = function(product){
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  app.directive('productTitle', function(){
    return {
      restrict: 'E',
      templateUrl: 'product-title.html'
    };
  });

  app.directive('productPanels', function(){
    return {
      restrict: 'E',
      templateUrl: 'product-panel.html',
      controller: function(){
      },
      controllerAs: 'panels'
    };
  });

	var gems = [
    {
      name: "Dodecahedron",
      price: 2.95,
      description: "Some genms have hidden qualities behind their shine...",
      canPurchase: true,
      soldOut: false,
      images: [
        {
          full: 'Dodecahedron.jpg',
          thumb: 'Dodecahedron-thumb.jpg'
        },
        {
          full: 'Dodecahedron2.jpg',
          thumb: 'Dodecahedron2-thumb.jpg'
        }
      ],
      reviews: [
        {
          stars: 5,
          body: "I love this product",
          author: "jbloggs@msf.com"
        },
        {
          stars: 1,
          body: "Sucks",
          author: "jbloggs@hater.com"
        }
      ]
    },
    {
      name: "Pentagonal Gem",
      price: 5.95,
      description: "Penta... what",
      canPurchase: false,
      soldOut: false
    }
	];

})();