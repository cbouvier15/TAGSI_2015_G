'use strict';

/**
 * @ngdoc function
 * @name app.controller:YachtCtrl
 * @description
 * # YachtCtrl
 * Controller of the app
 */
angular.module('app')
  .controller('YachtCtrl', function ($scope, $stateParams, $http, $state, yachts, SweetAlert) {

    $scope.yachts = yachts;
    $scope.params = $stateParams;

    $scope.buyYacht = function(yacht) {
      console.log(yacht);
      SweetAlert.swal({
       title: "¿Estás seguro?",
       text: "Al comprar el yate " + yacht.model + " se te debitarán U$S" + yacht.price + " de tu cuenta bancaria.",
       type: "warning",
       showCancelButton: true,
       confirmButtonColor: "#DD6B55",
       confirmButtonText: "Si, ¡comprarlo ahora!",
       closeOnConfirm: false}, 
    function(){ 
       yacht.sold = true;
       yacht.photo = null;
       $http.post('/rest/yachts/'+ yacht.id +'/buy/', yacht).then(
        function(res){
          SweetAlert.swal({
            type: "success",
            title: "¡Felicidades!",
            text: "¡Has comprado el yate " + yacht.model + "!"
           }, function(){
            $state.go('main.yachts');
           });
        });
       
    });
    }

    /*
    [{
        'description': 'Lorem ipsum ad his scripta blandit partiendo, eum fastidii accumsan euripidis in, eum liber hendrerit an. Qui ut wisi vocibus suscipiantur, quo dicit ridens inciderint id. Quo mundi lobortis reformidans eu, legimus senserit definiebas an eos.',
        'sold': false
    },
    {
        'id': 3,
        'model': 'YeoMan',
        'price': 123450,
        'description': 'Lorem ipsum ad his scripta blandit partiendo, eum fastidii accumsan euripidis in, eum liber hendrerit an. Qui ut wisi vocibus suscipiantur, quo dicit ridens inciderint id. Quo mundi lobortis reformidans eu, legimus senserit definiebas an eos.',
        'sold': false
    },
    {
        'id': 4,
        'model': 'Pioneer',
        'price': 100223,
        'description': 'Lorem ipsum ad his scripta blandit partiendo, eum fastidii accumsan euripidis in, eum liber hendrerit an. Qui ut wisi vocibus suscipiantur, quo dicit ridens inciderint id. Quo mundi lobortis reformidans eu, legimus senserit definiebas an eos.',
        'sold': true
    },
    {
        'id': 5,
        'model': 'Grunt',
        'price': 99999,
        'description': 'Lorem ipsum ad his scripta blandit partiendo, eum fastidii accumsan euripidis in, eum liber hendrerit an. Qui ut wisi vocibus suscipiantur, quo dicit ridens inciderint id. Quo mundi lobortis reformidans eu, legimus senserit definiebas an eos.',
        'sold': true
    },
    {
        'id': 6,
        'model': 'Navigator C500',
        'price': 130000,
        'description': 'Lorem ipsum ad his scripta blandit partiendo, eum fastidii accumsan euripidis in, eum liber hendrerit an. Qui ut wisi vocibus suscipiantur, quo dicit ridens inciderint id. Quo mundi lobortis reformidans eu, legimus senserit definiebas an eos.',
        'sold': false
    },
    {
        'id': 7,
        'model': 'Avenger M112',
        'price': 200000,
        'description': 'Lorem ipsum ad his scripta blandit partiendo, eum fastidii accumsan euripidis in, eum liber hendrerit an. Qui ut wisi vocibus suscipiantur, quo dicit ridens inciderint id. Quo mundi lobortis reformidans eu, legimus senserit definiebas an eos.',
        'sold': false
    },
    {
        'id': 8,
        'model': 'Scott R5',
        'price': 100223,
        'description': 'Lorem ipsum ad his scripta blandit partiendo, eum fastidii accumsan euripidis in, eum liber hendrerit an. Qui ut wisi vocibus suscipiantur, quo dicit ridens inciderint id. Quo mundi lobortis reformidans eu, legimus senserit definiebas an eos.',
        'sold': true
    },
    {
        'id': 9,
        'model': 'Yamaha100',
        'price': 99999,
        'description': 'Lorem ipsum ad his scripta blandit partiendo, eum fastidii accumsan euripidis in, eum liber hendrerit an. Qui ut wisi vocibus suscipiantur, quo dicit ridens inciderint id. Quo mundi lobortis reformidans eu, legimus senserit definiebas an eos.',
        'sold': true
    },
    {
        'id': 10,
        'model': 'Indicator 10C50',
        'price': 130000,
        'description': 'Lorem ipsum ad his scripta blandit partiendo, eum fastidii accumsan euripidis in, eum liber hendrerit an. Qui ut wisi vocibus suscipiantur, quo dicit ridens inciderint id. Quo mundi lobortis reformidans eu, legimus senserit definiebas an eos.',
        'sold': false
    },
    {
        'id': 11,
        'model': 'MontesRun 10k0m',
        'price': 200000,
        'description': 'Lorem ipsum ad his scripta blandit partiendo, eum fastidii accumsan euripidis in, eum liber hendrerit an. Qui ut wisi vocibus suscipiantur, quo dicit ridens inciderint id. Quo mundi lobortis reformidans eu, legimus senserit definiebas an eos.',
        'sold': false
    }
  ];
  */

  });
