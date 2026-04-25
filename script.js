  // EMAILJS CONFIG

  const EMAILJS_PUBLIC_KEY  = '3v8PdzmjsfLCDjtkw';   //Public Key
  const EMAILJS_SERVICE_ID  = 'service_m4h1cfm';   //service id
  const EMAILJS_TEMPLATE_ID = 'template_0xod7pw';  //template id

  emailjs.init(EMAILJS_PUBLIC_KEY);

  function sendEmail() {
    const name    = document.getElementById('from_name').value.trim();
    const email   = document.getElementById('from_email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !subject || !message) {
      showError('Please fill in all fields before sending.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showError('Please enter a valid email address.');
      return;
    }

    const btn = document.getElementById('send-btn');
    btn.textContent = 'Sending...';
    btn.disabled = true;
    btn.style.opacity = '0.7';
    document.getElementById('form-error').style.display = 'none';

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      from_name:  name,
      from_email: email,
      subject:    subject,
      message:    message,
      to_email:   'devanshkuraria22@gmail.com'
    }).then(() => {
      document.getElementById('form-fields').style.display = 'none';
      document.getElementById('form-success').style.display = 'block';
    }).catch(() => {
      btn.textContent = 'Send Message →';
      btn.disabled = false;
      btn.style.opacity = '1';
      showError('Failed to send. Please try again or email me directly at devanshkuraria22@gmail.com');
    });
  }

  function showError(msg) {
    const el = document.getElementById('form-error');
    el.textContent = '⚠️ ' + msg;
    el.style.display = 'block';
  }

  function resetForm() {
    document.getElementById('from_name').value = '';
    document.getElementById('from_email').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';
    document.getElementById('form-fields').style.display = 'block';
    document.getElementById('form-success').style.display = 'none';
    document.getElementById('form-error').style.display = 'none';
    const btn = document.getElementById('send-btn');
    btn.textContent = 'Send Message →';
    btn.disabled = false;
    btn.style.opacity = '1';
  }

 // Cursor dot
  const cursor = document.getElementById('cursor');
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX - 4 + 'px';
    cursor.style.top = e.clientY - 4 + 'px';
  });

  // Scroll progress
  const bar = document.getElementById('progressBar');
  window.addEventListener('scroll', () => {
    const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    bar.style.width = scrolled + '%';
  });

  // Reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        // Animate skill bars
        e.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
          bar.style.width = bar.dataset.w + '%';
        });
      }
    });
  }, { threshold: 0.15 });
  reveals.forEach(r => observer.observe(r));

  // Staggered children
  document.querySelectorAll('.services-grid, .skills-container, .projects-grid').forEach(grid => {
    Array.from(grid.children).forEach((child, i) => {
      child.style.transitionDelay = (i * 0.08) + 's';
    });
  });

  // Header shrink on scroll
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    header.style.padding = window.scrollY > 60 ? '12px 60px' : '20px 60px';
  });