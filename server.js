var express = require("express");
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req,res, next) {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
	next();
});

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/anotes');
var AnoteSchema = new mongoose.Schema({
 desc: { type:String, required: true, minlength:3, maxlength:50},
 created_on: { type:Date, default:Date.now() }
});
mongoose.model('Anote', AnoteSchema);
var Anote = mongoose.model('Anote');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public/dist')));

app.get('/notes', function(req, res){
	console.log('app.get /notes');
	Anote.find({}, function(err, notes){
		if(err){
			console.log('***app.get /notes Anote.find:' + err);
		} else {
			return res.json(notes);
		}
	});
});

app.post('/notes', function(req,res){
	var note = new Anote( { desc:req.body.desc } );
	note.save(function(err){
		if(err){
			console.log('***app.post /notes note.save:' + err);
		} else {
			console.log('successfully added ' + note.desc);
			Anote.find({}, function (err,notes){
				if(err){
				console.log('***app.get /notes Anote.find:' + err);
				} else {
					return res.json(notes);
				}
			});
		}
	});
});

app.listen(8000, function() {
	console.log("listening on port 8000");
});