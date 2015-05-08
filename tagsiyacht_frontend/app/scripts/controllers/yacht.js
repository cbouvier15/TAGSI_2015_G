'use strict';

/**
 * @ngdoc function
 * @name app.controller:YachtCtrl
 * @description
 * # YachtCtrl
 * Controller of the app
 */
angular.module('app')
  .controller('YachtCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.yachts1 = [
	    {
	        'id': 1,
	        'model': 'RPPPIS',
	        'price': 1000,
	        'description': 'Lorem ipsum ad his scripta blandit partiendo, eum fastidii accumsan euripidis in, eum liber hendrerit an. Qui ut wisi vocibus suscipiantur, quo dicit ridens inciderint id. Quo mundi lobortis reformidans eu, legimus senserit definiebas an eos.',
	        'sold': false
	    },
	    {
	        'id': 2,
	        'model': 'James',
	        'price': 123456,
	        'description': 'Lorem ipsum ad his scripta blandit partiendo, eum fastidii accumsan euripidis in, eum liber hendrerit an. Qui ut wisi vocibus suscipiantur, quo dicit ridens inciderint id. Quo mundi lobortis reformidans eu, legimus senserit definiebas an eos.',
	        'sold': false
	    },
	    {
	        'id': 3,
	        'model': 'Samsung',
	        'price': 10,
	        'description': 'Lorem ipsum ad his scripta blandit partiendo, eum fastidii accumsan euripidis in, eum liber hendrerit an. Qui ut wisi vocibus suscipiantur, quo dicit ridens inciderint id. Quo mundi lobortis reformidans eu, legimus senserit definiebas an eos.',
	        'sold': false
	    },
	    {
	        'id': 4,
	        'model': 'YeoMan',
	        'price': 123450,
	        'description': 'Lorem ipsum ad his scripta blandit partiendo, eum fastidii accumsan euripidis in, eum liber hendrerit an. Qui ut wisi vocibus suscipiantur, quo dicit ridens inciderint id. Quo mundi lobortis reformidans eu, legimus senserit definiebas an eos.',
	        'sold': false
	    }
    ];

    $scope.yachts2 = [
    	{
	        'id': 5,
	        'model': 'Pioneer',
	        'price': 100223,
	        'description': 'Lorem ipsum ad his scripta blandit partiendo, eum fastidii accumsan euripidis in, eum liber hendrerit an. Qui ut wisi vocibus suscipiantur, quo dicit ridens inciderint id. Quo mundi lobortis reformidans eu, legimus senserit definiebas an eos.',
	        'sold': true
	    },
	    {
	        'id': 6,
	        'model': 'Grunt',
	        'price': 99999,
	        'description': 'Lorem ipsum ad his scripta blandit partiendo, eum fastidii accumsan euripidis in, eum liber hendrerit an. Qui ut wisi vocibus suscipiantur, quo dicit ridens inciderint id. Quo mundi lobortis reformidans eu, legimus senserit definiebas an eos.',
	        'sold': true
	    },
	    {
	        'id': 7,
	        'model': 'Navigator C500',
	        'price': 130000,
	        'description': 'Lorem ipsum ad his scripta blandit partiendo, eum fastidii accumsan euripidis in, eum liber hendrerit an. Qui ut wisi vocibus suscipiantur, quo dicit ridens inciderint id. Quo mundi lobortis reformidans eu, legimus senserit definiebas an eos.',
	        'sold': false
	    },
	    {
	        'id': 8,
	        'model': 'Avenger M112',
	        'price': 200000,
	        'description': 'Lorem ipsum ad his scripta blandit partiendo, eum fastidii accumsan euripidis in, eum liber hendrerit an. Qui ut wisi vocibus suscipiantur, quo dicit ridens inciderint id. Quo mundi lobortis reformidans eu, legimus senserit definiebas an eos.',
	        'sold': false
	    }
	];

	$scope.yachts3 = [
    	{
	        'id': 9,
	        'model': 'Scott R5',
	        'price': 100223,
	        'description': 'Lorem ipsum ad his scripta blandit partiendo, eum fastidii accumsan euripidis in, eum liber hendrerit an. Qui ut wisi vocibus suscipiantur, quo dicit ridens inciderint id. Quo mundi lobortis reformidans eu, legimus senserit definiebas an eos.',
	        'sold': true
	    },
	    {
	        'id': 10,
	        'model': 'Yamaha100',
	        'price': 99999,
	        'description': 'Lorem ipsum ad his scripta blandit partiendo, eum fastidii accumsan euripidis in, eum liber hendrerit an. Qui ut wisi vocibus suscipiantur, quo dicit ridens inciderint id. Quo mundi lobortis reformidans eu, legimus senserit definiebas an eos.',
	        'sold': true
	    },
	    {
	        'id': 11,
	        'model': 'Indicator 10C50',
	        'price': 130000,
	        'description': 'Lorem ipsum ad his scripta blandit partiendo, eum fastidii accumsan euripidis in, eum liber hendrerit an. Qui ut wisi vocibus suscipiantur, quo dicit ridens inciderint id. Quo mundi lobortis reformidans eu, legimus senserit definiebas an eos.',
	        'sold': false
	    },
	    {
	        'id': 12,
	        'model': 'MontesRun 10k0m',
	        'price': 200000,
	        'description': 'Lorem ipsum ad his scripta blandit partiendo, eum fastidii accumsan euripidis in, eum liber hendrerit an. Qui ut wisi vocibus suscipiantur, quo dicit ridens inciderint id. Quo mundi lobortis reformidans eu, legimus senserit definiebas an eos.',
	        'sold': false
	    }
	];


  });
