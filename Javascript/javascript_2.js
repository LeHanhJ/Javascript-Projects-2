function validateForm(){
    let x = document.forms["nameform"]["fullname"].value; //Grab from "nameform" form and reach within the "fullname" field to get a value. it is assigned to X
    if (x == "") { //if x has nothing in the field...
        alert("Name must be filled out"); //then an alert will show up
        return false; //will not make onclick submit or run. needs to be true for submit to work
    }
}