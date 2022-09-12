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
    "9 am","10 am","11 am","12 pm","1 pm","2 pm","3 pm","4 pm","5 pm",
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
    row.classList.add("row");
    timeblocks.appendChild(row);

    //need to add the iterations to the rows
    var hours = document.createElement("div");
    hours.innerHTML = RowHours;
    hours.classList.add("hour");
    row.appendChild(hours);
   
    // need to add the textarea element to the iteration
    var textarea = document.createElement("textarea");
    textarea.placeholder = "this is where you will enter your notes"
    textarea.setAttribute("class", "description" )
    textarea.setAttribute("id", i);
    row.appendChild(textarea);

    //need to add save button to the rows
    var saveBtn = document.createElement("saveBtn");
    saveBtn.textContent = "Save"
    saveBtn.classList.add("saveBtn");
    saveBtn.setAttribute("value", i);
    row.appendChild(saveBtn)

    }
}
// WHEN I view the timeblocks for that day
// THEN each timeblock is COLOR CODED to indicate whether 
// it is in the past, present, or future

//GET THE MOMENT CURRENT TIME 

function GetCurrenttime(){
    // get the current hour and am/pm
    var getCurHour = moment().format('h a');
    // put into a variable
    var currentHour = moment(getCurHour, 'h a');
    // change the color of the description class
    var descriptionColor = document.getElementsByClassName('description');
    // loop through descriptioncolor and check against current hour

    //https://momentjscom.readthedocs.io/en/latest/moment/05-query/00-intro/
    // issame, isBefore , isAfter

    // issue getting the color to change 
    for (i = 0; i < descriptionColor.length; i++){
        var timeBlocks = moment(descriptionColor[i],'h a');
        if(currentHour.isSame(timeBlocks) === true) {
            descriptionColor[i].classList.add('present')
            descriptionColor[i].classList.remove('past')
            descriptionColor[i].classList.remove('future')
        } else if (currentHour.isBefore(timeBlocks) === true) {
            descriptionColor[i].classList.add('future')
            descriptionColor[i].classList.remove('present')
            descriptionColor[i].classList.remove('future')
        } else if (currentHour.isBefore(timeBlocks) === false) {
            descriptionColor[i].classList.add('past')
            descriptionColor[i].classList.remove('present')
            descriptionColor[i].classList.remove('future')
    
        }
    }

} GetCurrenttime()




// WHEN I click into a timeblock THEN I can enter an event
// currently the text area allows for user input. need to save it to local storage
// from looking at jquiry looks like need to have the save button on click to then save to local storage

    // need to set the input to the local storage
    //event handeler

// $( "#dataTable tbody" ).on( "click", "tr", function() {
//         console.log( $( this ).text() );
//       });


$(document).on('click', '.saveBtn', function() {
    var saveBtnInput = $(this).val();
    // variable for the descriptions value
    var description = document.getElementById(saveBtnInput).value;
    localStorage.setItem(saveBtnInput, description);
});

//issue error script.js:105 Uncaught TypeError: Cannot read properties of null (reading 'value')

// assuming that i get the save button to save then will need to get
// the values and show them on the screen.

function getNotes(){
    // get the data
    localStorage.getItem("value")
    // will need to loop over the values 
    for(let i=0; i<localStorage.length; i++) {
        let key = localStorage.key(i);
        alert(`${key}: ${localStorage.getItem(key)}`);
      }

    for( let i = 0; i < timeBlocksArr.length; i++ ){
        var getNotes = localStorage.getItem(i);
        var textArea = document.getElementById(i);
        textArea.innerText = getNotes;
    }
}