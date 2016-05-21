var	express = require('express'),
	fs = require('fs'),
	app = express(),
	port = process.argv[2],
	file = process.argv[3];

app.get('/books', function(req, res) {
	var object = undefined;
	fs.readFile(file, 'utf8', function(err, data){
		if (err) throw err;
  		object = data;
		return res.json(JSON.parse(object));
	})
});
app.listen(port);