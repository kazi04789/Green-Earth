//--Funtional category section--//
const loadcategory = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((json) => displaycategory(json.categories));
};
//--category display--//
const displaycategory = (categories) => {
  const categoryContainer = document.getElementById("category-container");
  //   categoryContainer.innerHTML = "";

  for (let category of categories) {
    const button = document.createElement("button");
    button.id = category.id;
    button.className =
      "w-[200px] h-[35px] px-2  text-left hover:bg-[#15803D] hover:text-white rounded text-[16px]";
    button.innerText = category.category_name;

    categoryContainer.appendChild(button);
     }
     //--hover process--//
       categoryContainer.addEventListener("click", (e) => {
    const allBtns = document.querySelectorAll("button");

    
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
//--Card load by section data load section function--//
const loaddefaultData = () => {
  fetch(`https://openapi.programming-hero.com/api/plants`)
    .then((res) => res.json())
    .then((json) => displayCard(json.plants));
};
