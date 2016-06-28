
var intervalID = window.setInterval(function (){ clock () }, 1000) 

function clock () {
  var now = new Date()
  // var time = now.toLocaleTimeString()
  document.getElementById("clock").innerHTML = now
}

window.onload = clock()
