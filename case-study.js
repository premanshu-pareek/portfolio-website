// Case Study Page — Animations & Interactions
document.addEventListener('DOMContentLoaded', () => {

    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Navbar Scroll Effect (shared with main page)
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ===========================
    // Hero Entrance Animation
    // ===========================
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    heroTl
        .from('.cs-back-link', { y: -15, opacity: 0, duration: 0.4 })
        .from('.cs-category', { y: 20, opacity: 0, duration: 0.5 }, '-=0.2')
        .from('.cs-title', { y: 30, opacity: 0, duration: 0.6 }, '-=0.3')
        .from('.cs-subtitle', { y: 20, opacity: 0, duration: 0.5 }, '-=0.3')
        .from('.cs-meta-item', {
            y: 15, opacity: 0, duration: 0.4,
            stagger: 0.1
        }, '-=0.2')
        .from('.cs-hero-visual', {
            y: 40, opacity: 0, duration: 0.8,
            ease: 'power2.out'
        }, '-=0.3');

    // ===========================
    // Mockup subtle animations
    // ===========================
    gsap.to('.cs-mock-stat-card', {
        boxShadow: '0 4px 20px rgba(46, 125, 78, 0.15)',
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.5
    });

    // ===========================
    // Section Header Animations
    // ===========================
    gsap.utils.toArray('.cs-section-header').forEach(header => {
        gsap.from(header, {
            scrollTrigger: {
                trigger: header,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out'
        });
    });

    // ===========================
    // Overview Two-Column Panels
    // ===========================
    gsap.utils.toArray('.cs-two-col .cs-col-text').forEach((col, i) => {
        gsap.from(col, {
            scrollTrigger: {
                trigger: col,
                start: 'top 85%',
            },
            y: 40,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.15,
            ease: 'power3.out'
        });
    });

    // ===========================
    // Research Cards
    // ===========================
    gsap.utils.toArray('.cs-research-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: '.cs-research-grid',
                start: 'top 80%',
            },
            y: 50,
            opacity: 0,
            duration: 0.7,
            delay: i * 0.12,
            ease: 'power3.out'
        });
    });

    // ===========================
    // Key Insights
    // ===========================
    gsap.from('.cs-insights', {
        scrollTrigger: {
            trigger: '.cs-insights',
            start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    });

    gsap.utils.toArray('.cs-insight-item').forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: '.cs-insights',
                start: 'top 75%',
            },
            x: -30,
            opacity: 0,
            duration: 0.6,
            delay: 0.3 + i * 0.15,
            ease: 'power3.out'
        });
    });

    // ===========================
    // Process Timeline Steps
    // ===========================
    gsap.utils.toArray('.cs-process-step').forEach((step, i) => {
        gsap.from(step, {
            scrollTrigger: {
                trigger: step,
                start: 'top 85%',
            },
            x: -30,
            opacity: 0,
            duration: 0.7,
            delay: i * 0.1,
            ease: 'power3.out'
        });
    });

    // ===========================
    // Solution Feature Cards
    // ===========================
    gsap.utils.toArray('.cs-feature-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
            },
            y: 40,
            opacity: 0,
            duration: 0.7,
            delay: i * 0.15,
            ease: 'power3.out'
        });
    });

    // ===========================
    // Results Cards — Counter Animation
    // ===========================
    const resultCards = document.querySelectorAll('.cs-result-card');

    resultCards.forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: '.cs-results-grid',
                start: 'top 80%',
            },
            scale: 0.85,
            opacity: 0,
            duration: 0.6,
            delay: i * 0.12,
            ease: 'back.out(1.4)'
        });
    });

    // Animate result numbers
    const resultNumbers = document.querySelectorAll('.cs-result-number');
    resultNumbers.forEach(el => {
        const text = el.textContent;
        const hasPlus = text.includes('+');
        const hasMinus = text.includes('-');
        const numericValue = parseFloat(text.replace(/[^0-9.]/g, ''));

        ScrollTrigger.create({
            trigger: '.cs-results-grid',
            start: 'top 80%',
            onEnter: () => {
                const obj = { val: 0 };
                gsap.to(obj, {
                    val: numericValue,
                    duration: 2,
                    ease: 'power2.out',
                    onUpdate: () => {
                        const prefix = hasPlus ? '+' : hasMinus ? '-' : '';
                        const suffix = text.includes('%') ? '%' : '';
                        el.textContent = prefix + Math.round(obj.val) + suffix;
                    }
                });
            },
            once: true
        });
    });

    // ===========================
    // Testimonial
    // ===========================
    gsap.from('.cs-testimonial', {
        scrollTrigger: {
            trigger: '.cs-testimonial',
            start: 'top 80%',
        },
        scale: 0.92,
        opacity: 0,
        duration: 0.9,
        ease: 'back.out(1.3)'
    });

    // ===========================
    // Key Learnings
    // ===========================
    gsap.utils.toArray('.cs-learning-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: '.cs-learnings-grid',
                start: 'top 80%',
            },
            y: 50,
            opacity: 0,
            duration: 0.7,
            delay: i * 0.15,
            ease: 'power3.out'
        });
    });

    // ===========================
    // Navigation CTA
    // ===========================
    gsap.from('.cs-nav-cta', {
        scrollTrigger: {
            trigger: '.cs-nav-section',
            start: 'top 85%',
        },
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.5)'
    });
});
