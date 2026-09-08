(() => {
  "use strict";
  // Native anchors and details work without JavaScript.
  if ("IntersectionObserver" in window) {
    const links = Array.from(document.querySelectorAll('nav a[href^="#"]'));
    const activeObserver = new IntersectionObserver((entries) => {
      const visible = entries.filter(entry => entry.isIntersecting);
      if (!visible.length) return;
      const id = visible[0].target.id;
      links.forEach(link => {
        if (link.hash === "#" + id) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    }, { rootMargin: "-15% 0px -55% 0px", threshold: 0 });
    links.forEach(link => {
      const section = document.querySelector(link.hash);
      if (section) activeObserver.observe(section);
    });
  }

  const globe = document.getElementById("visitor-globe");
  const status = document.getElementById("visitor-status");
  if (!globe || !status || !globe.dataset.mapId) return;
  let started = false;
  function loadGlobe() {
    if (started) return;
    started = true;
    status.textContent = "Loading the visitor globe…";
    const script = document.createElement("script");
    script.id = "clstr_globe";
    script.async = true;
    script.src = "https://clustrmaps.com/globe.js?d=" + encodeURIComponent(globe.dataset.mapId);
    let timeout;
    const observer = new MutationObserver(() => {
      if (globe.querySelector("canvas, iframe, img, #clustrmaps-widget-v2")) {
        status.hidden = true;
        clearTimeout(timeout);
        observer.disconnect();
      }
    });
    function unavailable() {
      if (status.hidden) return;
      status.textContent = "The visitor globe is temporarily unavailable. You can still open the visitor map below.";
    }
    observer.observe(globe, { childList: true, subtree: true });
    script.addEventListener("error", () => { unavailable(); clearTimeout(timeout); observer.disconnect(); });
    timeout = window.setTimeout(unavailable, 12000);
    globe.appendChild(script);
  }
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        loadGlobe();
        observer.disconnect();
      }
    }, { rootMargin: "350px" });
    observer.observe(globe);
  } else {
    loadGlobe();
  }
})();
