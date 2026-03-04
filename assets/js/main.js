(function () {
  var body = document.body;
  var header = document.getElementById("header");
  var menu = document.getElementById("menu");
  var menuToggle = document.getElementById("menuToggle");
  var menuClose = document.getElementById("menuClose");
  var menuLinks = menu ? menu.querySelectorAll("a[href^='#']") : [];

  function setMenuState(isOpen) {
    body.classList.toggle("is-menu-visible", isOpen);
    if (menuToggle) {
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    }
    if (menu) {
      menu.setAttribute("aria-hidden", String(!isOpen));
    }
  }

  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      setMenuState(!body.classList.contains("is-menu-visible"));
    });
  }

  if (menuClose) {
    menuClose.addEventListener("click", function () {
      setMenuState(false);
    });
  }

  menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      setMenuState(false);
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      setMenuState(false);
    }
  });

  function syncHeader() {
    if (!header) {
      return;
    }
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  }

  syncHeader();
  window.addEventListener("scroll", syncHeader, { passive: true });
  body.classList.remove("is-preload");
})();
