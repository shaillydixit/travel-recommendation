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

// Destination search (Search / Clear) — filters the recommendation
// postcards on the Home page by keyword.
const navSearch = document.getElementById('navSearch');
const searchInput = document.getElementById('searchInput');
const clearBtn = document.getElementById('clearBtn');
const postcards = document.querySelectorAll('.postcard[data-keywords]');
const noResultsMsg = document.getElementById('searchNoResults');

if (navSearch && postcards.length) {
  const runSearch = () => {
    const term = searchInput.value.trim().toLowerCase();
    let matches = 0;

    postcards.forEach((card) => {
      const keywords = card.getAttribute('data-keywords').toLowerCase();
      const isMatch = term === '' || keywords.includes(term);
      card.classList.toggle('is-hidden', !isMatch);
      if (isMatch) matches += 1;
    });

    if (noResultsMsg) {
      noResultsMsg.hidden = !(term !== '' && matches === 0);
    }

    if (term !== '' && matches > 0) {
      const firstMatch = document.querySelector('.postcard[data-keywords]:not(.is-hidden)');
      if (firstMatch) firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  navSearch.addEventListener('submit', (event) => {
    event.preventDefault();
    runSearch();
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      postcards.forEach((card) => card.classList.remove('is-hidden'));
      if (noResultsMsg) noResultsMsg.hidden = true;
    });
  }
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
