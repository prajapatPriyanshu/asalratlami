/* ========================================
   ASAL RATLAMI SEV BHANDAR - JAVASCRIPT
   Interactive Features
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {

    // ========================================
    // MOBILE NAVIGATION
    // ========================================
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    navToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // ========================================
    // NAVBAR SCROLL EFFECT
    // ========================================
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        // Add/remove scrolled class
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // ========================================
    // ACTIVE NAV LINK HIGHLIGHTING
    // ========================================
    const sections = document.querySelectorAll('section[id]');

    function highlightNavLink() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNavLink);

    // ========================================
    // SCROLL REVEAL ANIMATIONS
    // ========================================
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // ========================================
    // BACK TO TOP BUTTON
    // ========================================
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ========================================
    // CONTACT FORM HANDLING
    // ========================================
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Simple validation
        if (!data.name || !data.phone || !data.orderType) {
            showNotification('Please fill in all required fields.', 'error');
            return;
        }

        // Phone validation (basic Indian format)
        const phoneRegex = /^[\+]?[0-9\s\-]{10,15}$/;
        if (!phoneRegex.test(data.phone.replace(/\s/g, ''))) {
            showNotification('Please enter a valid phone number.', 'error');
            return;
        }

        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span>⏳</span> Sending...';
        submitBtn.disabled = true;

        setTimeout(() => {
            showNotification('Thank you! Your enquiry has been sent. We will contact you soon.', 'success');
            contactForm.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });

    // ========================================
    // NOTIFICATION SYSTEM
    // ========================================
    function showNotification(message, type = 'success') {
        // Remove existing notifications
        const existing = document.querySelector('.notification');
        if (existing) existing.remove();

        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <span class="notification-icon">${type === 'success' ? '✅' : '⚠️'}</span>
            <span class="notification-text">${message}</span>
            <button class="notification-close">&times;</button>
        `;

        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 90px;
            right: 20px;
            background: ${type === 'success' ? '#ecfdf5' : '#fef2f2'};
            color: ${type === 'success' ? '#059669' : '#dc2626'};
            padding: 1rem 1.5rem;
            border-radius: 12px;
            box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
            display: flex;
            align-items: center;
            gap: 0.75rem;
            z-index: 10000;
            font-weight: 500;
            max-width: 400px;
            animation: slideInRight 0.3s ease-out;
            border: 1px solid ${type === 'success' ? '#a7f3d0' : '#fecaca'};
        `;

        document.body.appendChild(notification);

        // Close button
        notification.querySelector('.notification-close').addEventListener('click', () => {
            notification.remove();
        });

        // Auto remove
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.animation = 'slideOutRight 0.3s ease-out forwards';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }

    // Add notification animations to stylesheet
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOutRight {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
        .notification-close {
            background: none;
            border: none;
            font-size: 1.25rem;
            cursor: pointer;
            opacity: 0.5;
            transition: opacity 0.2s;
            margin-left: auto;
            color: inherit;
        }
        .notification-close:hover { opacity: 1; }
    `;
    document.head.appendChild(style);

    // ========================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========================================
    // PRODUCT CARD HOVER EFFECT (touch devices)
    // ========================================
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        card.addEventListener('touchstart', function() {
            this.classList.add('touch-hover');
        });

        card.addEventListener('touchend', function() {
            setTimeout(() => this.classList.remove('touch-hover'), 300);
        });
    });

    // ========================================
    // PARALLAX EFFECT FOR HERO (desktop only)
    // ========================================
    const hero = document.querySelector('.hero');

    if (window.matchMedia('(min-width: 1024px)').matches) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            if (scrolled < window.innerHeight) {
                hero.style.backgroundPositionY = (scrolled * 0.5) + 'px';
            }
        });
    }

    // ========================================
    // LAZY LOADING FOR IMAGES (if any added later)
    // ========================================
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    }

    // ========================================
    // PERFORMANCE: Debounce scroll events
    // ========================================
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Apply debounce to scroll handlers
    window.addEventListener('scroll', debounce(highlightNavLink, 10));

    console.log('🌶️ Asal Ratlami Sev Bhandar website loaded successfully!');
});
