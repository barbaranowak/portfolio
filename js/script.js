$(function(){


const avatar1 = $(".avatar");
const avatar2 = $(".avatar3");
const avatar3 = $(".avatar4");
const info = $(".about_me");
const body = $("body");
const dialog = $("#dialog");
const arrow = $("#arrow");
const click = $("#clickme");
const more = $(".more");
const hello = $(".hello");
const clickonme = $(".clickonme");

avatar1.on("mouseover", function(){
  $(this).css("opacity", "0.5");

});

avatar1.on("mouseout", function(){
  $(this).css("opacity", "1");

});

clickonme.on("mouseover", function(){
  body.addClass("pointer");
  });

clickonme.on("mouseout", function(){
  body.removeClass("pointer");
  });


clickonme.on("click", function(){
  avatar1.addClass("avatar_1");
  hello.addClass("hide");
  info.addClass("show");
  arrow.fadeIn(50);
});


arrow.on("mouseover", function(){
  $(this).css("opacity", "0.5");
});

arrow.on("mouseout", function(){
  $(this).css("opacity", "1");
});


$('a').click(function(event){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, "slow", "swing");
    event.preventDefault();
});


});
