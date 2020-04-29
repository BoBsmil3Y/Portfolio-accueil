function displayImg(name) {
  var element = document.getElementById(name);

  element.className = "show anim";
}

function hideImg(name) {
  var element = document.getElementById(name);

  element.className = "hidden anim";
}