var app = angular.module('myLibrary', []);

app.directive('navbar', function(){
    return{
        templateUrl: 'templates/navBar.html', 
        restrict: 'E'
    }
});

app.directive('carrusel',function(){
    return{
        templateUrl: 'templates/carrusel.html',
        restrict: 'E'
    }
});
