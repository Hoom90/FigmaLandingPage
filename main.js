
function clickFunction(){
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
    document.querySelector("main").style.marginTop= "110px"
    document.querySelector(".go-bottom").style.top= "480px"
  } else {
    x.style.display = "block";
    document.querySelector("main").style.marginTop= "250px"
    document.querySelector(".go-bottom").style.top= "620px"
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
