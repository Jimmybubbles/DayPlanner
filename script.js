//global variables
var localTime = document.getElementById("currentDay");
var timeblocks = document.getElementById("timeblocks");

// create a function that will get the time from the momentjs api and then serve it to the screen.
function getTime(){
    var Datetime = moment().format('MMMM Do YYYY, h:mm:ss a');
    localTime.innerHTML = Datetime;
    localTime.innerHTML = "Current datetime " + Datetime;
}
setInterval(getTime, 1000);

//THEN I am presented with timeblocks for standard business hours

// the time blocks should be in list format so have to look at jquery and array the times
// make array of timeblocks

var timeBlocksArr = [
    "9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm",
]

// now need to loop the array to dynamically populate the screen with the class'
GenerateTimeblocks()
function GenerateTimeblocks(){
    timeblocks.innerHTML = "";

    for (i = 0; i < timeBlocksArr.length; i++) {
    // make a row for each iteration
    var RowHours = timeBlocksArr[i];

    //need to create elements for the html
    var row = document.createElement("div");
    // add the css class
    row.classList.add("row", "past");
    timeblocks.appendChild(row);

    //need to add the iterations to the rows
    var hours = document.createElement("div");
    hours.innerHTML = RowHours;
    hours.classList.add("hour");
    row.appendChild(hours);

    }
}


 