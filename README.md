# DayPlanner
workday planner


Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

look up jQuery library for dynamically updated functions.

You'll need to use the Moment.js library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

## User Story

#tried to dynamically create the entire site..
ran into some issues with the time change because im trying to use the moment api to do the changes of the colours.
ended up running out of time because had a busy work week but managed to get the local storage to save using the jquery library 
and the color changed to the green setting of the class.

got a really good understanding of dynamically creating the webpage through just javascript. if i was to reformat the site i would change to just numeric so that i dont have to compare the pm am was having trouble with that. i think if i had more time to work on that aspect would get it going.

the css has a bug i failed to work out to make it strech the screen - need to look at bootstrap more but happy i got the local storage worked out and using loops to loop through dynamically created elements to then change the classes. 

i think next time will create html divs for the blocks and then code some switch statements. 

# live site

![scheduler](https://user-images.githubusercontent.com/110278837/190396016-14594fc2-b125-43d5-a097-5084869f14d5.png)



#below was working through the assignment

AS AN employee with a busy schedule
I WANT to add important events to a daily planner

user input to a div, then save in local storage.

innerHTML ""
Text.content 

SO THAT I can manage my time effectively

GIVEN I am using a daily planner to create a schedule

WHEN I open the planner

window.

THEN the current day is displayed at the top of the calendar
momentjs create variable with current day and time.



WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

