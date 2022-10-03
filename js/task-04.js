//==========================================
const decrement = document.querySelector("[data-action=decrement]");

const increment = document.querySelector("[data-action=increment]");

const counterValue = document.querySelector("#value");

//==========================================

counterValue.value = counterValue.textContent = 2;

//==========================================

const decrementValue = () => {
  counterValue.value -= 1;
  counterValue.textContent = counterValue.value;
};

const incrementValue = () => {
  counterValue.value += 1;
  counterValue.textContent = counterValue.value;
};

//==========================================

decrement.addEventListener("click", decrementValue);

increment.addEventListener("click", incrementValue);
