const text = document.querySelector("#text");

const sizeControl = document.querySelector("#font-size-control");

//=================================================

const fontSize = () => {
  text.style.fontSize = `${sizeControl.value}px`;
};

sizeControl.addEventListener("change", fontSize);
