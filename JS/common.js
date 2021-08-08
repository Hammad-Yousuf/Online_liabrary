document.getElementById("dropdown-toggler").addEventListener("click", () => {
  document.querySelector(".drop_menu").classList.toggle("open");
});

window.addEventListener("scroll", () => {
  let width = window.innerWidth;
  var scrolled = window.scrollY;
  if (width > 360 && scrolled > 90) {
    document.getElementById("mobile_logo").style.display = "block";
    // document.getElementById("mobile_logo").style.transform = "scale(1)";
  } else {
    document.getElementById("mobile_logo").style.display = "none";
    // document.getElementById("mobile_logo").style.transform = "scale(0)";
  }
});
window.addEventListener("scroll", () => {
    let width = window.innerWidth;
    var scrolled = window.scrollY;
    if (width <= 360 && scrolled > 90) {
      document.getElementById("mobile_logo_right").style.display = "block";
    } else {
      document.getElementById("mobile_logo_right").style.display = "none";
    }
  });
