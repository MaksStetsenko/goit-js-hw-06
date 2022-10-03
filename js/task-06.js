const validation = document.querySelector("#validation-input");

//==================================

const validCheck = () => {
  validation.classList.remove("valid");
  validation.classList.remove("invalid");

  if (validation.value.length >= validation.dataset.length) {
    validation.classList.add("valid");
  } else {
    validation.classList.add("invalid");
  }
};

validation.addEventListener("blur", validCheck);
