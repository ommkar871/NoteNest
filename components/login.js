var tl = gsap.timeline();

tl.from(".login-form-wrapper",{
    yPercent:90,
    opacity:0,
    duration:0.8,
    delay:0.5
}).from(".right-form .logo-icon,.right-form p,.right-form span",{
    yPercent:100,
    duration:0.2,
    opacity:0
})
.from(".welcome-title h1,.welcome-title p",{
    xPercent:-50,
    opacity:0,
    duration:0.2
})
.from(".input-group",{
    xPercent:-50,
    duration:0.2,
    opacity:0
})
.from(".input-group label,.input-grouup input",{
    opacity:0,
    duration:0.2
},"+=0.1").from(".forgot-password-container",{
    xPercent:-50,
    opacity:0,
    duration:0.2
},"<"
).from(".btn-login,.divider,.btn-google",{
    xPercent:-50,
    opacity:0
}).from(".signup-text",{
    xPercent:-50,
    opacity:0
},"-=0.1")

// const loginBtn=document.getElementById("btn-login-id")

// loginBtn.addEventListener("click",()=>{
//     window.location.href = "/components/landing.html";
// })

document.getElementById("login-form").addEventListener("submit",(e)=>{
    e.preventDefault()
    window.location.href = "/components/landing.html"
})