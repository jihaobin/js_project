let p = document.querySelector("p");
let img = document.querySelector("section");
let cont = 1;

let time = setInterval(() => {
  cont++;
  p.innerHTML = `${cont}%`;
  p.style.opacity = 1 - cont / 100;

  img.style.filter = `blur(${30 - (cont / 100) * 30}px)`;
  if (cont > 99) {
    clearTimeout(time);
  }
}, 30);
