var assignment = require('./models/assignment');

module.exports = {
	
	configure : function(app){
		app.post('/api/addassignmentdetails/',function(req,res){assignment.addassignmentdetails(req.body,res);});
		app.get('/api/listdetails/',function(req,res){assignment.listdetails(res);});
		app.get('/api/getdetails/:id',function(req,res){assignment.getdetails(req.params.id,res);});
	}
	
};