function drawerClicked(el) {
  const icon = el.childNodes[1];
  const drawer = document.getElementById("drawer").style;

  if(drawer.right == "0%")
    drawer.right = "-100%";
  else {
    drawer.right = "0%";
  }

  toggleBetweenClasses(icon, "fa-arrow-right", "fa-bars");

}

function toggleBetweenClasses(el, c1, c2) {
  el.classList.toggle(c1);
  el.classList.toggle(c2);
}
