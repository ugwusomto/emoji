var app = angular.module("Platzi", []);
app.controller("BaseCtrl", function($scope, $http) {
  //   $http.get("/emoji").then(function(response) {
  //     console.log(response.data);
  //     $scope.emojis = response.data;
  //   });

  // if we want it to be in real time we can ditch the angular $http na use sails js io.socket
  io.socket.get("/emoji", function(data) {
    console.log(data);
    $scope.emojis = data;
    $scope.$apply();
  });

  // When workiing with blueprints sails sails.io sends us events when there is a change in the data
  // base and we update our user interface
  //   io.socket.on("emoji", function(event) {
  //     switch (event.verb) {
  //       case "created":
  //         $scope.emojis.push(event.data);
  //         $scope.$apply();
  //         break;
  //     }
});
// });
