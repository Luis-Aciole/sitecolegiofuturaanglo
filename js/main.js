/* ============================================
   Colégio Futura Anglo — JavaScript Principal
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* --- Menu Hamburger --- */
  const hamburger = document.getElementById('hamburger');
  const navList = document.getElementById('navList');
  const navOverlay = document.getElementById('navOverlay');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navList.classList.toggle('active');
      navOverlay.classList.toggle('active');
      document.body.style.overflow = navList.classList.contains('active') ? 'hidden' : '';
    });

    if (navOverlay) {
      navOverlay.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navList.classList.remove('active');
        navOverlay.classList.remove('active');
        document.body.style.overflow = '';
      });
    }

    // Fechar menu ao clicar em link
    navList.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navList.classList.remove('active');
        navOverlay.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  /* --- Header Scroll Effect --- */
  const header = document.getElementById('header');

  if (header && !header.classList.contains('scrolled')) {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
  }

  /* --- Fade-in Animation (Intersection Observer) --- */
  const fadeElements = document.querySelectorAll('.fade-in');

  if (fadeElements.length > 0) {
    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Adiciona delay escalonado para elementos em grid
          const delay = index * 100;
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
          fadeObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    fadeElements.forEach(el => fadeObserver.observe(el));
  }

  /* --- Counter Animation --- */
  const statNumbers = document.querySelectorAll('.stat-number[data-count]');

  if (statNumbers.length > 0) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statNumbers.forEach(el => counterObserver.observe(el));
  }

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-count'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = Math.floor(current).toLocaleString('pt-BR');
      if (target >= 100) {
        el.textContent += '+';
      }
    }, 16);
  }

  /* --- Máscara de Telefone --- */
  const telefoneInput = document.getElementById('telefone');

  if (telefoneInput) {
    telefoneInput.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, '');

      if (value.length > 11) {
        value = value.slice(0, 11);
      }

      if (value.length > 6) {
        value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
      } else if (value.length > 2) {
        value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
      } else if (value.length > 0) {
        value = `(${value}`;
      }

      e.target.value = value;
    });
  }

  /* --- Formulário de Contato --- */
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nome = document.getElementById('nome').value.trim();
      const email = document.getElementById('email').value.trim();
      const telefone = document.getElementById('telefone').value.trim();
      const mensagem = document.getElementById('mensagem').value.trim();

      // Validação básica
      if (!nome || !email || !telefone || !mensagem) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
      }

      // Validação de e-mail
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Por favor, insira um e-mail válido.');
        return;
      }

      // Simular envio
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin" style="margin-right: 8px;"></i> Enviando...';
      submitBtn.disabled = true;

      setTimeout(() => {
        contactForm.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        formSuccess.classList.add('show');

        setTimeout(() => {
          formSuccess.classList.remove('show');
        }, 5000);
      }, 1500);
    });
  }

  /* --- Smooth Scroll para links âncora --- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
        const targetPosition = targetElement.offsetTop - headerHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  /* --- Animação de hover nas redes sociais do footer --- */
  document.querySelectorAll('.footer-social a, .contact-info-card a').forEach(link => {
    link.addEventListener('mouseenter', function () {
      this.style.transform = 'translateY(-3px)';
    });
    link.addEventListener('mouseleave', function () {
      this.style.transform = 'translateY(0)';
    });
  });

});
