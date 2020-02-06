console.log("Hi there! Welcome to my web portfolio.")

function menuToggle () { // eslint-disable-line no-unused-vars
  var x = document.getElementById("myNavtoggle")
  if (x.className === "navtoggle") {
    x.className += " responsive"
  } else {
    x.className = "navtoggle"
  }
}
