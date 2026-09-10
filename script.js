/* ========================================
   APP SEGURANÇA — Interações JavaScript
   ======================================== */

(function () {
  'use strict';

  /* ---------- Smooth scroll to section ---------- */
  function scrollToSection(id) {
    var el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  /* ---------- Attach click handlers to all [data-target] ---------- */
  var scrollButtons = document.querySelectorAll('[data-target]');
  scrollButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      scrollToSection(btn.getAttribute('data-target'));
      closeMobileMenu();
    });
  });

  /* ---------- Mobile menu toggle ---------- */
  var mobileToggle = document.getElementById('mobile-toggle');
  var mobileMenu = document.getElementById('mobile-menu');
  var menuIconOpen = document.getElementById('menu-icon-open');
  var menuIconClose = document.getElementById('menu-icon-close');

  function openMobileMenu() {
    mobileMenu.style.display = 'block';
    menuIconOpen.style.display = 'none';
    menuIconClose.style.display = 'block';
  }

  function closeMobileMenu() {
    mobileMenu.style.display = 'none';
    menuIconOpen.style.display = 'block';
    menuIconClose.style.display = 'none';
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', function () {
      if (mobileMenu.style.display === 'block') {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  /* ---------- Header scroll effect + active nav tracking ---------- */
  var header = document.getElementById('header');
  var sections = ['inicio', 'problema', 'solucao', 'funcionalidades', 'contato'];
  var navLinks = document.querySelectorAll('.nav-link');
  var mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function handleScroll() {
    // Header shadow
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Active section detection
    var activeId = null;
    for (var i = 0; i < sections.length; i++) {
      var el = document.getElementById(sections[i]);
      if (el) {
        var rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          activeId = sections[i];
          break;
        }
      }
    }

    if (activeId) {
      navLinks.forEach(function (link) {
        if (link.getAttribute('data-target') === activeId) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
      mobileNavLinks.forEach(function (link) {
        if (link.getAttribute('data-target') === activeId) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  /* ---------- Reveal on scroll (IntersectionObserver) ---------- */
  var revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var el = entry.target;
            var delay = el.getAttribute('data-delay') || '0';
            el.style.animationDelay = delay + 's';
            el.classList.add('is-visible');
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: just show everything
    revealElements.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  /* ---------- Contact form (demonstrative) ---------- */
  var contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Mensagem enviada! (Demonstração — nenhum dado foi realmente enviado.)');
      contactForm.reset();
    });
  }
})();
