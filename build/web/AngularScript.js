angular.module('app',[])
        .controller('controller',['$scope','$http',function($scope, $http){
                $scope.setFriend = function(data){
                    $scope.friend = data;
                }
                
                $http.get('http://localhost:8080/EP_Angular_JQuery/api/data')
                .success(function(data){
                    $scope.data = data;
                });
                $scope.predicate = 'age';
                $scope.reverse = true;
                $scope.order = function(predicate){
                    $scope.predicate = predicate;
                    $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
                }
                

        }]);
