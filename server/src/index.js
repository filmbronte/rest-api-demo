const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

const PORT = 3030;

mongoose.connect('mongodb://localhost:27017/furnitures')
	.then(() => console.log('DB connected successfully!'))
	.catch(err => console.log('DB error', err.message))

app.use(express.urlencoded({extended: false}));
app.use(express.json()); //application/json -> AJAX requests
app.use(cors());

// app.use((req, res, next) => {
// 	res.setHeader('Access-Control-Allow-Origin', '*');
// 	res.setHeader('Access-Control-Allow-Methods', '*');
// 	res.setHeader('Access-Control-Allow-Headers', '*');
//
// 	next();
// })

app.get('/', (req, res, next) => {
	res.send('Hello from RESTful API!');
})

app.use(routes);

app.listen(PORT, () => { console.log(`Server is listening on port ${PORT} ...`)});
