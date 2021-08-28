/*GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist*/

var headerTimeEl = $("#currentDay");
var btnEl = $(".btn")
var inputEl = $(".form-control")
var formEl = $(".input-group")
var currentTime = moment().format("dddd,MMM Do");
var containerEl = $("#mominput")
headerTimeEl.text(currentTime);
var hours = $(".hour").text();
var now = moment();


function checkState() {
    $(".hour").each(function(){
        var hour = this.id.split("hour")[1];
        //console.log(moment().format("H"))
        //console.log(moment(hour,"H").format("ha"))
        
        if (moment(hour, "ha").isBefore(now, "h")) {
            $(this).siblings(0).addClass("past")
        } else if (moment(hour, "ha").isSame(now, "h")) {
            $(this).siblings(0).addClass("present")
        } else {
            $(this).siblings(0).addClass("future")
        }
    })
};

checkState();



function submitHandler(event){
    event.preventDefault();
    var plan=[];

    inputEl.each(function(){
       var input = $(this).val()
       plan.push(input)
    })
       
       localStorage.setItem("Plan",JSON.stringify(plan))
};




containerEl.on("click", ".btn", submitHandler);



window.onload = function(){
    var schedule = JSON.parse(localStorage.getItem("Plan"))
    for(var i=0; i<8; i++){
        //inputEl.val(schedule)
        console.log(schedule[i])
        var afterReload = inputEl[i]
        //console.log(put)
        afterReload.value = schedule[i]
  }

 }

 