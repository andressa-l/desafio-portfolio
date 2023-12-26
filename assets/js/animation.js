const bg = document.getElementById("background"),
  fg = document.getElementById("foreground"),
  ss = document.getElementById("shooting-star");
function getRandomCoords() {
  return {
    x: (Math.random() * 100).toFixed(2),
    y: (Math.random() * 100).toFixed(2),
  };
}
function fillWithStars(el, num) {
  for (i = 0; i < num; i++) {
    const star = document.createElement("span");
    const randCoords = getRandomCoords();
    star.classList = "star";
    star.style.left = randCoords.x + "%";
    star.style.top = randCoords.y + "%";
    el.appendChild(star);
  }
}
function shootStar() {
  ss.style.opacity = "1";
  setTimeout((ss.style.display = "block"));
  const randCoords = getRandomCoords();
  const dir = Math.ceil(Math.random() * 8);
  ss.style.left = randCoords.x + "%";
  ss.style.top = randCoords.y + "%";
  console.log(dir);
  if (dir === 1) {
    setTimeout(() => {
      ss.style.left = Number(randCoords.x) + 30 + "%";
    }, 100);
    ss.style.transform = "rotate(0deg)";
  } else if (dir === 2) {
    setTimeout(() => {
      ss.style.top = Number(randCoords.y) + 30 + "%";
    }, 100);
    ss.style.transform = "rotate(90deg)";
  } else if (dir === 3) {
    setTimeout(() => {
      ss.style.left = Number(randCoords.x) - 30 + "%";
    }, 100);
    ss.style.transform = "rotate(0deg)";
  } else if (dir === 4) {
    setTimeout(() => {
      ss.style.top = Number(randCoords.y) - 30 + "%";
    }, 100);
    ss.style.transform = "rotate(90deg)";
  } else if (dir === 5) {
    setTimeout(() => {
      ss.style.top = Number(randCoords.y) - 30 + "%";
      ss.style.left = Number(randCoords.x) + 30 + "%";
    }, 100);
    ss.style.transform = "rotate(135deg)";
  } else if (dir === 6) {
    setTimeout(() => {
      ss.style.top = Number(randCoords.y) + 30 + "%";
      ss.style.left = Number(randCoords.x) + 30 + "%";
    }, 100);
    ss.style.transform = "rotate(45deg)";
  } else if (dir === 7) {
    setTimeout(() => {
      ss.style.top = Number(randCoords.y) + 30 + "%";
      ss.style.left = Number(randCoords.x) - 30 + "%";
    }, 100);
    ss.style.transform = "rotate(135deg)";
  } else if (dir === 8) {
    setTimeout(() => {
      ss.style.top = Number(randCoords.y) - 30 + "%";
      ss.style.left = Number(randCoords.x) - 30 + "%";
    }, 100);
    ss.style.transform = "rotate(45deg)";
  }
  setTimeout(() => {
    ss.style.opacity = "0";
    setTimeout(() => {
      ss.style.display = "none";
    }, 500);
  }, 1000);
}
function bgSize() {
  const wAndH = Math.max(window.innerWidth, window.innerHeight);
  bg.style.height = wAndH + wAndH / 25 + "px";
  bg.style.width = wAndH + wAndH / 25 + "px";
}
window.addEventListener("resize", bgSize);
fillWithStars(bg, 200);
fillWithStars(fg, 50);
bgSize();
shootStar();
setInterval(shootStar, 5000);
