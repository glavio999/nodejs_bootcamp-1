app.controller('pageCtrl', ['$scope', function($scope){
    //définir un titre par défaut pour mon site (balise <title>)
    $scope.pageTitle = "Mon site à moi - xxxtitre de la page en coursxxx";
}]);


// Application d'affichage de mon restaurant
var restaurantsApp = angular.module('restaurantsApp', ['ngResource']);

restaurantsApp.controller("ListController", ['$scope','$http', '$resource', function($scope, $http, $resource) {
    //modifier le <title> de mon HTLM, en ciblant le $scope du controller parent (pageCtrl)
    $scope.$parent.pageTitle = "Liste des restaurants";

    // $http.get("js/data.json").success(function(data){
    //     $scope.restaurants = data;
    // });
    // Appel à la base de données pour récupérer les restaurants
    var Restos = $resource('http://localhost/api/restaurants');

    function refresh() {
        Restos.query(function(data) {
            $scope.restaurants = data;
        });
    }

    refresh();


    //définir la valeur par défaut de mon select "restaurantOrder" qui se trouve dans l'html, pour que ça affiche par défaut "nom" dans le select.
    $scope.restaurantOrder = 'name';



    //Mise en place du formulaire d'ajout de restaurant
    $scope.formHidden = false;
    $scope.showForm = function() {
      $scope.formHidden = true;
    }

    $scope.types = [];
    $scope.removeType = function(index) {
        $scope.types.splice(index, 1);
    }

    $scope.addType = function() {
        $scope.types.push($scope.newResto);
        $scope.newResto = "";
    }

    $scope.addResto = function(resto) {

        resto.types = $scope.types;
        console.log(resto);
    }

}]);

restaurantsApp.controller("DetailsController", ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    //modifier le <title> de mon HTLM, en ciblant le $scope du controller parent (pageCtrl)
    $scope.$parent.pageTitle = "Détail du restaurant";


    $http.get("js/data.json").success(function(data){
        $scope.restaurants = data;

        $scope.indexResto = $routeParams.itemId;

        if ($routeParams.itemId > 0) { // si l'index de la page sur laquelle je suis est plus grand que 0 (càd si ce n'est pas le premier)
            $scope.prevItem = Number($routeParams.itemId) - 1; // alors le btn "<" renvoie vers l'index actuel - 1
        } else { // sinon (donc, si c'est le premier)
            $scope.prevItem = $scope.restaurants.length - 1; // alors le btn "<" renvoie vers le dernier élément du tableau
        }

        if ($routeParams.itemId < $scope.restaurants.length -1) { // si l'index de la page sur laquelle je suis est plus petit que le dernier index du tableau (donc si ce n'est pas le dernier)
            $scope.nextItem = Number($routeParams.itemId) + 1; //alors le btn ">" renvoie vers l'index actuel + 1
        } else { // sinon (donc, si c'est le dernier)
            $scope.nextItem = 0; // alors le btn ">" renvoie vers le premier élément du tableau càd 0
        }

    });




}]);