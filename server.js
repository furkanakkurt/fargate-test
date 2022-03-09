const express = require('express');


const app = express();

app.get('/', (req, res) => {
	res.send('Hello world, first image');
})

app.get('/health', (req, res) => {
	res.status(200);
	res.send('healthy');
})

app.listen(8080, () => {
	console.log('listening on 8080');
})
