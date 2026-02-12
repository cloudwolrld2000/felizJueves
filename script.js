
const YT_URL = "https://youtube.com/shorts/S7_ZuVzP-yw?si=AXJLFYucuWd1gx8O";
// ==================

const bg = document.getElementById("bg-reis");
const btn = document.getElementById("btn");

function rand(min, max){
  return Math.random() * (max - min) + min;
}

function makeBackground(){
  bg.innerHTML = "";

  const w = window.innerWidth;
  const h = window.innerHeight;

  for(let i = 0; i < COUNT; i++){
    const img = document.createElement("img");
    img.src = REI_IMG;
    img.className = "rei";
    img.alt = "";

    const size = rand(MIN_SIZE, MAX_SIZE);
    img.style.width = `${size}px`;

    // posiciones random (estáticas)
    img.style.left = `${rand(-30, w - 30)}px`;
    img.style.top  = `${rand(-30, h - 30)}px`;

    // variación: rotación leve y espejo aleatorio
    const rot = rand(-18, 18);
    const flip = Math.random() < 0.5 ? -1 : 1;
    img.style.transform = `rotate(${rot}deg) scaleX(${flip})`;

    // opacidad random para profundidad
    img.style.opacity = `${rand(0.18, 0.45)}`;

    bg.appendChild(img);
  }
}

window.addEventListener("load", makeBackground);
window.addEventListener("resize", makeBackground);

btn.addEventListener("click", () => {
  window.open(YT_URL, "_blank", "noopener,noreferrer");
});
