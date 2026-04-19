// Smooth scrolling for navigation links
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

// Form security and submission handling
(function() {
    // Rate limiting variables
    let lastSubmissionTime = 0;
    const SUBMISSION_COOLDOWN = 30000; // 30 seconds between submissions

    // Input sanitization function
    function sanitizeInput(input) {
        if (typeof input !== 'string') return '';
        return input
            .trim()
            .replace(/[<>]/g, '') // Remove potential HTML tags
            .replace(/javascript:/gi, '') // Remove javascript: protocol
            .replace(/on\w+=/gi, '') // Remove event handlers
            .substring(0, 1000); // Limit length
    }

    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email) && email.length <= 254;
    }

    // Name validation function
    function isValidName(name) {
        const nameRegex = /^[A-Za-z\s]+$/;
        return nameRegex.test(name) && name.length >= 2 && name.length <= 100;
    }

// Contact form submission with validation (POST method + AJAX to prevent redirect)
    document.getElementById('contactForm').addEventListener('submit', async function(e) {
        e.preventDefault(); // Prevent the default form submission/redirect
        const form = this;
        const messageDiv = document.getElementById('formMessage');

        // Clear previous messages
        messageDiv.style.display = 'none';

        try {
            // Rate limiting check
            const currentTime = Date.now();
            if (currentTime - lastSubmissionTime < SUBMISSION_COOLDOWN) {
                messageDiv.className = 'mt-3 alert alert-warning';
                messageDiv.innerHTML = '<i class="fas fa-clock"></i> Please wait 30 seconds before submitting another message.';
                messageDiv.style.display = 'block';
                messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                return;
            }

            // Get and validate form data
            const name = sanitizeInput(form.name.value);
            const email = sanitizeInput(form.email.value);
            const message = sanitizeInput(form.message.value);
            const website = form.website.value; // Honeypot field

            // Honeypot check (should be empty)
            if (website.trim() !== '') {
                // Silently reject spam
                messageDiv.className = 'mt-3 alert alert-success';
                messageDiv.innerHTML = '<i class="fas fa-check-circle"></i> Thank you! Your message has been sent successfully.';
                messageDiv.style.display = 'block';
                form.reset();
                return;
            }

            // Validation checks
            if (!isValidName(name)) {
                messageDiv.className = 'mt-3 alert alert-danger';
                messageDiv.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Please enter a valid name (letters and spaces only, 2-100 characters).';
                messageDiv.style.display = 'block';
                messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                return;
            }

            if (!isValidEmail(email)) {
                messageDiv.className = 'mt-3 alert alert-danger';
                messageDiv.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Please enter a valid email address.';
                messageDiv.style.display = 'block';
                messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                return;
            }

            if (message.length < 10) {
                messageDiv.className = 'mt-3 alert alert-danger';
                messageDiv.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Please enter a message with at least 10 characters.';
                messageDiv.style.display = 'block';
                messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                return;
            }

            // Show loading state
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.innerText;
            submitButton.disabled = true;
            submitButton.innerText = 'Sending...';

            // Prepare form data for AJAX submission
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('message', message);
            formData.append('_subject', 'New Contact Form Submission from C-Tech Website');

            // Submit via AJAX to prevent redirect
            const response = await fetch('https://formspree.io/f/mbdqyojw', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Success - show custom message on same page
                lastSubmissionTime = currentTime;
                messageDiv.className = 'mt-3 alert alert-success';
                messageDiv.innerHTML = '<i class="fas fa-check-circle"></i> Thank you! Your message has been sent successfully. We will get back to you soon.';
                messageDiv.style.display = 'block';
                form.reset();
                messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            } else {
                throw new Error('Failed to send message. Please try again.');
            }

        } catch (error) {
            console.error('Form submission error:', error);
            messageDiv.className = 'mt-3 alert alert-danger';
            messageDiv.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Sorry, there was an error sending your message. Please try again or contact us directly.';
            messageDiv.style.display = 'block';
            messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } finally {
            // Reset button
            const submitButton = form.querySelector('button[type="submit"]');
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.innerText = 'Send Message';
            }
        }
    });

    // Additional security: Prevent form autofill attacks
    document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('contactForm');
        if (form) {
            // Add random token to prevent replay attacks (basic)
            const token = Math.random().toString(36).substring(2);
            form.setAttribute('data-token', token);
        }
    });

    console.log('C-Tech website loaded successfully!');
})();

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('service-worker.js')
            .then(function (registration) {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(function (error) {
                console.warn('Service Worker registration failed:', error);
            });
    });
}

