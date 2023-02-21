
function clickFunction(){
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
    document.querySelector("main").style.marginTop= "110px"
  } else {
    x.style.display = "block";
    document.querySelector("main").style.marginTop= "250px"
  }
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.querySelector("header").style.backgroundColor="#0A0712"
  } else {
    document.querySelector("header").style.backgroundColor="transparent"
  }
}
