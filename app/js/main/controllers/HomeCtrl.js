app.controller('HomeCtrl', ['$scope', '$q', function($scope, $q) {
    $scope.checkNumberDefer = function(number) {
        var q = $q.defer();
        //Async call happens here, after which its resolved.
        if (angular.isNumber(number)) {
            q.resolve("Yo this shit is right!")
        } else {
            q.reject("NAN");
        }
        return q.promise;
    }

    $scope.value = "0";
    $scope.numberGucciCheck =  $scope.checkNumberDefer($scope.value);

    $scope.numberGucciCheck.then(function(weGood) {
        $scope.status = weGood;
    }, function(err) {
        $scope.status = err;
    });
}]);
