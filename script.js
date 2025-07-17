// 🔄 Load mode dari localStorage
if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.classList.add('dark');
}

// 🌙 Toggle Dark Mode
const toggle = document.getElementById('toggleDark');
toggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');

  // Simpan ke localStorage
  if (document.documentElement.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.removeItem('theme');
  }
});


// ✍️ Typing Effect Hero Section
const typedText = document.querySelector('.typed-text');
const words = ["Web Developer", "Data Analys"];
let wordIndex = 0;
let charIndex = 0;
let typingDelay = 100;
let erasingDelay = 60;
let newWordDelay = 1000;

function type() {
  if (charIndex < words[wordIndex].length) {
    typedText.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newWordDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, typingDelay);
  }
}

// 🚀 On Page Load
document.addEventListener("DOMContentLoaded", function () {
  // 🔠 Typing effect start
  if (words.length) setTimeout(type, newWordDelay);

  // 📊 Fill Technical Skill pixel blocks
  document.querySelectorAll('.pixel-bar').forEach(bar => {
    const level = parseInt(bar.getAttribute('data-level'));
    const blocks = bar.querySelectorAll('.pixel-block');
    blocks.forEach((block, index) => {
      if (index < level) block.classList.add('filled');
    });
  });

  // 🔵 Animate Circular Personal Skill
  document.querySelectorAll('.circle-skill').forEach(circle => {
    const value = circle.getAttribute('data-percent');
    const circlePath = circle.querySelector('circle:nth-child(2)');
    const offset = 314 - (314 * value) / 100;
    circlePath.style.strokeDashoffset = offset;
  });
});
// 📘 Book-style Project Carousel
document.querySelectorAll('.tab-button').forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');

    // Sembunyikan semua halaman
    document.querySelectorAll('.book-page').forEach(page => {
      page.classList.remove('active');
    });

    // Tampilkan halaman target
    document.getElementById(targetId).classList.add('active');
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const emailInput = form.querySelector('input[name="email"]');

  form.addEventListener("submit", function (event) {
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!emailRegex.test(email)) {
      alert("Masukkan email yang valid (misal: nama@email.com).");
      event.preventDefault(); // cegah pengiriman form
    }
  });
});



