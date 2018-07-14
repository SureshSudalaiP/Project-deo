var myapp = angular.module('Assignmentapp',[]);

myapp.controller('Assignmentcontroller',function($scope,$http,$window){

$scope.addassignmentdetails = function(){
	console.log($scope.detailsdata);
	$http({
		method:'POST',
		url:'http://localhost:8326/api/addassignmentdetails',
		data:$scope.detailsdata[0],
		headers:{'Content-Type':'application/json'}
		
	}).then(function(data){
		if(data.status==200){
		alert("Created Successfully");
		$window.location.reload();
		}
		else {
			alert("Creation Failed");
		$window.location.reload();
		}
	})
	
}

$scope.listdetails = function(){
	$http({
		method:'GET',
		url:'http://localhost:8326/api/listdetails',
		dataType:'jsonp'
		
	}).then(function(response){
		$scope.listdetailsdata = response.data;
		
	})
	
}
	
$scope.getdetails = function(id){

	$http({
		method:'GET',
		url:'http://localhost:8326/api/getdetails/'+id,
		dataType:'jsonp'
	}).then(function(response){
		$scope.getdetailsdata = response.data;
		console.log($scope.getdetailsdata);
		 document.getElementById('update').innerHTML = "Edit";
console.log(document.getElementById('update').innerHTML);
$scope.updatemodel = document.getElementById('update').innerHTML;
		/* $scope.detailsdata[0].name=$scope.getdetailsdata[0].name;
		$scope.detailsdata[0].description=$scope.getdetailsdata[0].description;
		$scope.detailsdata[0].amount=$scope.getdetailsdata[0].amount;  */
		
	})
	
}
$scope.addmodel =function(){
 document.getElementById('add').innerHTML = "Add";
console.log(document.getElementById('add').innerHTML); 	
$scope.updatemodel = document.getElementById('add').innerHTML;
}
/**/$scope.onselectcustomeredit=function(x){
		console.log(x);
		console.log(x.companyid);
		//$scope.enquirymasteradd.partyname=x;
		$scope.getenquirymasterdata[0].companyid=x.companyid;
		$scope.getenquirymasterdata[0].custemailid=x.emailid1;
		$scope.getenquirymasterdata[0].partyname=$scope.getenquirymasterdata[0].partyname.companyname;
		$scope.getenquirymasterdata[0].state=x.state;
		$scope.getenquirymasterdata[0].city=x.city;
		$scope.getenquirymasterdata[0].statecode=x.pincode;
		$scope.getenquirymasterdata[0].contactno=x.mobileno;
		$scope.getenquirymasterdata[0].cpmobileno=x.cpmobileno;
		$scope.getenquirymasterdata[0].concernedperson=x.contactperson;
		$scope.getenquirymasterdata[0].billingaddress=x.address;
		
	}
	$scope.getshippingaddress = function(x)
	{
		console.log(x);
		if(x==true)
		{
			$scope.enquirymasteradd.shippingaddress=$scope.enquirymasteradd.billingaddress;
			$scope.enquirymasteradd.shippingcity=$scope.enquirymasteradd.city;
			$scope.enquirymasteradd.shippingstatecode=$scope.enquirymasteradd.statecode;
			$scope.enquirymasteradd.shippingstate=$scope.enquirymasteradd.state;
		}
		else{
			$scope.enquirymasteradd.shippingaddress="";
			$scope.enquirymasteradd.shippingcity="";
			$scope.enquirymasteradd.shippingstatecode="";
			$scope.enquirymasteradd.shippingstate="";
		}
		
	}
	var eyear=$scope.enquirymasteradd.excepteddispatchdate.getFullYear();
		var emonth=$scope.enquirymasteradd.excepteddispatchdate.getMonth() +1;
		var eday=$scope.enquirymasteradd.excepteddispatchdate.getDate();
		$scope.enquirymasteradd.excepteddispatchdate=eyear+"-"+emonth+"-"+eday;
		   var result = confirm('Are you sure?');
        if (result) {
            $http({
                method: 'DELETE'
				
});