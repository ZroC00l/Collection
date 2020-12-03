//Task 1
function insertPoints(dbName, colName, xcount, ycount) 
{
	var col = db.getSiblingDB(dbName).getCollection(colName);
	var j = 2,i = 2;
	while (i <= xcount && j <= ycount)
	{
		col.insert({x:i, y:j});
		j += 2;
		i += 2;
	}
print(col.count());
//print(col.find());	
}

function findNearest(dbName, colName, xval, yval)
{
	var col = db.getSiblingDB(dbName).getCollection(colName);
	var res = col.find();
	var minDistance = 999;
	var min = null;
	
	while(res.hasNext())
	{
		var temp = res.next();
		var x = temp.x;
		var y = temp.y;
		var eucld = Math.sqrt(Math.pow((x-xval),2) + Math.pow((y-yval),2));
		if(eucld < minDistance)
		{
			minDistance = eucld;
			min = temp;
		}
	}
	printjson(min);
}

function updateYVals(dbName, colName, threshold,incr)
{
	var col = db.getSiblingDB(dbName).getCollection(colName);
	
	col.updateMany({y: {$gt: threshold}},{$inc : {y : +incr}});
	
	
  
}

function removeIfYless(dbName, colName, threshold)
{
	var col = db.getSiblingDB(dbName).getCollection(colName);
	col.remove({y: {$lt : threshold}});
}

//Task2

function allStatesPopulation(dbName, colName)
{
	var col = db.getSiblingDB(dbName).getCollection(colName);
	
	var res = col.aggregate([{ $group: { _id: "$state", totalPop: { $sum: "$pop" } } },{ $sort: { _id: 1 } }]);

	while(res.hasNext())
	{
		printjson(res.next());
	}
}

function oneStatePopulation(dbName, colName, stateName)
{
	var col = db.getSiblingDB(dbName).getCollection(colName);
	var res = col.aggregate([{ $match: {state: stateName}},{ $group: { _id: "$state", totalPop: { $sum: "$pop" } } }]);
	
	while(res.hasNext())
	{
		printjson(res.next());
	}
}

var totalPop = function(state ,pop) {
	return Array.sum(pop);
};

var mapFunc = function() {
	emit(this.state, this.pop)
};

function allStatesPopulationMR(dbName, colName)
{
	
	var db = connect('127.0.0.1:27017/' + dbName);	
	var collection = db.getCollection(colName);
	var collection2 = db.getCollection("states_population");
	
	collection.mapReduce(mapFunc,totalPop,{out : "states_population"});
	
	collection2.find().forEach( function(doc) 
	{
		print("{state: "+doc._id+", population: "+doc.value+"}");
	});
}

function placesInGrid( dbName, colName, lat1,lat2,lon1,lon2)
{
	var col = db.getSiblingDB(dbName).getCollection(colName);
	var res = col.find({loc: { $geoWithin: { $box:  [ [ lat1, lon1 ], [ lat2, lon2 ] ] } }});
	
	while(res.hasNext())
	{
		printjson(res.next());
	}
}