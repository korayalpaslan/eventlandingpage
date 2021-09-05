window.addEventListener("scroll", startFunction);

export function startFunction() {
  const navBar = document.querySelector(".navbar");

  if (window.scrollY > 100 && window.innerWidth > 992) {
    navBar.style.backgroundColor = "rgb(0,0,0)";
  } else if (window.scrollY <= 100 && window.innerWidth > 992) {
    navBar.style.backgroundColor = "rgba(0,0,0,0)";
  }
}