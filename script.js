// ============================================================
// Wander Log — shared site behavior
// ============================================================

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}

// Contact form validation + submission feedback
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  const statusBox = document.getElementById('form-status');

  const showStatus = (message, type) => {
    statusBox.textContent = message;
    statusBox.className = `show ${type}`;
  };

  const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      showStatus('Please fill in your name, email, and message before sending.', 'error');
      return;
    }

    if (!isValidEmail(email)) {
      showStatus('That email address doesn\'t look quite right — please double-check it.', 'error');
      return;
    }

    // This is a static, front-end-only demo form. To actually deliver
    // messages to an inbox, connect this form to a service such as
    // Formspree, Getform, or a mailto: action, then replace this block
    // with the real submission call.
    showStatus(`Thanks, ${name} — your message is ready to send. (Connect a form backend to deliver it.)`, 'success');
    contactForm.reset();
  });
}
