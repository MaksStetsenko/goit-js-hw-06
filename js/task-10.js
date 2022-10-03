const numberOfBlocks = document.querySelector("input");

const createBlockBtn = document.querySelector("[data-create]");

const destroyBlockBtn = document.querySelector("[data-destroy]");

const containerForCreating = document.querySelector("#boxes");

//================Random color for div`s=============

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

//==============For delete div`s=====================

const destroyingOfBlocksOnClick = () => {
  let newBlocks = document.querySelectorAll(".item");
  for (let i = 0; i < newBlocks.length; i++) {
    let boxesToDelete = [i];
    boxesToDelete.forEach((item) => {
      item = document.querySelector(".item");
      item.remove();
    });
  }
};

//==============For create div`s=====================

const creatingOfBlocksOnClick = () => {
  destroyingOfBlocksOnClick();

  for (let i = 0; i < numberOfBlocks.value; i++) {
    let boxesToCreate = [i];
    boxesToCreate.forEach((item) => {
      item = document.createElement("div");
      item.classList.add("item");
      item.style.width = String(30 + 10 * i) + "px";
      item.style.height = String(30 + 10 * i) + "px";
      item.style.backgroundColor = `${getRandomHexColor()}`;
      containerForCreating.append(item);
    });
  }
};

//========================================

createBlockBtn.addEventListener("click", creatingOfBlocksOnClick);

destroyBlockBtn.addEventListener("click", destroyingOfBlocksOnClick);
