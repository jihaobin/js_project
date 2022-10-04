const divs = document.querySelectorAll("div");

document.addEventListener("scroll", scroll);
scroll();

function scroll() {
  const tirggerbottom = (innerHeight / 5) * 4;
  divs.forEach((div) => {
    let boxTop = div.getBoundingClientRect().top;
    if (boxTop < tirggerbottom) {
      div.classList.add("show");
    } else {
      div.classList.remove("show");
    }
  });
}
