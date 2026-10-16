// Keep links from the original single-page homepage working.
const legacySections = {
  '#education': 'about.html#education',
  '#work': 'about.html#work',
  '#research': 'research.html',
  '#project': 'projects.html',
  '#publication': 'publications.html',
  '#photos': 'photos.html',
};

function redirectLegacySection() {
  const destination = legacySections[window.location.hash];
  if (document.body.dataset.page === 'home' && destination) {
    window.location.replace(new URL(destination, window.location.href).href);
  }
}

redirectLegacySection();
window.addEventListener('hashchange', redirectLegacySection);

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');

if (menuButton && navigation) {
  // Without JavaScript the navigation remains visible at every screen size.
  document.documentElement.classList.add('js');

  function closeMenu(restoreFocus = false) {
    menuButton.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
    if (restoreFocus) menuButton.focus();
  }

  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    navigation.classList.toggle('is-open', !expanded);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      closeMenu(true);
    }
  });

  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });
}
