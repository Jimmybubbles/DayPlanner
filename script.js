var localTime = document.getElementById("currentDay");

// create a function that will get the time from the momentjs api and then serve it to the screen.
function getTime(){
    var Datetime = moment().format('MMMM Do YYYY, h:mm:ss a');
    localTime.innerHTML = Datetime;
    localTime.innerHTML = "Current datetime " + Datetime;
}
setInterval(getTime, 1000);


 