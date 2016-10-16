/**
 * Simple tests for all DB tests
 */
//process.env.DB_URI = "mongodb://acloudfan:acloudfan@ds035766.mlab.com:35766/acmetravel" /**provide url**/
process.env.DB_URI = "SET THIS TO DB URI"
process.env.DB_USER = "SET THE DB USER"
process.env.DB_PASSWORD = "SET THE DB PASSWORD" 

//Test#1  Insert the Vacation data
var db = require('../db/Vacations')
var data = require('../data/Vacations')


// Save a single row
db.save(data.SingleRow,function(err, saved){
    if(err){
        console.log("Failed single row save")
        //console.log(err)
        //process.exit(1)
    } else {
        console.log("Success - Save single row - %s",saved.name)
    }
});

// Save multiple rows
db.saveMany(data.MultipleRows,function(err, docs){
    if(err){
        console.log("Failed multiple row insert")
        //console.log(err)
        //process.exit(1)
    } else {
        console.log("Success - Multiple rows inserted - %d",docs.length)
    }
});

// Select vacations with some criteria
var selectCriteria = {validTill : {$gt : new Date()}}
db.select(selectCriteria, function(err, data){
    if(err){
        console.log("Failed to get vacations : %s",criteria)
        console.log(err)
    } else {
        console.log("Successfully selected %d documents for %s", data.length, JSON.stringify(selectCriteria))
    }
});

// Update the vacations
var updateCriteria = {name:'BAHAMAS1000'}
var doc = {description:'UPDATED Desc for TESTING'}
db.update(updateCriteria,doc,function(err, doc){
    if(err){
        console.log("Failed to get update")
        console.log(err)
    } else {
        console.log("Successfully updated with criteria %s", updateCriteria)
    }
})