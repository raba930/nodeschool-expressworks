var port = process.argv[2],
	folderPath = process.argv[3],
	express = require('express'),
	app = express();

app.use(require('stylus').middleware(folderPath));
app.use(express.static(folderPath));
app.listen(port);