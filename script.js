
// Configuration Keys
const SERVICE_KEY = 'service_fsi';
const TEMPLATE_KEY = 'template_0vzlhzl';
const PUBLIC_KEY = '-g92D7sGubq8Ykbxm';

// ========== Mobile Menu Toggle ==========
document.addEventListener('DOMContentLoaded', function () {
    if (window.emailjs) {
        // This project uses EmailJS browser v3 from CDN, which expects init(publicKey).
        emailjs.init(PUBLIC_KEY);
    }

    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    /**
     * Toggle mobile navigation menu
     */
    function toggleMenu() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    }

    /**
     * Close mobile menu when a link is clicked
     */
    function closeMenu() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }

    // Hamburger click event
    hamburger.addEventListener('click', toggleMenu);

    // Close menu when a nav link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            closeMenu();
            updateActiveNavLink(this);
        });
    });

    // ========== Active Navigation Link ==========
    /**
     * Update active nav link based on current section
     * @param {HTMLElement} link - The nav link element
     */
    function updateActiveNavLink(link) {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    }

    /**
     * Update active nav link on scroll
     */
    window.addEventListener('scroll', function () {
        let current = '';
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // ========== Smooth Scrolling ==========
    /**
     * Smooth scroll to sections
     */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ========== Form Validation ==========
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const subjectSelect = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    const submitButton = contactForm.querySelector('.submit-button');

    // Regular expressions for validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9\s\-\+\(\)]{0,20}$/;

    /**
     * Display error message for a form field
     * @param {HTMLElement} input - The input element
     * @param {string} message - Error message to display
     */
    function showError(input, message) {
        const formGroup = input.closest('.form-group');
        const errorElement = formGroup.querySelector('.error-message');

        formGroup.classList.add('error');
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }

    /**
     * Clear error message for a form field
     * @param {HTMLElement} input - The input element
     */
    function clearError(input) {
        const formGroup = input.closest('.form-group');
        const errorElement = formGroup.querySelector('.error-message');

        formGroup.classList.remove('error');
        errorElement.textContent = '';
        errorElement.classList.remove('show');
    }

    /**
     * Validate name field
     * @returns {boolean} - True if valid, false otherwise
     */
    function validateName() {
        const name = nameInput.value.trim();

        if (!name) {
            showError(nameInput, 'Name is required');
            return false;
        }

        if (name.length < 3) {
            showError(nameInput, 'Name must be at least 3 characters');
            return false;
        }

        if (!/^[a-zA-Z\s'-]+$/.test(name)) {
            showError(nameInput, 'Name can only contain letters, spaces, hyphens, and apostrophes');
            return false;
        }

        clearError(nameInput);
        return true;
    }

    /**
     * Validate email field
     * @returns {boolean} - True if valid, false otherwise
     */
    function validateEmail() {
        const email = emailInput.value.trim();

        if (!email) {
            showError(emailInput, 'Email is required');
            return false;
        }

        if (!emailRegex.test(email)) {
            showError(emailInput, 'Please enter a valid email address');
            return false;
        }

        clearError(emailInput);
        return true;
    }

    /**
     * Validate phone field (optional but validate if provided)
     * @returns {boolean} - True if valid, false otherwise
     */
    function validatePhone() {
        const phone = phoneInput.value.trim();

        if (phone && !phoneRegex.test(phone)) {
            showError(phoneInput, 'Please enter a valid phone number');
            return false;
        }

        clearError(phoneInput);
        return true;
    }

    /**
     * Validate subject field
     * @returns {boolean} - True if valid, false otherwise
     */
    function validateSubject() {
        if (!subjectSelect.value) {
            showError(subjectSelect, 'Please select a subject');
            return false;
        }

        clearError(subjectSelect);
        return true;
    }

    /**
     * Validate message field
     * @returns {boolean} - True if valid, false otherwise
     */
    function validateMessage() {
        const message = messageInput.value.trim();

        if (!message) {
            showError(messageInput, 'Message is required');
            return false;
        }

        if (message.length < 10) {
            showError(messageInput, 'Message must be at least 10 characters');
            return false;
        }

        if (message.length > 5000) {
            showError(messageInput, 'Message cannot exceed 5000 characters');
            return false;
        }

        clearError(messageInput);
        return true;
    }

    /**
     * Real-time validation on input
     */
    nameInput.addEventListener('blur', validateName);
    nameInput.addEventListener('input', function () {
        if (this.value.trim()) validateName();
    });

    emailInput.addEventListener('blur', validateEmail);
    emailInput.addEventListener('input', function () {
        if (this.value.trim()) validateEmail();
    });

    phoneInput.addEventListener('blur', validatePhone);
    phoneInput.addEventListener('input', function () {
        if (this.value.trim()) validatePhone();
    });

    subjectSelect.addEventListener('blur', validateSubject);
    subjectSelect.addEventListener('change', validateSubject);

    messageInput.addEventListener('blur', validateMessage);
    messageInput.addEventListener('input', function () {
        if (this.value.trim()) validateMessage();
    });

    /**
     * Form submission handler
     */
    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        // Validate all fields
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPhoneValid = validatePhone();
        const isSubjectValid = validateSubject();
        const isMessageValid = validateMessage();

        // If all fields are valid
        if (isNameValid && isEmailValid && isPhoneValid && isSubjectValid && isMessageValid) {
            const successMessage = document.getElementById('successMessage');
            const submitLabel = submitButton.textContent;

            successMessage.textContent = '';
            successMessage.classList.remove('show', 'error-state');
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';

            const templateParams = {
                from_name: sanitizeInput(nameInput.value.trim()),
                from_email: sanitizeInput(emailInput.value.trim()),
                reply_to: sanitizeInput(emailInput.value.trim()),
                phone: sanitizeInput(phoneInput.value.trim() || 'Not provided'),
                subject: sanitizeInput(subjectSelect.value),
                subject_label: sanitizeInput(subjectSelect.options[subjectSelect.selectedIndex].text),
                message: sanitizeInput(messageInput.value.trim()),
                to_name: 'Fraud Shield India Team'
            };

            try {
                if (!window.emailjs) {
                    throw new Error('EmailJS library is not available');
                }

                // EmailJS v3 signature: send(serviceID, templateID, templateParams, publicKey)
                await emailjs.send(SERVICE_KEY, TEMPLATE_KEY, templateParams, PUBLIC_KEY);

                successMessage.textContent = 'Thank you! Your message has been sent successfully. We will get back to you soon.';
                successMessage.classList.remove('error-state');
                successMessage.classList.add('show');

                console.log('Form submitted successfully via EmailJS:', templateParams);
                contactForm.reset();

                setTimeout(function () {
                    successMessage.textContent = '';
                    successMessage.classList.remove('show');
                }, 5000);
            } catch (error) {
                const errorReason = error && (error.text || error.message) ? (error.text || error.message) : 'Unknown EmailJS error';
                successMessage.textContent = `Unable to send your message right now. ${errorReason}`;
                successMessage.classList.add('show', 'error-state');
                console.error('EmailJS submission failed:', error);
                console.error(`EmailJS error details: ${errorReason}`);
            } finally {
                submitButton.disabled = false;
                submitButton.textContent = submitLabel;
            }
        }
    });

    // ========== Animations on Scroll ==========
    /**
     * Add fade-in animation to elements when they come into view
     */
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe service cards and feature items
    document.querySelectorAll('.service-card, .feature-item, .stat-card').forEach(element => {
        element.style.opacity = '0';
        observer.observe(element);
    });

    // ========== Utility Functions ==========
    /**
     * Sanitize user input to prevent XSS attacks
     * @param {string} input - The user input to sanitize
     * @returns {string} - Sanitized string
     */
    function sanitizeInput(input) {
        const div = document.createElement('div');
        div.textContent = input;
        return div.innerHTML;
    }

    // ========== Performance: Lazy Loading ==========
    /**
     * Lazy load images if supported by browser
     */
    if ('IntersectionObserver' in window) {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    // ========== Keyboard Accessibility ==========
    /**
     * Close mobile menu on Escape key
     */
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    // ========== Scroll to Top Button ==========
    /**
     * Show/hide scroll to top button based on scroll position
     */
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.2rem;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 10px 30px rgba(0, 102, 204, 0.3);
    `;

    document.body.appendChild(scrollToTopBtn);

    // Show/hide scroll to top button
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });

    // Scroll to top on button click
    scrollToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ========== Console Logging ==========
    console.log('%c🛡️ Fraud Shield India', 'font-size: 20px; font-weight: bold; color: #00d9ff;');
    console.log('%cWelcome to Fraud Shield India - Advanced Cybersecurity Solutions', 'font-size: 14px; color: #0066cc;');
    console.log('%cVersion: 1.0.0 | Ready for Production', 'font-size: 12px; color: #94a3b8;');
});

// ========== Service Worker Registration (PWA Support) ==========
/**
 * Register service worker for offline functionality
 */
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        // Service worker registration code can be added here
    });
}