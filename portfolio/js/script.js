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

    // 6. Contact Form Handling - Store details & show thank you
    const contactForm = document.getElementById('contactForm');
    const thankYouMessage = document.getElementById('thankYouMessage');
    const thankYouName = document.getElementById('thankYouName');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            const contactData = {
                name: name,
                email: email,
                message: message,
                timestamp: new Date().toISOString()
            };

            let contacts = JSON.parse(localStorage.getItem('portfolio_contacts')) || [];
            contacts.push(contactData);
            localStorage.setItem('portfolio_contacts', JSON.stringify(contacts));

            thankYouName.textContent = name;
            contactForm.style.display = 'none';
            thankYouMessage.style.display = 'block';
        });
    }
});

// Reset form to send another message
function resetForm() {
    document.getElementById('contactForm').reset();
    document.getElementById('contactForm').style.display = 'block';
    document.getElementById('thankYouMessage').style.display = 'none';
}

// Admin Panel - View contacts with ?admin=true in URL
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('admin') === 'true') {
        showAdminPanel();
    }
});

function showAdminPanel() {
    const contacts = JSON.parse(localStorage.getItem('portfolio_contacts')) || [];
    const adminPanel = document.getElementById('adminPanel');
    const adminContent = document.getElementById('adminContent');

    if (contacts.length === 0) {
        adminContent.innerHTML = '<p style="text-align: center; color: #6b7280;">No connections yet.</p>';
    } else {
        let html = '';
        contacts.reverse().forEach((contact, index) => {
            const date = new Date(contact.timestamp).toLocaleString();
            html += `
                <div class="contact-entry">
                    <div class="contact-number">#${contacts.length - index}</div>
                    <div class="contact-details">
                        <p><strong>Name:</strong> ${contact.name}</p>
                        <p><strong>Email:</strong> ${contact.email}</p>
                        <p><strong>Message:</strong> ${contact.message}</p>
                        <p class="contact-time">${date}</p>
                    </div>
                </div>
            `;
        });
        adminContent.innerHTML = html;
    }

    adminPanel.style.display = 'block';
}

function closeAdmin() {
    document.getElementById('adminPanel').style.display = 'none';
}

function clearContacts() {
    if (confirm('Are you sure you want to clear all contacts?')) {
        localStorage.removeItem('portfolio_contacts');
        showAdminPanel();
    }
}
