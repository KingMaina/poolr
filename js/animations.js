function menuToggle() {
    var x = document.getElementById("navigation");
    if (x.className === "header-nav__navigation") {
      x.className += " responsive";
    } else {
      x.className = "header-nav__navigation";
    }
  }