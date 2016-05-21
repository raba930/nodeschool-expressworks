var	express = require('express'),
	port = process.argv[2];
	app = express();

app.put('/message/:id', function(req, res) {
	var dateString = require('crypto')
		.createHash('sha1')
		.update(new Date().toDateString() + req.params.id)
		.digest('hex');
	res.end(dateString);
});
app.listen(port);