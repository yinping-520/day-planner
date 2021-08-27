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
headerTimeEl.text(currentTime);
var hours = $(".hour").text();
var now = moment();


function checkState() {
    $(".hour").each(function(){
        var hour = this.id.split("hour")[1];
        //console.log(moment().format("H"))
        console.log(moment(hour,"H").format("ha"))
        
        if (moment(hour, "ha").isBefore(now, "h")) {
            $(this).siblings(0).addClass("past")
        } else if (moment(hour, "ha").isSame(now, "h")) {
            $(this).siblings(0).addClass("present")
        } else {
            $(this).siblings(0).addClass("future")
        }
    })
/*
    if (moment("9am", "ha").isBefore(now, "h")) {
        inputEl[0].classList.add("past")
    } else if (moment("9am", "ha").isSame(now, "h")) {
        inputEl[0].classList.add("present")
    } else {
        inputEl[0].classList.add("future")
    }
    if (moment("10am", "ha").isBefore(now, "h")) {
        inputEl[1].classList.add("past")
    } else if (moment("10am", "ha").isSame(now, "h")) {
        inputEl[1].classList.add("present")
    } else {
        inputEl[1].classList.add("future")
    }
    if (moment("11am", "ha").isBefore(now, "h")) {
        inputEl[2].classList.add("past")
    } else if (moment("11am", "ha").isSame(now, "h")) {
        inputEl[2].classList.add("present")
    } else {
        inputEl[2].classList.add("future")
    }
    if (moment("12pm", "ha").isBefore(now, "h")) {
        inputEl[3].classList.add("past")
    } else if (moment("12pm", "ha").isSame(now, "h")) {
        inputEl[3].classList.add("present")
    } else {
        inputEl[3].classList.add("future")
    }
    if (moment("1pm", "ha").isBefore(now, "h")) {
        inputEl[4].classList.add("past")
    } else if (moment("1pm", "ha").isSame(now, "h")) {
        inputEl[4].classList.add("present")
    } else {
        inputEl[4].classList.add("future")
    }
    if (moment("2pm", "ha").isBefore(now, "h")) {
        inputEl[5].classList.add("past")
    } else if (moment("2pm", "ha").isSame(now, "h")) {
        inputEl[5].classList.add("present")
    } else {
        inputEl[5].classList.add("future")
    }
    if (moment("3pm", "ha").isBefore(now, "h")) {
        inputEl[6].classList.add("past")
    } else if (moment("3pm", "ha").isSame(now, "h")) {
        inputEl[6].classList.add("present")
    } else {
        inputEl[6].classList.add("future")
    }
    if (moment("4pm", "ha").isBefore(now, "h")) {
        inputEl[7].classList.add("past")
    } else if (moment("4pm", "ha").isSame(now, "h")) {
        inputEl[7].classList.add("present")
    } else {
        inputEl[7].classList.add("future")
    }
    if (moment("5pm", "ha").isBefore(now, "h")) {
        inputEl[8].classList.add("past")
    } else if (moment("5pm", "ha").isSame(now, "h")) {
        inputEl[8].classList.add("present")
    } else {
        inputEl[8].classList.add("future")
    }

*/
};

checkState()


var data = []
function storeData() {
    var plan = $("input[type=text]").val()
    return plan
    data.push(plan)
    localStorage.setItem("data", data);
}



var allPlans ={
    
    location: inputEl
    //dayPlan:
}
console.log(inputEl)

$("#mominput").on("click", ".btn", function () {
    storeData()
});

function display(){
    if (localStorage.data) {
        var schedule = localStorage.getItem("data")
        
    }
    
}

//////????? need to loop throgh the input forms.






//set colors. if moment > hour
/*
for(var i=0; i<12; i++){
    var hour = hours.split(" ")[i]
    console.log(hour)
    if(now===hour){
        console.log("now")
    }
    if(now>hour){
        console.log("past")
    }
    if(now<hour){
        console.log('future')

    }
};
























//var plan = inputEl.value;
//localStorage.setItem("Plan", data);
//$("form-control").


/*
for(var i=0; i<12; i++){

    var workHour = moment("9","h").add(i, "h")
    $(".input-group-text")[i].text("22")
    //item.text(workHour)
    //console.log($(".input-group-text")[i])
};
*/

