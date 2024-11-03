// //js/index.js
// (function() {
//   function $(id) {
//     return document.getElementById(id);
//   }

//   var card = $('card'),
//       openB = $('open'),
//       closeB = $('close'),
//       timer = null;
//   console.log('wat', card);
//   openB.addEventListener('click', function () {
//     card.setAttribute('class', 'open-half');
//     if (timer) clearTimeout(timer);
//     timer = setTimeout(function () {
//       card.setAttribute('class', 'open-fully');
//       timer = null;
//     }, 1000);
//   });

//   closeB.addEventListener('click', function () {
//     card.setAttribute('class', 'close-half');
//     if (timer) clearTimerout(timer);
//     timer = setTimeout(function () {
//       card.setAttribute('class', '');
//       timer = null;
//     }, 1000);
//   });

// }());

(function() {
  function $(id) {
    return document.getElementById(id);
  }

  var card = $('card'),
      openB = $('open'),
      closeB = $('close'),
      timer = null;
  
  function createConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    const colors = ['#f00', '#0f0', '#00f', '#ff0', '#f0f', '#0ff'];

    for (let i = 0 ; i < 100; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      
      confettiContainer.appendChild(confetti);

      confetti.animate([
        { transform: 'translate3d(0, 0, 0)', opacity: 1 },
        { transform: `translate3d(${Math.random() * 100 - 50}px, 100vh, 0)`, opacity: 0 }
      ], {
        duration: Math.random() * 3000 + 2000,
        easing: 'cubic-bezier(0, .9, .57, 1)',
        delay: Math.random() * 2000
      }).onfinish = function() {
        confetti.remove();
      };
    }
  }

  openB.addEventListener('click', function () {
    card.setAttribute('class', 'open-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', 'open-fully');
      createConfetti();
      timer = null;
    }, 1000);
  });

  closeB.addEventListener('click', function () {
    card.setAttribute('class', 'close-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', '');
      timer = null;
    }, 1000);
  });

  function createFirework(x, y) {
    const colors = ['#ff0', '#f0f', '#0ff', '#f00', '#0f0', '#00f'];
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'firework-particle';
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        document.body.appendChild(particle);

        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 5 + 2;
        const size = Math.random() * 4 + 2;

        particle.animate([
            { transform: `translate(0, 0) scale(1)`, opacity: 1 },
            { transform: `translate(${Math.cos(angle) * 100}px, ${Math.sin(angle) * 100}px) scale(0)`, opacity: 0 }
        ], {
            duration: Math.random() * 1000 + 500,
            easing: 'cubic-bezier(0, .9, .57, 1)'
        }).onfinish = () => particle.remove();
    }
}

// Add fireworks on double click
document.body.addEventListener('dblclick', (e) => {
    createFirework(e.clientX, e.clientY);
});

}());