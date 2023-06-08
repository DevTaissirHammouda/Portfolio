window.onscroll = function() {myFunction()};

function myFunction() {
  if (window.scrollY>350) {
    document.getElementById("nav").className = "vnav navbar navbar-expand-sm    fixed-top";
  }
  else {
    document.getElementById("nav").className = "navbar navbar-expand-sm bg-dark  navbar-dark fixed-top";
  }
}
$(window).on("load", function(){
  $(".loader").fadeout()
});