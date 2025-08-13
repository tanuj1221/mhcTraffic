// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Hero Carousel Functionality
    const carousel = {
        slides: document.querySelectorAll('.carousel-slide'),
        dots: document.querySelectorAll('.carousel-dot'),
        prevBtn: document.querySelector('.carousel-prev'),
        nextBtn: document.querySelector('.carousel-next'),
        currentSlide: 0,
        autoplayDelay: 5000,
        autoplayTimer: null,

        init() {
            if (this.slides.length === 0) return;
            
            this.bindEvents();
            this.startAutoplay();
            this.showSlide(0);
        },

        bindEvents() {
            // Next/Previous buttons
            this.nextBtn?.addEventListener('click', () => this.nextSlide());
            this.prevBtn?.addEventListener('click', () => this.prevSlide());

            // Dot indicators
            this.dots.forEach((dot, index) => {
                dot.addEventListener('click', () => this.goToSlide(index));
            });

            // Pause autoplay on hover
            const carouselContainer = document.querySelector('.carousel-container');
            carouselContainer?.addEventListener('mouseenter', () => this.stopAutoplay());
            carouselContainer?.addEventListener('mouseleave', () => this.startAutoplay());

            // Keyboard navigation
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') this.prevSlide();
                if (e.key === 'ArrowRight') this.nextSlide();
            });
        },

        showSlide(index) {
            // Remove active class from all slides and dots
            this.slides.forEach(slide => slide.classList.remove('active'));
            this.dots.forEach(dot => dot.classList.remove('active'));

            // Add active class to current slide and dot
            this.slides[index]?.classList.add('active');
            this.dots[index]?.classList.add('active');

            this.currentSlide = index;
        },

        nextSlide() {
            const nextIndex = (this.currentSlide + 1) % this.slides.length;
            this.goToSlide(nextIndex);
        },

        prevSlide() {
            const prevIndex = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
            this.goToSlide(prevIndex);
        },

        goToSlide(index) {
            this.showSlide(index);
            this.restartAutoplay();
        },

        startAutoplay() {
            this.stopAutoplay();
            this.autoplayTimer = setInterval(() => {
                this.nextSlide();
            }, this.autoplayDelay);
        },

        stopAutoplay() {
            if (this.autoplayTimer) {
                clearInterval(this.autoplayTimer);
                this.autoplayTimer = null;
            }
        },

        restartAutoplay() {
            this.stopAutoplay();
            this.startAutoplay();
        }
    };

    // Initialize carousel
    carousel.init();

    const header = document.querySelector('.dt-header');
    const mobileToggle = document.querySelector('.dt-mobile-toggle');
    const nav = document.querySelector('.dt-nav');
    const dropdownItems = document.querySelectorAll('.dt-nav__item--has-dropdown');

    // Handle scroll for header background
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('dt-header--scrolled');
            header.classList.remove('dt-header--transparent');
        } else {
            header.classList.remove('dt-header--scrolled');
            header.classList.add('dt-header--transparent');
        }
    });

    // Mobile menu toggle
    mobileToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        this.classList.toggle('active');
        // Add background to header when mobile menu is open
        header.classList.toggle('dt-header--scrolled');
    });

    // Mobile dropdown toggle
    dropdownItems.forEach(item => {
        item.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                this.classList.toggle('active');
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!nav.contains(e.target) && !mobileToggle.contains(e.target)) {
            nav.classList.remove('active');
            mobileToggle.classList.remove('active');
        }
    });

    // Initialize ScrollReveal animations
    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            origin: 'bottom',
            distance: '60px',
            duration: 2000,
            delay: 200,
            reset: false
        });

        // Hero section animations
        sr.reveal('.dt-hero__title', { delay: 300, distance: '100px' });
        sr.reveal('.dt-hero__cta', { delay: 500, origin: 'top' });

        // About section animations
        sr.reveal('.dt-about__title', { delay: 200 });
        sr.reveal('.dt-about__underline', { delay: 300, distance: '30px' });
        sr.reveal('.dt-about__header-card', { delay: 400, distance: '60px' });
        sr.reveal('.dt-about-card', { 
            delay: 500, 
            interval: 200,
            origin: 'bottom',
            distance: '50px'
        });

        // Why Choose Us section animations
        sr.reveal('.dt-why-choose__title', { delay: 200, origin: 'top' });
        sr.reveal('.dt-why-choose__underline', { delay: 300, distance: '30px' });
        sr.reveal('.dt-why-choose-card', { 
            delay: 400, 
            interval: 150,
            origin: 'bottom',
            distance: '60px'
        });

        // Coverage section animations
        sr.reveal('.dt-coverage__title', { delay: 200, origin: 'top' });
        sr.reveal('.dt-coverage__underline', { delay: 300, distance: '30px' });
        sr.reveal('.dt-coverage__description', { delay: 400, origin: 'bottom' });
        sr.reveal('.dt-coverage__feature', { 
            delay: 500, 
            interval: 200,
            origin: 'bottom',
            distance: '60px'
        });

        // Leadership section animations
        sr.reveal('.dt-leadership__title', { delay: 200, origin: 'top' });
        sr.reveal('.dt-leadership__underline', { delay: 300, distance: '30px' });
        sr.reveal('.dt-leadership__subtitle', { delay: 400, origin: 'bottom' });
        sr.reveal('.dt-leadership-card', { 
            delay: 500, 
            interval: 200,
            origin: 'bottom',
            distance: '60px'
        });

        // Services section animations
        sr.reveal('.dt-services__title', { delay: 200 });
        sr.reveal('.dt-service-card', { 
            delay: 300, 
            interval: 200,
            origin: 'bottom',
            distance: '50px'
        });
        sr.reveal('.dt-services__overview-header', { delay: 400, origin: 'top' });
        sr.reveal('.dt-service-detail-card', { 
            delay: 500, 
            interval: 300,
            origin: 'bottom',
            distance: '60px'
        });

        // Specialized Services section animations
        sr.reveal('.dt-specialized-services__title', { delay: 200, origin: 'top' });
        sr.reveal('.dt-specialized-services__underline', { delay: 300, distance: '30px' });
        sr.reveal('.dt-specialized-card', { 
            delay: 400, 
            interval: 100,
            origin: 'bottom',
            distance: '50px'
        });

        // Video surveillance section animations
        sr.reveal('.surveillance-title', { delay: 200 });
        sr.reveal('.surveillance-description', { delay: 300, origin: 'left' });
        sr.reveal('.surveillance-subtext', { delay: 400, origin: 'right' });
        sr.reveal('.feature-card', { 
            delay: 500, 
            interval: 300,
            origin: 'bottom',
            distance: '60px'
        });

        // Contact section animations
        sr.reveal('.mhc-contact-header', { delay: 200 });
        sr.reveal('.mhc-info-card', { 
            delay: 300, 
            interval: 200,
            origin: 'left',
            distance: '50px'
        });
        sr.reveal('.mhc-contact-form-container', { 
            delay: 500, 
            origin: 'right',
            distance: '60px'
        });

        // Footer animations
        sr.reveal('.mhc-footer-section', { 
            delay: 200, 
            interval: 150,
            origin: 'bottom',
            distance: '40px'
        });
    }
});