localStorage.setItem("name", "Hammad")
// console.log(recommended_container);
// Popular Books
const pop_books_container = document.getElementById("popular_container");
const pop_left_btn = document.getElementById("left_scroll");
const pop_right_btn = document.getElementById("right_scroll");
const width = window.innerWidth;
let div_width = pop_books_container.clientWidth;
let div_scrolled;

pop_books_container.addEventListener("scroll", () => {
  div_scrolled = pop_books_container.scrollLeft;
});

pop_left_btn.addEventListener("click", () => {
  if (width <= 768) {
    pop_books_container.scrollBy(-270, 0);
  } else {
    pop_books_container.scrollBy(-800, 0);
  }
});
pop_right_btn.addEventListener("click", () => {

      if (width <= 768) {
        pop_books_container.scrollBy(270, 0);
      } else {
        pop_books_container.scrollBy(800, 0);
      }
});

// Recommended Books

const rec_left_btn = document.getElementById("rec_left_scroll");
const rec_right_btn = document.getElementById("rec_right_scroll");
rec_left_btn.addEventListener("click", () => {
  if (width <= 360) {
    document.getElementById("rec_container").scrollBy(-270, 0);
  } else {
    document.getElementById("rec_container").scrollBy(-800, 0);
  }
});

rec_right_btn.addEventListener("click", () => {
  if (width <= 360) {
    document.getElementById("rec_container").scrollBy(270, 0);
  } else {
    document.getElementById("rec_container").scrollBy(800, 0);
  }
});

document.querySelectorAll('.author').forEach(e => {
    e.addEventListener('click',()=>{
        let x = e.title
        localStorage.setItem('author_selected', x);
    })
})
// let your = localStorage.getItem("author_selected")


// Contact Form

document.getElementById('form_btn').addEventListener('click', ()=>{
  setTimeout(()=>{
    alert('Thank You our Agent will Contact you Soon')
  }, 1000)
})