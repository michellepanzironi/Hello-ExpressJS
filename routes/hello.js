var express = require('express');
var router = express.Router();



function someFunction(arg) {
	return `The answer is ${arg}`
}

let result = someFunction('42')

// retrieve instance of walkthrough with the most recent timestamp
// request by id

const walkthroughInstances = {
	instances : [],
	limit: 10,
};
let lastCreatedId = 0;


// The oldest Walkthrough object/data should be removed to make room new ones when storage is full.

const pruneInstances = () => {
	// walkthroughInstances.instances.shift()

	// get counts of walkthroughIds
	const wtTotals = { 1234: 2, 5555: 3 }
	walkthroughInstances.instances.forEach(instance => {
		if (!wtTotals[instance.walkthroughId]) {
			wtTotals[instance.walkthroughId] = 1
		} else {
			wtTotals += 1
		}
	})

	let highestCountId = 0;
	let highestCountValue = 0;
	for (const [k, v] of Object.entries(wtTotals)) {
		if (v > highestCountValue) {
			highestCountId = k;
			highestCountValue = v;
		};
	}
	
	// const highestTotalId =  // identify highest count  walkthroughId
	// delete the oldest of the highestTotalId 
	// call old func with highestCountId
}

const createWalkthrough = (walkthrough) => {
	newAddition = { id: lastCreatedId + 1, ...walkthrough}

	if (walkthroughInstances.limit === walkthroughInstances.instances.length) {
		pruneInstances()
	}
	walkthroughInstances.instances.push(newAddition);
	lastCreatedId = newAddition.id;
}

let lastAccessed = {};
const getRecentWalkthrough = (walkthroughId) => {
	const matches = walkthroughInstances.instances.filter(w => w.walkthroughId === walkthroughId);
	const lastItem = matches.sort(m => m.id)[matches.length - 1];
	lastAccessed = lastItem;
	return lastItem
}


const getLastAccessed = () => {
	// if (instances) 'This is empty';
	return lastAccessed
};

createWalkthrough({ walkthroughId: 1234, timestamp: new Date() });
createWalkthrough({ walkthroughId: 5555, timestamp: new Date() });
createWalkthrough({ walkthroughId: 5555, timestamp: new Date() });
createWalkthrough({ walkthroughId: 5555, timestamp: new Date() });
createWalkthrough({ walkthroughId: 1234, timestamp: new Date() });
createWalkthrough({ walkthroughId: 1234, timestamp: new Date() });


getRecentWalkthrough(5555)
result = JSON.stringify(getLastAccessed())


router.get('/', function(req, res) {
	res.render('hello', { result: result })
})

module.exports = router;