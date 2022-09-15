//global variables
var localTime = document.getElementById("currentDay");
var timeblocks = document.getElementById("timeblock");

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
GenerateTimeblocks();
function GenerateTimeblocks() {
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
   
    // need to add the textarea element to the rows
    var textarea = document.createElement("textarea");
    textarea.placeholder = "this is where you will enter your notes";
    textarea.setAttribute("class", "description");
    textarea.setAttribute("id", i);
    row.appendChild(textarea);

    //need to add save button to the rows
    var saveBtn = document.createElement("Button");
    saveBtn.textContent = "Save button";
    saveBtn.classList.add("saveBtn");
    saveBtn.setAttribute("value", i);
    row.appendChild(saveBtn);

    }
}


// key, is the button Id saveBtn (value)
// value, i want is the textarea input

// both need to be strings so JSON.stringify("value", "description")

// then i want to store the pair in local Storage.

// $(element).on(event, childSelector, data, function)
$(document).on('click', '.saveBtn', function() {
    // this is the value i want from the button
    var saveBtnValue = $(this).val();
    // this is the key
    var discriptionBox = document.getElementById(saveBtnValue).value;       
                                // key : value
    localStorage.setItem(saveBtnValue , discriptionBox);
});

// $("#para4").on("myCustomEvent", function (event, value) {
//     $(this).append(value);
// });
// // bound the save button to click event
// // next need to save the text input from text area to the local storage.


// function using momentjs to check if the time is the same as current

// if its the same hour as the current time 

// then i want to change the class of the element to relevant css
//moment().isSame(Moment|String|Number|Date|Array);
//moment().isSame(Moment|String|Number|Date|Array, String);
//moment().isBefore(Moment|String|Number|Date|Array);
//moment().isBefore(Moment|String|Number|Date|Array, String);

function timeBlockColorChange() {
    // variable that has the current hour and the am/pm
    var getCurrentHour = moment().format('h a');
    // variable that has the current time and hour from class
    var currentHour = moment(getCurrentHour, 'h a');
    // variable to get the class description 
    var descriptionBox = document.getElementsByClassName('description')
    // now have to check the moment hour against the hour in desctiption row

    // loop that will loop through the timeblocks
    for( var i = 0; i < descriptionBox.length; i++) {
        // variable for the timeblock to compare to
        var currentTimeblock = moment(timeBlocksArr[1], 'h a');
        // if the currennt hour is same as current time block add present class
        if (currentHour.isSame(currentTimeblock) === true) {
            
            descriptionBox[i].classList.add('present')
            descriptionBox[i].classList.remove('future')
            descriptionBox[i].classList.remove('past')
            
        } else if (currentHour.isBefore(currentTimeblock) === true) {

            descriptionBox[i].classList.add('past')
            descriptionBox[i].classList.remove('future')
            descriptionBox[i].classList.remove('present')
        
        } else if (currentHour.isBefore(currentTimeblock) === false) {

            descriptionBox[i].classList.add('future')
            descriptionBox[i].classList.remove('past')
            descriptionBox[i].classList.remove('present')
        }
        
    }

}
timeBlockColorChange()


function getNotes(){
for( let i = 0; i < timeBlocksArr.length; i++ ){
    var getNotes = localStorage.getItem(i);
    var textArea = document.getElementById(i);
    textArea.innerText = getNotes;
    }
}
getNotes();




// function getNotes(){
//     // get the data
//     localStorage.getItem("")
//         // will need to loop over the values 
//     for(let i=0; i < localStorage.length; i++) {
//         let key = localStorage.key(i);
//         alert(`${key}: ${localStorage.getItem(key)}`);
//       }





// $(document).on('click', 'saveBtn', 'value', function() )

// WHEN I click into a timeblock THEN I can enter an event
// currently the text area allows for user input. need to save it to local storage
// from looking at jquiry looks like need to have the save button on click to then save to local storage

    // need to set the input to the local storage
    //event handeler

// $( "#dataTable tbody" ).on( "click", "tr", function() {
//         console.log( $( this ).text() );
//       });

//Syntax of jQuery “.on()” Method
//$(element).on(event, childSelector, data, function)


//issue error script.js:105 Uncaught TypeError: Cannot read properties of null (reading 'value')




// WHEN I view the timeblocks for that day
// THEN each timeblock is COLOR CODED to indicate whether 
// it is in the past, present, or future






// assuming that i get the save button to save then will need to get
// the values and show them on the screen.



