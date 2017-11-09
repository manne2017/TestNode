var http=require("http");
/*http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});	
})*/
var server=http.createServer(my_fun);
	function my_fun(req,res){
		res.writeHead(200,{'Content-Type':'text/html'});
		res.write("Welcome to Server World !");
		res.end();
	}
	server.listen(8080);
	console.log("Server Listening the Port No:8080");
