
gsap.from(".chemCycle h1",{
    opacity:0,
    duration:0.5,
    delay:0.5,
    x:-300
})

gsap.to("#heading h1",{
    transform:"translateX(-200%)",
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