const cors = require('cors')
const express = require('express')


const app = express();
app.use(cors());
app.options('*', cors());

const port = 8080;

app.get('/', (req, res, next) => {
	res.send('node express api <br> by Bernardo');
});


app.get('/header', (req, res, next) => {
  res.sendfile("assets/header.json");
});

app.listen(port,  () => 
	console.log('listening on port ' + port
));
