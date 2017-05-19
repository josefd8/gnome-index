var app = angular.module("gnome-explorer", [])


app.controller("main-controller", function($scope, $http) {

    $scope.gnomes = [];
    $scope.gnomename = "";
    $scope.error = false;
    getGnomesFromRemote();

    function getGnomesFromRemote() {
        $http.get("https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json")
            .success(function(data) {
                var gnomes = data.Brastlewark;
                gnomes.forEach(function(gnome) {
                    gnome.isVisible = true;
                })

                $scope.gnomes = gnomes;
                $scope.error = false;
                countVisible();
            })
            .error(function(err) {
                $scope.error = true;
                $scope.errorMessage = "Gnome list could not be retrieved! :("
            })
    }

    $scope.show_gnome_info = function(gnome) {
        $scope.selectedGnome = gnome;
    }

    $scope.search_gnome = function() {

        if ($scope.gnomename.length >= 3) {
            var temp = 0;

            $scope.gnomes.forEach(function(gnome) {

                if (gnome.name.indexOf($scope.gnomename) >= 0) {
                    $scope.gnomes[temp].isVisible = true;
                } else {
                    $scope.gnomes[temp].isVisible = false;
                }

                temp = temp + 1
            })

        } else {
            var temp = 0;
            $scope.gnomes.forEach(function(gnome) {

                if (gnome.name.indexOf($scope.gnomename) == 0) {
                    $scope.gnomes[temp].isVisible = true;
                }

                temp = temp + 1
            })
        }

        countVisible();
    }

    function countVisible() {

        var count = 0;
        $scope.gnomes.forEach(function(gnome) {
            if (gnome.isVisible == true) {
                count = count + 1;
            }
        })

        $scope.visibleGnomes = count;

    }

})
