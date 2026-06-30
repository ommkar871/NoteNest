// const btnCreate=document.getElementById("create-btn")

// btnCreate.addEventListener("click",()=>{
//     window.location.href = "/components/landing.html";
// })
document.getElementById("form-signin").addEventListener("submit",(e)=>{
    e.preventDefault()
    window.location.href = "/components/landing.html"
})
var tl = gsap.timeline();

tl.from(".card",{
    y:600,
    opacity:0,
    duration:0.8,
    delay:0.15
})
tl.from(".right h2",{
    y:-50,
    opacity:0,
    duration:0.3
})
tl.from("form input",{
    x:-100,
    opacity:0,
    duration:0.3,
    stagger:0.28
})
tl.from("form button,form p,label",{
    x:-100,
    opacity:0,
    duration:0.3,
    stagger:0.28
})
// 