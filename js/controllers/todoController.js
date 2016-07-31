function todoController($scope) {
	$scope.myInput = "";
    $scope.toDoList = [];

    $scope.addItem = function() {
    	if(!$scope.toDoList.includes($scope.myInput)) {
    		$scope.toDoList.push($scope.myInput);
    		$scope.myInput = "";
    	}
    }

   $scope.deleteItem = function () {
			$scope.toDoList.pop();
		}
}