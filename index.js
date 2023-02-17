window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    document.getElementById("nav").className = "vnav navbar navbar-expand-sm    fixed-top";
  }
  else if (document.body.scrollTop ==0 || document.documentElement.scrollTop ==0) {
    document.getElementById("nav").className = "navbar navbar-expand-sm bg-dark  navbar-dark fixed-top";
  }
}
$(window).on("load", function(){
  $(".loader").fadeout()
});