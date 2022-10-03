const text = document.querySelector("#text");

const sizeControl = document.querySelector("#font-size-control");

//=================================================

const fontSizeOnChange = () => {
  text.style.fontSize = `${sizeControl.value}px`;
};

sizeControl.addEventListener("input", fontSizeOnChange);
