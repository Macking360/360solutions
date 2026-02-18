(function () {
  const carousel = document.querySelector('[data-carousel]');
  if (!carousel) return;

  const track = carousel.querySelector('.carousel-track');
  const slides = Array.from(carousel.querySelectorAll('[data-slide]'));
  const prev = carousel.querySelector('[data-dir="prev"]');
  const next = carousel.querySelector('[data-dir="next"]');
  const dotsHost = document.querySelector('.carousel-dots');

  let index = 0;

  function setActive(nextIndex) {
    index = (nextIndex + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      const active = i === index;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', active ? 'false' : 'true');
    });

    if (dotsHost) {
      dotsHost.querySelectorAll('button').forEach((dot, i) => {
        dot.setAttribute('aria-selected', i === index ? 'true' : 'false');
      });
    }

    track.style.transform = 'translateX(' + (index * -100) + '%)';
  }

  if (dotsHost) {
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.setAttribute('aria-label', 'Go to product ' + (i + 1));
      dot.setAttribute('role', 'tab');
      dot.addEventListener('click', function () {
        setActive(i);
      });
      dotsHost.appendChild(dot);
    });
  }

  prev.addEventListener('click', function () {
    setActive(index - 1);
  });

  next.addEventListener('click', function () {
    setActive(index + 1);
  });

  track.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      setActive(index - 1);
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      setActive(index + 1);
    }
  });

  setActive(0);
})();
