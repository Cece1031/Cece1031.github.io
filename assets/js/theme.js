(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');
  const themeMeta = document.querySelector('#theme-color-meta');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');

  if (!toggle) return;

  const savedTheme = () => {
    try {
      return localStorage.getItem('qingni-theme');
    } catch (error) {
      return null;
    }
  };

  const applyTheme = (theme, remember = false) => {
    const dark = theme === 'dark';
    root.dataset.theme = dark ? 'dark' : 'light';
    toggle.setAttribute('aria-pressed', String(dark));
    toggle.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    toggle.title = dark ? 'Switch to light mode' : 'Switch to dark mode';
    if (themeMeta) themeMeta.content = dark ? '#151217' : '#ffffff';

    if (remember) {
      try {
        localStorage.setItem('qingni-theme', root.dataset.theme);
      } catch (error) {
        // The selected theme still applies when storage is unavailable.
      }
    }
  };

  applyTheme(root.dataset.theme || (systemTheme.matches ? 'dark' : 'light'));

  toggle.addEventListener('click', () => {
    applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark', true);
  });

  if (systemTheme.addEventListener) {
    systemTheme.addEventListener('change', (event) => {
      if (!savedTheme()) applyTheme(event.matches ? 'dark' : 'light');
    });
  }
})();
