let dropdown = document.querySelector("#dropdown");
let button = document.querySelector("#button");

let click = 0;
button.onclick = function () {
  if(click === 0) {
    dropdown.style.display = 'flex';
    click = 1;
  } else if(click === 1) {
    dropdown.style.display = 'none';
    click = 0;
  }
}