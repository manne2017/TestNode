var http=require("http");
var first_module=require("./first_module");
var db_config=require("./db_config");
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.write(first_module.my_fun()+\n);
	res.write(db_config.db_details.db_user+ "...." + db_config.db_details.db_password+ "...." +db_config.db_details.connectionlimit+ "...." +db_config.db_details.debug);
	res.end();
});
listen(8080);
console.log("Server Listening the Port No.8080");
