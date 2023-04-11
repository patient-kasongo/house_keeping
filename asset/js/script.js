let button=document.querySelector(".navbar-button");
let body=document.querySelector("body")
button.addEventListener("click",function()
{
    body.classList.toggle('visible');
})
