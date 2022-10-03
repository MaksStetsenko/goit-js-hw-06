const userNameInput = document.querySelector("#name-input");

const userName = document.querySelector("#name-output");

//==================================================

const nameInput = () => {
  if (userNameInput.value !== userName.textContent) {
    userName.textContent = userNameInput.value;
  }
};

//==================================================

userNameInput.addEventListener("input", nameInput);
