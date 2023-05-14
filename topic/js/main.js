const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const unique = ["Paper", "Issue", "Editorial", "Op-Ed", "News", "Front Page", "Advertisements"]; // Unique text
const dayWeek = new Date().getDay();

var day = weekdays[dayWeek];
var text = unique[dayWeek]; 

const title = document.querySelector("#title"); // Query Selector #1
const timeDOM = document.querySelector("#time"); // Query Selector #2

if(Math.random() < 0.1){
    var curHTML = title.innerHTML;
    title.innerHTML = "BREAKING: " + curHTML;
}


if (timeDOM != null) {
    timeDOM.innerHTML = day + " " + text; // Each day of week has unique text
    timeDOM.addEventListener("mouseover", onTimeHover); // DOM events
    timeDOM.addEventListener("mouseleave", onTimeLeave);
}

function onFooterHover(element){
    console.log("hello");
    element.innerHTML = "WHAT ARE YOU DOING DOWN HERE!!!";
}

function onTimeHover(){ // Also DOM events
    document.body.style.setProperty("background-color", "lightgray");
}

function onTimeLeave(){
    document.body.style.setProperty("background-color", "white");
}