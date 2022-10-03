const widget = document.querySelector(".widget");

const colorSet = document.querySelector(".color");

const changingBtn = document.querySelector(".change-color");

//=================================================

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const changeColorOnClick = () => {
  colorSet.textContent = getRandomHexColor();
  widget.style.backgroundColor = `${getRandomHexColor()}`;
};

//=================================================

changingBtn.addEventListener("click", changeColorOnClick);
