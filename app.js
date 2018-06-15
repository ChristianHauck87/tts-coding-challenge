var fs = require('fs');

'use strict';

let jsonData = require('./data/data.json');

	function checkbelowthirty (object) {return object.age <= 30;}
	function checkthirtyoneandthirtyfive (object) {return object.age > 30 && object.age <=35;}
	function checkthirtysixandfourty (object) {return object.age > 35 && object.age <=40;}
	function fourtyoneandfourtyfive (object) {return object.age > 40 && object.age <=45;}
	function checkfourtysixandfifty (object) {return object.age > 45 && object.age <=50;}
	function checkolderfifty (object) {return object.age > 50;}

	    belowthirty = jsonData.filter(checkbelowthirty);
	    betweenthirtyoneandthirtyfive = jsonData.filter(checkthirtyoneandthirtyfive);
	    betweenthirtysixandfourty = jsonData.filter(checkthirtysixandfourty);
	    betweenfourtyoneandfourtyfive = jsonData.filter(fourtyoneandfourtyfive);
	    betweenfourtysixandfifty = jsonData.filter(checkfourtysixandfifty);
	    olderfifty = jsonData.filter(checkolderfifty);

    console.log('Es gibt ' + belowthirty.length + ' Studenten die jünger als 30 sind.')
    console.log('Es gibt ' + betweenthirtyoneandthirtyfive.length + ' Studenten zwischen 31 und 35 sind.')
    console.log('Es gibt ' + betweenthirtysixandfourty.length + ' Studenten zwischen 36 und 40 sind.')
    console.log('Es gibt ' + betweenfourtyoneandfourtyfive.length + ' Studenten zwischen 41 und 45 sind.')
    console.log('Es gibt ' + betweenfourtysixandfifty.length + ' Studenten zwischen 46 und 50 sind.')
    console.log('Es gibt ' + olderfifty.length + ' Studenten die älter als 50 sind.')

    studentsByAgeCohorts = [belowthirty, betweenthirtyoneandthirtyfive, betweenthirtysixandfourty, betweenfourtyoneandfourtyfive, betweenfourtysixandfifty, olderfifty];
    studentsCountByAgeCohorts = [belowthirty.length, betweenthirtyoneandthirtyfive.length, betweenthirtysixandfourty.length, betweenfourtyoneandfourtyfive.length, betweenfourtysixandfifty.length, olderfifty.length];
    console.log(studentsCountByAgeCohorts)




