app.controller('homeController', ['$scope', '$http','$sce', function ($scope, $http, $sce) {
    $http.get('services/get_sounds.php')
    .success(function(data) {
        $scope.files = data;
        console.log(data);
    });

    $scope.getUrl = function(sound)
    {
        return "sounds/"+sound;
    }

    $scope.play = function(idPlayer) 
    {
        var player = document.querySelector('#' + 'player' + idPlayer);
        if (player.paused) {
            player.play();
        } else {
            player.pause();
        }
    }

}]);

