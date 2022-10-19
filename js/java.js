let searchBtn = document.getElementById("search-btn");
let btnSearch = document.querySelector(".search-bar");
let loginIn = document.getElementById("login-btn");
let login = document.querySelector(".login");
let btnX = document.getElementById("x");
let menuBtn = document.getElementById("menu-bar");
let navbar = document.querySelector(".navbar");
let btnImges = document.querySelectorAll(".btn-img");

window.onscroll = () => {
    searchBtn.classList.remove('fa-xmark');
    btnSearch.classList.remove('active');
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('active');
    login.classList.remove('active');
};
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})
searchBtn.addEventListener("click", () => {
    searchBtn.classList.toggle('fa-xmark');
    btnSearch.classList.toggle('active');
});
loginIn.addEventListener('click', ()=>{
    login.classList.add('active');
});
btnX.addEventListener('click', ()=>{
    login.classList.remove('active');
});

  btnImges.forEach(btn => {
    btn.addEventListener('click', ()=> {
        document.querySelector('.all-imgs .active').classList.remove('active');
        btn.classList.add('active');
        let chang = btn.getAttribute('data-src');
        document.getElementById('img-slider').src = chang;
    })
})
