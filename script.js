const profile=document.querySelector("#profile")
const navBar=document.querySelector("#nav-bar")

profile.addEventListener("click",function(){
    navBar.classList.toggle("show-links")
})