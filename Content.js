var menu = document.querySelector(".menu");
var cross  = document.querySelector("#full i");
gsap.from(".chemCycle h1",{
    opacity:0,
    duration:0.5,
    delay:0.5,
    x:-300
})

gsap.to("#heading h1",{
    transform:"translateX(50%)",
    scrollTrigger:{
        trigger:"#heading h1",
        scroller:"body",
        
        start:"top 0%",
        end:"top -100%",
        scrub:3,
        pin:true,
         
    }
})


gsap.from(".mathCycle h1",{
    opacity:0,
    duration:0.5,
    delay:0.5,
    x:-300
})

gsap.from(".trend",{
  y:100,
  opacity:0,
  stagger:0.28,
  duartion:0.6,
  scrollTrigger:{
    
    trigger:".trendNotes",
    start:"top 110%",
    end:"top 0%",
   
    markers:false
  }

  }
)

var tl = gsap.timeline();

tl.from(".subject",{
    x:500,
    duration:0.5,
    delay:0.5,
    opacity:0,
    stagger:0.3
})
const counters = document.querySelectorAll('.counter');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      const target = +counter.getAttribute('data-target');
      const increment = target / 2000000; // Adjust speed here

      const updateCount = () => {
        const current = +counter.innerText;
        if (current < target) {
          counter.innerText = Math.ceil(current + increment);
          setTimeout(updateCount, 900);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
      observer.unobserve(counter); // Animate only once
    }
  });
}, { threshold: 0.5 });

counters.forEach(counter => observer.observe(counter));


var ti = gsap.timeline();
ti.to("#full",{
  left:0,
  duration:0.4,
  
})

ti.from("#full p",{
  x:-50,
  
  opacity:0,
  duration:0.5,
  stagger:0.28
})

ti.pause();

menu.addEventListener("click",function(){
  ti.play();
})
cross.addEventListener("click",function(){
  ti.reverse();
})





