const express = require('express'); // importing expressjs
const expressHandlebars = require('express-handlebars'); // importing express-handlebars	
const app = express();

// Setting up and configure Handlebars view engine
app.engine('handlebars', expressHandlebars({
	defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');

const port = process.env.PORT || 3000; // set the server to ping at port 3000	

// Adding Custom Routes

// Home
app.get('/', (req, res) => res.render('home'));

// About
app.get('/about', (req, res) => res.render('about'));

// custom 404 page
app.use((req, res) => {
res.status(404);
res.render('404');
});
// custom 500 page
app.use((err, req, res, next) => {
console.error(err.message);
res.status(500);
res.render('500');
});

// App listening

app.listen(port, () => {
	console.log(`Express Server Started & Running at http://localhost:${port} or http://127.0.0.1:${port}`, '\nPress CTRL+C to breake');
});
