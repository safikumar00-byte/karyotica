document.addEventListener('DOMContentLoaded', () => {
  initReveals();
  initDesktopMenus();
  initMobileMenus();
  initOffcanvas();
  initBackToTop();
  initCounters();
  initTimelines();
  initTestimonials();
  initAnimatedText();
});

function initReveals() {
  const hidden = document.querySelectorAll('.site-hidden');
  if (!hidden.length) return;
  if (!('IntersectionObserver' in window)) {
    hidden.forEach((node) => {
      node.classList.remove('site-hidden');
      node.classList.add('site-revealed');
    });
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('site-hidden');
        entry.target.classList.add('site-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px' });
  hidden.forEach((node) => observer.observe(node));
}

function initDesktopMenus() {
  const desktopMenus = document.querySelectorAll('.site-nav-menu');
  if (!desktopMenus.length) return;

  const closeItem = (item) => {
    item.classList.remove('is-open');
    const toggle = item.querySelector(':scope > .site-submenu-toggle, :scope > .site-menu-item-group > .site-submenu-toggle');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
  };

  const openItem = (item) => {
    const siblings = item.parentElement ? item.parentElement.children : [];
    Array.from(siblings).forEach((sibling) => {
      if (sibling !== item && sibling.classList && sibling.classList.contains('menu-item-has-children')) {
        closeItem(sibling);
      }
    });
    item.classList.add('is-open');
    const toggle = item.querySelector(':scope > .site-submenu-toggle, :scope > .site-menu-item-group > .site-submenu-toggle');
    if (toggle) toggle.setAttribute('aria-expanded', 'true');
  };

  const closeAll = () => {
    document.querySelectorAll('.site-nav-menu .menu-item-has-children.is-open').forEach(closeItem);
  };

  desktopMenus.forEach((menu) => {
    menu.querySelectorAll('.menu-item-has-children').forEach((item) => {
      const link = item.querySelector(':scope > a, :scope > .site-menu-item-group > a');
      const toggle = item.querySelector(':scope > .site-submenu-toggle, :scope > .site-menu-item-group > .site-submenu-toggle');
      const submenu = item.querySelector(':scope > .site-sub-menu');
      if (!submenu) return;

      if (toggle) {
        toggle.setAttribute('aria-haspopup', 'true');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.addEventListener('click', (event) => {
          if (window.innerWidth <= 1024) return;
          event.preventDefault();
          event.stopPropagation();
          if (item.classList.contains('is-open')) {
            closeItem(item);
          } else {
            openItem(item);
          }
        });
      } else if (link) {
        link.setAttribute('aria-haspopup', 'true');
        link.setAttribute('aria-expanded', 'false');
        link.addEventListener('click', (event) => {
          if (window.innerWidth <= 1024) return;
          event.preventDefault();
          if (item.classList.contains('is-open')) {
            closeItem(item);
          } else {
            openItem(item);
          }
        });
      }

      item.addEventListener('keydown', (event) => {
        if (event.key !== 'Escape') return;
        closeItem(item);
        if (toggle) {
          toggle.focus();
        } else if (link) {
          link.focus();
        }
      });
    });
  });

  document.addEventListener('click', (event) => {
    if (event.target.closest('.site-nav-menu')) return;
    closeAll();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) return;
    closeAll();
  });
}

function initMobileMenus() {
  document.querySelectorAll('.site-mobile-toggle-wrap').forEach((wrap) => {
    const toggle = wrap.querySelector('.site-mobile-toggle');
    const menu = wrap.parentElement ? wrap.parentElement.querySelector('.site-mobile-nav-menu') : null;
    if (!toggle || !menu) return;
    toggle.setAttribute('role', 'button');
    toggle.setAttribute('tabindex', '0');
    const handler = () => menu.classList.toggle('is-open');
    toggle.addEventListener('click', handler);
    toggle.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        handler();
      }
    });
  });

  document.querySelectorAll('.site-mobile-nav-menu .menu-item-has-children > a').forEach((link) => {
    const submenu = link.parentElement ? link.parentElement.querySelector('.site-mobile-sub-menu') : null;
    if (!submenu) return;
    link.addEventListener('click', (event) => {
      if (window.innerWidth > 1024) return;
      event.preventDefault();
      submenu.classList.toggle('is-open');
    });
  });
}

function initOffcanvas() {
  document.querySelectorAll('.site-offcanvas-trigger').forEach((trigger) => {
    const host = trigger.closest('[class*="site-element-"]') || trigger.parentElement;
    if (!host) return;
    const panel = host.querySelector('.site-offcanvas-wrap') || document.querySelector('.site-offcanvas-wrap');
    if (!panel) return;
    const closeButton = panel.querySelector('.site-close-offcanvas');
    const openPanel = (event) => {
      event.preventDefault();
      panel.classList.add('is-open');
      document.body.classList.add('has-offcanvas');
    };
    const closePanel = () => {
      panel.classList.remove('is-open');
      document.body.classList.remove('has-offcanvas');
    };
    trigger.addEventListener('click', openPanel);
    if (closeButton) closeButton.addEventListener('click', closePanel);
    panel.addEventListener('click', (event) => {
      if (event.target === panel) closePanel();
    });
  });
}

function initBackToTop() {
  document.querySelectorAll('.site-stt-btn').forEach((button) => {
    const threshold = Number(button.dataset.offset || 120);
    const update = () => {
      if (window.scrollY > threshold) {
        button.classList.add('is-visible');
      } else {
        button.classList.remove('is-visible');
      }
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    button.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

function initCounters() {
  const counters = document.querySelectorAll('.site-counter-number, .elementor-counter-number');
  if (!counters.length) return;
  const animateCounter = (node) => {
    if (node.dataset.counted === 'yes') return;
    node.dataset.counted = 'yes';
    const from = Number(node.dataset.fromValue || node.textContent || '0');
    const to = Number(node.dataset.toValue || node.textContent || '0');
    const duration = Number(node.dataset.duration || 1600);
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const value = from + ((to - from) * progress);
      node.textContent = String(Math.round(value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  if (!('IntersectionObserver' in window)) {
    counters.forEach(animateCounter);
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.35 });
  counters.forEach((node) => observer.observe(node));
}

function getSlidesPerView(container, fallback) {
  const width = window.innerWidth;
  if (container.classList.contains('site-testimonial-slider-columns--mobile1') && width <= 767) return 1;
  if (container.classList.contains('site-testimonial-slider-columns--tablet1') && width <= 1024) return 1;
  return fallback;
}

function initTimelines() {
  document.querySelectorAll('.site-posts-timeline .swiper, .site-posts-timeline .site-wrapper.swiper, .site-posts-timeline .swiper-wrapper').forEach((rootNode) => {
    const root = rootNode.classList.contains('swiper') ? rootNode : rootNode.closest('.swiper');
    if (!root) return;
    const wrapper = root.querySelector('.swiper-wrapper');
    const slides = wrapper ? Array.from(wrapper.children).filter((node) => node.classList.contains('swiper-slide')) : [];
    if (!wrapper || !slides.length) return;
    const prev = root.parentElement ? root.parentElement.querySelector('.swiper-button-prev, .site-swiper-button-prev') : null;
    const next = root.parentElement ? root.parentElement.querySelector('.swiper-button-next, .site-swiper-button-next') : null;
    let index = 0;
    const render = () => {
      const perView = window.innerWidth <= 767 ? 1 : window.innerWidth <= 1024 ? 2 : Number(root.dataset.slidestoshow || 3);
      const maxIndex = Math.max(0, slides.length - perView);
      index = Math.max(0, Math.min(index, maxIndex));
      const offset = slides[0].offsetWidth + 4;
      wrapper.style.transform = `translate3d(${-1 * index * offset}px, 0, 0)`;
    };
    if (prev) prev.addEventListener('click', () => { index -= 1; render(); });
    if (next) next.addEventListener('click', () => { index += 1; render(); });
    window.addEventListener('resize', render);
    render();
  });
}

function initTestimonials() {
  document.querySelectorAll('.site-testimonial-carousel').forEach((carousel) => {
    const track = carousel.querySelector('.slick-track');
    const slides = track ? Array.from(track.children).filter((node) => node.classList.contains('slick-slide')) : [];
    if (!track || !slides.length) return;
    const container = carousel.closest('.site-widget-site-testimonial') || carousel.parentElement;
    const prev = container ? container.querySelector('.site-testimonial-prev-arrow') : null;
    const next = container ? container.querySelector('.site-testimonial-next-arrow') : null;
    let index = 0;
    const render = () => {
      const perView = getSlidesPerView(container || carousel, Number((container && container.dataset.testimonialAmount) || 2));
      const maxIndex = Math.max(0, slides.length - perView);
      index = Math.max(0, Math.min(index, maxIndex));
      const slideWidth = slides[0].offsetWidth;
      const gap = perView > 1 ? 18 : 0;
      track.style.transform = `translate3d(${-1 * index * (slideWidth + gap)}px, 0, 0)`;
      slides.forEach((slide, slideIndex) => {
        const active = slideIndex >= index && slideIndex < index + perView;
        slide.classList.toggle('slick-active', active);
        slide.classList.toggle('slick-current', slideIndex === index);
      });
    };
    if (prev) prev.addEventListener('click', () => { index -= 1; render(); });
    if (next) next.addEventListener('click', () => { index += 1; render(); });
    window.addEventListener('resize', render);
    render();
  });
}

function initAnimatedText() {
  document.querySelectorAll('.site-anim-text').forEach((node) => {
    const options = Array.from(node.querySelectorAll('b'));
    if (options.length <= 1) return;
    let index = 0;
    setInterval(() => {
      options[index].classList.remove('site-anim-text-visible');
      options[index].style.opacity = '0';
      index = (index + 1) % options.length;
      options[index].classList.add('site-anim-text-visible');
      options[index].style.opacity = '1';
    }, 2200);
  });
}
