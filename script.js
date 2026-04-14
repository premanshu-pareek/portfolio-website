// Ensure GSAP and ScrollTrigger are loaded before running animations
document.addEventListener('DOMContentLoaded', () => {
    
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Hero Section Animations
    const heroTl = gsap.timeline();
    
    heroTl.from(".greeting", { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" })
          .from(".name", { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.4")
          .from(".role", { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.4")
          .from(".summary", { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.4")
          .from(".cta-group", { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.4")
          .from(".main-card", { x: 50, opacity: 0, duration: 0.8, ease: "back.out(1.7)" }, "-=0.4")
          .from(".small-card-1", { x: -30, opacity: 0, duration: 0.8, ease: "back.out(1.7)" }, "-=0.6")
          .from(".small-card-2", { y: 30, opacity: 0, duration: 0.8, ease: "back.out(1.7)" }, "-=0.6");

    // Section Headers Animation
    gsap.utils.toArray('.section-header').forEach(header => {
        gsap.from(header, {
            scrollTrigger: {
                trigger: header,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        });
    });

    // About Content Animation
    gsap.from(".about-text-content", {
        scrollTrigger: {
            trigger: ".about",
            start: "top 70%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    // Experience Timeline Animation
    gsap.utils.toArray('.timeline-group').forEach((group) => {
        const header = group.querySelector('.company-header');
        const items = group.querySelectorAll('.timeline-item');
        
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: group,
                start: "top 80%",
            }
        });

        tl.from(header, { x: -30, opacity: 0, duration: 0.6, ease: "power3.out" })
          .from(items, { x: -20, opacity: 0, duration: 0.6, stagger: 0.2, ease: "power3.out" }, "-=0.3");
    });

    // Projects Grid Animation
    gsap.utils.toArray('.project-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: ".projects-grid",
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.15,
            ease: "power3.out"
        });
    });

    // Contact Box Animation
    gsap.from(".contact-box", {
        scrollTrigger: {
            trigger: ".contact",
            start: "top 80%",
        },
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.5)"
    });
});
