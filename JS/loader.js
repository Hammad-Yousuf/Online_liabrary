
let show;
let fadeout;
function loader(){
  show = setTimeout(showpage, 5000);
  fadeout = setTimeout(fadeOut, 4000)
}

function fadeOut() {
  document.getElementById('loader_container').style.opacity = "0";
}

function showpage() {
  document.getElementById('loader_container').style.display = "none";
}