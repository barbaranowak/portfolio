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
  arrow.fadeIn(2500);
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


// const html = $("#html");
// const html_p = $(".html_div");
// const css = $("#css");
// const css_p = $(".css_div");
// const js = $("#js");
// const js_p = $(".js_div");
// const jq = $("#jquery");
// const jqp = (".jquery_div");
//
// html.on("mouseover", function(){
//   html_p.addClass("show");
// });
//
// html.on("mouseout", function(){
//   html_p.removeClass("show");
// });
//
// css.on("mouseover", function(){
//   css_p.addClass("show");
// });
//
// css.on("mouseout", function(){
//   css_p.removeClass("show");
// });
//
// js.on("mouseover", function(){
//   js_p.addClass("show");
// });
//
// js.on("mouseout", function(){
//   js_p.removeClass("show");
// });
//
// jq.on("mouseover", function(){
//   jqp.addClass("show");
// });
//
// jq.on("mouseout", function(){
//   jqp.removeClass("show");
// });
//


});
