/**
 * SmartBook Pro - Main JavaScript
 * Handles interactive landing page behavior, smooth transitions, and scroll events.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. DOM Elements
  // --------------------------------------------------------------------------
  const navbar = document.getElementById('mainNav');
  const navbarCollapse = document.getElementById('navbarContent');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link, .nav-scroll-link');
  const backToTopBtn = document.getElementById('backToTopBtn');
  const currentYearSpan = document.getElementById('currentYear');
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  // Set Current Year in Footer
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // --------------------------------------------------------------------------
  // 2. Navbar Scroll Behavior
  // --------------------------------------------------------------------------
  const handleNavbarScroll = () => {
    if (!navbar) return;
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll(); // Initial check on page load

  // --------------------------------------------------------------------------
  // 3. Smooth Scrolling with Sticky Navbar Offset
  // --------------------------------------------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();

        // Calculate offset for sticky navbar
        const navHeight = navbar ? navbar.offsetHeight : 0;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight - 16;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });

        // Close mobile navbar if open
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
          const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
          if (bsCollapse) {
            bsCollapse.hide();
          }
        }
      }
    });
  });

  // --------------------------------------------------------------------------
  // 4. Active Navigation Link on Scroll (ScrollSpy)
  // --------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');

  const handleActiveNavLink = () => {
    const scrollPosition = window.pageYOffset + (navbar ? navbar.offsetHeight + 100 : 120);

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        document.querySelectorAll(`.navbar-nav .nav-link[href*="#${sectionId}"]`).forEach((link) => {
          link.classList.add('active');
        });
      } else {
        document.querySelectorAll(`.navbar-nav .nav-link[href*="#${sectionId}"]`).forEach((link) => {
          link.classList.remove('active');
        });
      }
    });
  };

  window.addEventListener('scroll', handleActiveNavLink, { passive: true });

  // --------------------------------------------------------------------------
  // 5. Scroll Reveal Animations (IntersectionObserver)
  // --------------------------------------------------------------------------
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1,
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // Reveal once
        }
      });
    }, observerOptions);

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    // Fallback for older browsers
    revealElements.forEach((el) => el.classList.add('is-visible'));
  }

  // --------------------------------------------------------------------------
  // 6. Interactive Hero Booking Preview (Date & Time Selector)
  // --------------------------------------------------------------------------
  const datePills = document.querySelectorAll('.date-pill');
  datePills.forEach((pill) => {
    pill.addEventListener('click', function () {
      datePills.forEach((p) => p.classList.remove('active'));
      this.classList.add('active');
    });
  });

  const timeSlots = document.querySelectorAll('.time-slot');
  timeSlots.forEach((slot) => {
    slot.addEventListener('click', function () {
      timeSlots.forEach((s) => s.classList.remove('selected'));
      this.classList.add('selected');
    });
  });

  // --------------------------------------------------------------------------
  // 7. Back-To-Top Button
  // --------------------------------------------------------------------------
  const handleBackToTopVisibility = () => {
    if (!backToTopBtn) return;
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  };

  window.addEventListener('scroll', handleBackToTopVisibility, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }
});
