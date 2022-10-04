const categories = document.querySelectorAll(".item");

//============================================

console.log(`Number of categories: ${categories.length}`);

console.log(" ");

categories.forEach((category) => {
  const items = [...category.children];
  items.forEach((item) => {
    if (item.tagName === "H2") {
      console.log(`Elements: ${item.textContent}`);
    }
  });

  items.forEach((item) => {
    if (item.tagName === "UL") {
      console.log(`Elements: ${item.children.length}`);
    }
  });
  console.log(" ");
});

//=================Alternative====================================

const list = document.querySelector("#categories");
const items = list.querySelectorAll(".item");
console.log(`В списке ${items.length} категории:`);
items.forEach((item) => {
  const h2 = item.querySelector("h2");
  const items = item.querySelectorAll("li");
  console.log(
    ` - категория: ${h2.textContent} (количество элементов: ${items.length})`
  );
});
