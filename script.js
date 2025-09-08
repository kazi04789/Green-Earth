// category functionaluty
const loadcategory = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((json) => displaycategory(json.categories));
};
// display category
const displaycategory = (categories) => {
  const categoryContainer = document.getElementById("category-container");
  //   categoryContainer.innerHTML = "";

  for (let category of categories) {
    const button = document.createElement("button");
    button.id = category.id;
    button.className =
      "md:w-[200px] w-full h-[35px] px-2  text-left hover:bg-[#15803D] hover:text-white rounded md:text-[16px] text-2xl md:mb-0 mb-3";
    button.innerText = category.category_name;

    categoryContainer.appendChild(button);
    // console.log(category);
  }

  //   hover active process
  categoryContainer.addEventListener("click", (e) => {
    const allBtns = document.querySelectorAll("button");

    // console.log(allBtns);
    allBtns.forEach((btn) => {
      btn.classList.remove("bg-[#15803D]", "text-white");
    });

    if (e.target.localName === "button") {
      console.log(e.target.id);
      loadspinner();
      e.target.classList.add("bg-[#15803D]", "text-white");
      loadCardbyCategory(e.target.id);
    }
  });
};

//--card loadby category data load funtion--//
const loaddefaultData = () => {
  fetch(`https://openapi.programming-hero.com/api/plants`)
    .then((res) => res.json())
    .then((json) => displayCard(json.plants));
};

