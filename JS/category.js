const language_Container = document.getElementById("language");
let all_categories = JSON.parse(categories);
let languages = all_categories.languages;
let length = languages.length;
let selected_language = language_Container.value;
const categories_container = document.getElementById("categories");
const author_container = document.getElementById("author");

categories_container.innerHTML = "";
author_container.innerHTML = "";

for (i = 0; i < length; i++) {
  console.log(languages[i].language);
  const category_length = languages[i].categories.length;
  const authors_length = languages[i].authors.length;

  if (selected_language == languages[i].language) {
    // Loop for categories
    for (a = 0; a < category_length; a++) {
      if (languages[i].categories[a] !== "select category") {
        let option = document.createElement("option");
        option.setAttribute("value", languages[i].categories[a]);
        option.innerHTML = languages[i].categories[a];
        categories_container.appendChild(option);
      } else {
        let option = document.createElement("option");
        option.setAttribute("value", "all");
        option.innerHTML = "select a category";
        categories_container.appendChild(option);
      }
    }
    // Loop for authors
    for (let b = 0; b < authors_length; b++) {
      if (languages[i].authors[b] !== "select author") {
        let author = document.createElement("option");
        author.setAttribute("value", languages[i].authors[b]);
        author.innerHTML = languages[i].authors[b];
        author_container.appendChild(author);
      } else {
        let author = document.createElement("option");
        author.setAttribute("value", "all");
        author.innerHTML = "select author";
        author_container.appendChild(author);
      }
    }
  } else {
  }
}

language_Container.addEventListener("change", () => {
  selected_language = language_Container.value;
  console.log(selected_language);
  categories_container.innerHTML = "";
  author_container.innerHTML = "";
  console.log("changed");
  for (i = 0; i < length; i++) {
    const category_length = languages[i].categories.length;
    const authors_length = languages[i].authors.length;
    if (selected_language == languages[i].language) {
      for (a = 0; a < category_length; a++) {
        if (languages[i].categories[a] !== "select category") {
          let option = document.createElement("option");
          option.setAttribute("value", languages[i].categories[a]);
          option.innerHTML = languages[i].categories[a];
          categories_container.appendChild(option);
        } else {
          let option = document.createElement("option");
          option.setAttribute("value", "all");
          option.innerHTML = "select a category";
          categories_container.appendChild(option);
        }
      }

      for (let b = 0; b < authors_length; b++) {
        if (languages[i].authors[b] !== "select author") {
          let author = document.createElement("option");
          author.setAttribute("value", languages[i].authors[b]);
          author.innerHTML = languages[i].authors[b];
          author_container.appendChild(author);
        } else {
          let author = document.createElement("option");
          author.setAttribute("value", "all");
          author.innerHTML = "select author";
          author_container.appendChild(author);
        }
      }
    } else {
    }
  }
});
