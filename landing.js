const video = document.getElementById('bg-video');
const searchSection = document.getElementById('search-section');
const notesForm = document.getElementById('notes-form');
const cycleInput = document.getElementById('cycle-input');

gsap.to(".hidden-herosection,.hidden-herosection div",{
    opacity:0,
    delay:2,
    duration:1,
    z:-100,
    display:"none",
    onComplete: () => {
        video.play();
    }
})


video.addEventListener('timeupdate', () => {
    if (video.currentTime >= 7 && !video.paused && !searchSection.classList.contains('form-submitted')) {
        video.pause();
        searchSection.classList.remove('hidden'); // Make search-section visible
        gsap.from(".search-section",{
            opacity:0,
            duration:1,
            ease:"power1.out"
        })
    }
});

notesForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    
    const userChoice = cycleInput.value;
    console.log("User requested notes for:", userChoice); 
    
    searchSection.classList.add('hidden');
    gsap.to(".search-section",{
            opacity:0,
            duration:0,
            ease:"power1.out"
        })
    searchSection.classList.add('form-submitted'); 
    
    video.play(); 
});

video.addEventListener('ended', () => {
    // You can customize the destination URL dynamically based on userChoice if needed
    window.location.href = "https://your-destination-library-site.com"; 
});