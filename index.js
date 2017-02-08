
$(document).ready( function(){
    $("#change-color").click(function(){
        var colors= ["red", "blue", "green", "yellow", "black"]
        $('body').css("background-color", colors[Math.round(Math.random() *4)]);
         })
    $("#submit-name").click(function(){
    $("#greeting").html("Welcome and Congratulations, " + $("#name").val());
    })  
})    



