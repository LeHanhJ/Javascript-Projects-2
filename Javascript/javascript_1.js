function food_choice() {
    var choice_output;
    var food_decision = document.getElementById("decision").value;
    var decision_string = " it is! Let's go find a place close by.";
    switch(food_decision) {
        case "Japanese":
            choice_output = "Japanese" + decision_string;
        break;
        case "Vietnamese":
            choice_output = "Vietnamese" + decision_string;
        break;
        case "Mediteranean":
            choice_output = "Mediteranean" + decision_string;
        break;
        case "Pizza":
            choice_output = "Pizza" + decision_string;
        break;
        case "Chinese":
            choice_output = "Chinese" + decision_string;
        break;
        case "American":
            choice_output = "American" + decision_string;
        break;
        case "Mexican": 
            choice_output = "Mexican isn't on the menu... but that sounds delicious! Let's get some!";
        break;
        default:
            choice_output = "Hmm, maybe we can discuss this more. Give me a call at 503-555-0182!";
    }
    document.getElementById("output").innerHTML = choice_output;
}

//getElementByClassName assignment

function hello_function() {
    var B = document.getElementsByClassName("click");
    B[0].innerHTML = "I'm the one you're looking at.";
}

//drawing on canvas in JS
var H = document.getElementById("border_name");
var Hello = H.getContext("2d");

Hello.font= "90px Helvetica";
Hello.strokeText("Mamma mia!", 50,185);


//fillGradient
var g = document.getElementById("gradient");
var gr = g.getContext("2d");
var grd = gr.createLinearGradient(50,150,250,20);
grd.addColorStop(0,"red");
grd.addColorStop(.45,"white");
grd.addColorStop(1,"green");

gr.fillStyle = grd;
gr.fillRect(0,0,700,400);
