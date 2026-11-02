// ndamood4sum – site interactions

document.addEventListener('DOMContentLoaded', () => {
  // Age gate (only on homepage if present)
  const ageGate = document.getElementById('ageGate');
  const enterBtn = document.getElementById('enterSite');
  const exitBtn = document.getElementById('exitSite');

  if (ageGate) {
    const passed = sessionStorage.getItem('ageVerified');
    if (passed === 'true') {
      ageGate.classList.add('hidden');
    }

    if (enterBtn) {
      enterBtn.addEventListener('click', () => {
        sessionStorage.setItem('ageVerified', 'true');
        ageGate.classList.add('hidden');
      });
    }

    if (exitBtn) {
      exitBtn.addEventListener('click', () => {
        window.location.href = 'https://www.google.com';
      });
    }
  }

  // Mobile menu
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');
    });

    // Close menu when a link is clicked
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
      });
    });
  }

  // Review filters
  const filterBtns = document.querySelectorAll('.filter-btn');
  const reviewCards = document.querySelectorAll('.review-card');

  if (filterBtns.length && reviewCards.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        reviewCards.forEach(card => {
          if (filter === 'all' || card.dataset.category === filter) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // Story expand/collapse
  const storyToggles = document.querySelectorAll('.story-toggle');

  storyToggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.target;
      const full = document.getElementById(targetId);
      if (!full) return;

      const isHidden = full.hasAttribute('hidden');
      if (isHidden) {
        full.removeAttribute('hidden');
        btn.textContent = 'Hide story';
      } else {
        full.setAttribute('hidden', '');
        btn.textContent = 'Read full story';
      }
    });
  });
});
