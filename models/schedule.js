 var mongoose = require('mongoose')

var ScheduleSchema = new mongoose.Schema({
	League: {type: mongoose.Schema.Types.ObjectId, ref: 'League'},
	team1: {type: mongoose.Schema.Types.ObjectId, ref: 'Team'},
	team2: {type: mongoose.Schema.Types.ObjectId, ref: 'team'},
	date: Date, // date with time
	// location: {latitude & longitude} //google maps
});

mongoose.model('Schedule', ScheduleSchema);