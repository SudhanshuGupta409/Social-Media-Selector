const menuEl = document.querySelector(".menu");
const menuTextEl = document.querySelector(".menu p");
const socialListsEl = document.querySelector(".socialLists");
const liEls = document.querySelectorAll(".socialLists li");

menuEl.addEventListener("click", ()=>{
    socialListsEl.classList.toggle("hide");
    menuEl.classList.toggle("rotate");
});

liEls.forEach(liEl=>{
    liEl.addEventListener("click", ()=>{
        menuTextEl.innerHTML = liEl.innerHTML;
        socialListsEl.classList.add("hide");
        menuEl.classList.toggle("rotate");
    })
})