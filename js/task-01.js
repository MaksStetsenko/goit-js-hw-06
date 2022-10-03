const categories = document.querySelectorAll(".item");

//============================================

console.log(`Number of categories: ${categories.length}`);

console.log(" ");

//============================================

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
