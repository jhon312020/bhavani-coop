var validationApp = angular.module('validationApp', []);
// create angular controller
validationApp.controller('mainController', function($scope) {

  // function to submit the form after all validation has occurred            
  $scope.submitForm = function(isValid) {
  	$scope.submitted = true;
    // check to make sure the form is completely valid
    if (isValid) {
      alert('Form is a valid data!');
    }

  };
  // Added the dp.change has the field is 
  // not automatically recognized on changing the value
	$scope.start_time = '';
	$('#start_time_picker').on('dp.change', function(e){ 
		$scope.start_time = $('#start_time').val(); 
	});
});
$(function () {
	$('#start_date_picker').datepicker({format: 'M dd, yyyy'});
	$('#town_start_date_picker').datepicker({format: 'M dd, yyyy'});
	$('#town_end_date_picker').datepicker({format: 'M dd, yyyy'});
	$('#start_time_picker').datetimepicker({format: 'LT'});
});


