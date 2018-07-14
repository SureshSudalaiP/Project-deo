var connection = require('../connection');

function assignment(){
	this.addassignmentdetails = function(detailsdata,res){
		console.log(detailsdata);
		 connection.acquire(function(err,con){
			con.query('insert into assignment set ?',detailsdata,function(err,result){
				con.release();
				console.log(err);
				
				
			})
			if(err){
					res.send({status:0,
					message:'Failed'});
				}
				else{
					res.send({status:1,
					message:'Success'});
				}
			
		}) 
	}
	this.listdetails = function(res){
		connection.acquire(function(err,con){
			con.query('select * from assignment order by assid desc',function(err,result){
				con.release();
				res.send(result);
			})
			
		})
	}
	this.getdetails = function(id,res){
		console.log(id);
		connection.acquire(function(err,con){
			con.query('select * from assignment where assid = "'+id+'"',function(err,result){
				con.release();
				res.send(result);
			})
			
		})
		
	}
	connection.acquire(function (err, con) {
            con.query('update enquirymasterdetails set ? where enquirymasterdetails.enquirydetailsid = ?', [editenquirymasterdetails[0], editenquirymasterdetails[0].enquirydetailsid], function (err, result) {
			}
	
}
module.exports = new assignment();