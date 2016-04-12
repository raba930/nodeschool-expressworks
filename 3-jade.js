var express = require('express'),
	app = express(),
	template = process.argv[3];

app.set('view engine', 'jade');
app.get('/home', function(req, res) {
  res.render(template, { date: new Date().toDateString() });
})
app.listen(process.argv[2]);
