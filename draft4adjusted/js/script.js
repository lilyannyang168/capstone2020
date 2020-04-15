function zoomin() {
  var myImg = document.getElementById("map");
  var currWidth = myImg.clientWidth;
  if (currWidth == 2500) return false;
  else {
    myImg.style.width = (currWidth + 100) + "px";
  }
}

function zoomout() {
  var myImg = document.getElementById("map");
  var currWidth = myImg.clientWidth;
  if (currWidth == 100) return false;
  else {
    myImg.style.width = (currWidth - 100) + "px";
  }
}

function PopUp(hideOrshow) {
    if (hideOrshow == 'hide') document.getElementById('ac-wrapper').style.display = "none";
    else document.getElementById('ac-wrapper').removeAttribute('style');
}
window.onload = function () {
    setTimeout(function () {
        PopUp('show');
    }, 5000);
}
window.onresize = function(e){
  console.log(e.currentTarget.devicePixelRatio)
  // 0.5 is equal to 50%
  // 1 to 100%
  // 2 to 200%
  // so on and so forth
}