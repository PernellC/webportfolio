console.log("Hi there! Welcome to my web portfolio.")
var text1 = "Thanks for visiting my page hopefully you say \"lets hire this guy!\"";
var text2 = "Dont forget to visit my about me page!";

function menuToggle() {
  var x = document.getElementById("myNavtoggle");
  if (x.className === "navtoggle") {
    x.className += "responsive";
} else {
  x.className = "navtoggle";
}
}
