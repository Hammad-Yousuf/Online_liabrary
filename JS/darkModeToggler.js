const toggle_btn_container = document.getElementById('toggler_container');
const toggle_btn = document.getElementById('toggler_btn');
const toggle_icon = document.querySelector('#toggler_btn > i')

console.log(toggle_btn_container);

toggle_btn_container.addEventListener('click', ()=>{
    document.body.classList.toggle('dark')
    toggle_btn.classList.toggle('toggled')
    toggle_icon.classList.toggle('fa-sun')
    toggle_icon.classList.toggle('fa-moon')
})