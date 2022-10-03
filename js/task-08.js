const form = document.querySelector(".login-form");

//===============================================

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "") {
    return alert("Please change email!");
  } else if (password.value === "") {
    return alert("You email must have a password!");
  }

  console.log(`Login: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}

//===============================================

form.addEventListener("submit", handleSubmit);
