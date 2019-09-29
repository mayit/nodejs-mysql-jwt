/* package */
const express = require('express')
// const mysql = require('mysql')
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/users'); 

const app = express()
app.use(bodyParser.urlencoded());
app.use(passport.initialize()); require('./config/passport')(passport);
app.use(function (req, res, next) {
 //    ["http://localhost:3001", "http://localhost:3000"].map(function(domain) {
 //  		res.setHeader( "Access-Control-Allow-Origin", domain );
	// });
    res.setHeader( "Access-Control-Allow-Origin", "*" );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

const port = 9000


// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "node_mysql"
// });

// db.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     db.query("SELECT * FROM users", function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
//     });
// });
// app.get('/', (req, res) => {
//     db.query("SELECT * FROM users", 
//     function (err, result) {
//         if (err) throw err;
//         res.json(result);
//     });
// });

// app.get('/user', (req, res) => res.send('5555'))
// app.get('/main/:id', (req, res) => 
// 	res.send(req.params.id)
// )

app.use('/api/users', users);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))