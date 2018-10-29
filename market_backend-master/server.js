var express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
var routes = require('./routes.js');
var app = express();
var mongoose = require('mongoose');
const Issue = require('./models/issue');

const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost:27017/farmdb');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!')
})

router.route('/farm').get((req, res) => {
    Issue.find((err, issues) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(issues);
        } 
    })
})

app.get('/', (req, res) => res.send('Hello World!'));

routes(app);

app.use('/', router);

var server = app.listen(3000, function(){
    console.log("app running on port." , server.address().port);
})