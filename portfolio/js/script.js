document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    let lastScrollY = window.scrollY;
    let hideTimeout;

    // 1. Smart Navbar - Hide on scroll down, Show on scroll up (Samsung style)
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        // Clear any existing timeout
        clearTimeout(hideTimeout);

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scrolling DOWN - hide navbar with transition
            navbar.style.transform = 'translateY(-100%)';
            navbar.style.opacity = '0';
        } else {
            // Scrolling UP - show navbar instantly
            navbar.style.transform = 'translateY(0)';
            navbar.style.opacity = '1';
        }

        lastScrollY = currentScrollY;

        // Add scrolled class for shadow effect when visible
        if (currentScrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const sections = document.querySelectorAll('section[id]');
    const navAnchors = document.querySelectorAll('.nav-links a');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navAnchors.forEach(a => a.classList.remove('active'));
                const active = document.querySelector(
                    `.nav-links a[href="#${entry.target.id}"]`
                );
                if (active) active.classList.add('active');
            }
        });
    }, { threshold: 0.4 });
    sections.forEach(s => sectionObserver.observe(s));

    // Also show navbar when page loads (initial state)
    navbar.style.transform = 'translateY(0)';
    navbar.style.opacity = '1';

    // 2. Mobile Menu Toggle
    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenu.classList.toggle('is-active');
        });
    }

    // Close mobile menu when a link is clicked
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenu.classList.remove('is-active');
        });
    });

    // 3. Certificate Filter Functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    const certCards = document.querySelectorAll('.cert-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            certCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    // 4. Scroll Reveal Animation (Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
            }
        });
    }, observerOptions);

    // Apply observer to elements with .fade-in class
    const fadeElements = document.querySelectorAll('.fade-in, .skill-card, .project-card, .cert-card, .edu-card, .info-item, .contact-form');
    fadeElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // 5. Smooth Scrolling for Safari/older browsers
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 6. Contact Form Handling - Netlify Forms (no JS needed, handled by Netlify)
    const contactForm = document.getElementById('contactForm');
    const thankYouMessage = document.getElementById('thankYouMessage');
    const thankYouName = document.getElementById('thankYouName');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            // Netlify will handle the form submission
            // Just show thank you message after brief delay
            setTimeout(() => {
                const name = document.getElementById('name').value.trim();
                thankYouName.textContent = name;
                contactForm.style.display = 'none';
                thankYouMessage.style.display = 'block';
            }, 100);
        });
    }
});

// Reset form to send another message
function resetForm() {
    document.getElementById('contactForm').reset();
    document.getElementById('contactForm').style.display = 'block';
    document.getElementById('thankYouMessage').style.display = 'none';
}
