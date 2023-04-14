let name=['House Keeping']
let stopNumber
let contenair_whrite=document.querySelector(".big_name")
let direction=' '
let str="";
/*génération d'un nombre croissant*/
/*Passer ce nombre comme indice de mon tableau */
let i=0


let button=document.querySelector(".navbar-button");
let body=document.querySelector("body")
button.addEventListener("click",function()
{
    body.classList.toggle('visible');
})



let mynumber=function()
{
    if(i===(name[0].length))
    {
        direction='toLeft'

    }
    if(i===0)
    {
        direction='toRight'
            contenair_whrite.textContent=''
    }
    if(direction==="toRight")
    {
        contenair_whrite.textContent+=name[0][i]
        i++
    }else{
        str=contenair_whrite.textContent;
        str=str.substring(0,str.length-1);
        contenair_whrite.textContent=str
        i--
    }
}
/*appartion au défilement*/
const ratio=0.1
options={
    root:null,
    rootMargin:'0px',
    threshold:ratio
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry){
        if(entry.intersectionRatio>ratio){
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
    })
}
document.documentElement.classList.add('reveal-loaded')
document.addEventListener("DOMContentLoaded", function(){
    const observer=new IntersectionObserver(handleIntersect,options)
    document.querySelectorAll("[class*='reveal']").forEach(function (r){
        observer.observe(r)
    })
})
stopNumber=window.setInterval(mynumber, 300)
