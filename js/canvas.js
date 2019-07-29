$(".canvas").html('<div class="bols"><div class="before"></div></div>');

//Random
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

//Generate balls loop

var colors = [{color: "#5e698a"}, {color: "#2d2f35"}, {color: "#5f698a"}, {color: "#70747a"}, {color: "#34363c"}];

function newBalls(){
for(var i = 0; i < 200; i++){
    var newRandomY = getRandomInt(300);
    var newRandomX = getRandomInt(2000);
    var colorInt = getRandomInt(colors.length);
    $(".canvas .bols .before").before("<div class='bol style' style='transform: translate("+newRandomX+"px, "+newRandomY+"px); background-color: "+colors[colorInt].color+";'></div>");
}
}

var newPositionY = 0;

setInterval(function(){
    if(newPositionY == 0){
        newBalls();
    }
    newPositionY++;
    $(".canvas .bols").css("transform", "translateY(-"+newPositionY+"px)");
}, 50);

setInterval(function(){
    newPositionY = 0;
    $(".canvas").html('<div class="bols"><div class="before"></div></div>');
    newBalls();
}, 30000);