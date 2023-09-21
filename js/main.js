document.addEventListener('DOMContentLoaded', function() {
      const navBtn = document.querySelector('.nav-hamburger');

      const tl2 = gsap.timeline({defaults: {ease: Expo.easeOut, duration: 1 }});

      navBtn.addEventListener('click', () =>{
            if(navBtn.classList.contains('active')) {
                  navBtn.classList.remove('active');
                  tl2.play();
            } else {
                  navBtn.classList.add('active');
                  tl2.to('.nav-open-wrapper', { y: 0, opacity: 1 })
                        .to('.open-nav-link', { y: 0, stagger: .3, opacity: 1 }, "-=1");
            }
      });

      
});