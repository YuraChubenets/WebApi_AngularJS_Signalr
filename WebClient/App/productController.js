
angular.module("restApp", ["ngMaterial"])
              .controller("productController", ["$scope", "$http", function ($scope, $http) {

                  $scope.isProgress = true;

                  $http.get("http://localhost:60780/api/products").success(function (response) {
                      // $scope.result = response;
                      //mock
                      $scope.result = [
                                            { id: '1', Name: 'Product 1', Price: 110, Quantity: 2 },
                                            { id: '2', Name: 'Product 2', Price: 110, Quantity: 8 },
                                            { id: '3', Name: 'Product 3', Price: 120, Quantity: 5 },
                                            { id: '4', Name: 'Product 4', Price: 10, Quantity: 3 },
                                            { id: '5', Name: 'Product 5', Price: 170, Quantity: 2 },
                                            { id: '6', Name: 'Product 6', Price: 160, Quantity: 1 },
                                            { id: '7', Name: 'Product 7', Price: 45, Quantity: 7 }
                      ];
                      $scope.isProgress = false;
                  });
                  ///------------DELETE---------------
                  $scope.del = function (id) {
                      var answer = confirm("Are you sure?");
                      if (answer === true) {
                          var index = getSelectIndex(id);
                          $scope.result.splice(index, 1);
                      }
                  };


                  ///-----ADD
                  $scope.add = function () {
                      $scope.result.push({
                          id: $scope.id,
                          Name: $scope.name,
                          Price: $scope.price,
                          Quantity: $scope.quantity
                      });
                      $scope.id = '';
                      $scope.name = '';
                      $scope.price = '';
                      $scope.quantity = '';
                  }

                  ///-------------EDIT------
                  $scope.edit = function (id) {
                      var index = getSelectIndex($scope.id);
                      $scope.result[index].Name = $scope.name;
                      $scope.result[index].Price = $scope.price;
                      $scope.result[index].Quantity = $scope.quantity;
                  }

                  $scope.selectEdit = function (id) {
                      var index = getSelectIndex(id);
                      var item = $scope.result[index];
                      $scope.id = item.id;
                      $scope.name = item.Name;
                      $scope.price = item.Price;
                      $scope.quantity = item.Quantity;
                  }

                  ///-----------------------------
                  function getSelectIndex(id) {
                      for (var i = 0; i < $scope.result.length; i++)
                          if ($scope.result[i].id === id) {
                              return i;
                          }
                      return -1;
                  };

              }]);
