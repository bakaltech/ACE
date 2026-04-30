document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    if (toggleBtn && navLinks) {
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.addEventListener('click', () => {
            const isActive = navLinks.classList.toggle('mobile-active');
            toggleBtn.setAttribute('aria-expanded', String(isActive));
        });
    }

    const fadeElements = document.querySelectorAll('.fade-up');
    if (fadeElements.length) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });
        fadeElements.forEach(el => observer.observe(el));
    }

    const waBtn = document.getElementById('whatsappBtn');
    if (waBtn) {
        waBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'https://wa.me/?text=Hello%20Ace%20Properties';
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
                navLinks?.classList.remove('mobile-active');
            }
        });
    });

    const quoteForm = document.getElementById('quoteForm');
    if (quoteForm) {
        quoteForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('✅ Thank you. A senior advisor will respond within 2 hours.');
            this.reset();
        });
    }

    const statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers.length) {
        const counterObserver = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.getAttribute('data-target'), 10);
                    let current = 0;
                    const step = Math.max(Math.round(target / 50), 1);
                    const timer = setInterval(() => {
                        current += step;
                        if (current >= target) {
                            el.textContent = target;
                            clearInterval(timer);
                        } else {
                            el.textContent = current;
                        }
                    }, 20);
                    obs.unobserve(el);
                }
            });
        }, { threshold: 0.5 });
        statNumbers.forEach(el => counterObserver.observe(el));
    }

    const track = document.getElementById('testimonialTrack');
    const prevBtn = document.getElementById('prevTestimonial');
    const nextBtn = document.getElementById('nextTestimonial');
    if (track && prevBtn && nextBtn) {
        const testimonials = document.querySelectorAll('.testimonial-card');
        let index = 0;
        const totalSlides = testimonials.length;
        const updateCarousel = () => {
            track.style.transform = `translateX(-${index * 100}%)`;
        };
        nextBtn.addEventListener('click', () => {
            index = (index + 1) % totalSlides;
            updateCarousel();
        });
        prevBtn.addEventListener('click', () => {
            index = (index - 1 + totalSlides) % totalSlides;
            updateCarousel();
        });
        setInterval(() => {
            index = (index + 1) % totalSlides;
            updateCarousel();
        }, 5000);
    }
});

// Generic form handler (used on home page if needed)
function handleFormSubmit(e) {
    e.preventDefault();
    alert('✅ Message sent! (Demo notification)');
    e.target.reset();
}