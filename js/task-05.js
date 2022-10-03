const userNameInput = document.querySelector("#name-input");

const userName = document.querySelector("#name-output");

//==================================================

const nameOnInput = () => {
  if (userNameInput.value !== userName.textContent) {
    userName.textContent = userNameInput.value;
  }
};

//==================================================

userNameInput.addEventListener("input", nameOnInput);
