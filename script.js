document.getElementById('applicationForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = {
    name: document.getElementById('name').value,
    phone: document.getElementById('phone').value,
    grade: document.getElementById('grade').value,
    email: document.getElementById('email').value,
    school: document.getElementById('school').value,
    level: document.getElementById('level').value,
    purpose: document.getElementById('purpose').value,
    extra: document.getElementById('extra').value
  };

  console.log('Отправка данных:', formData);  // Логируем

  try {
    const response = await fetch('http://localhost:3000/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();
    console.log('Ответ сервера:', result);

    if (response.ok) {
      alert('Сіздің өтінішіңіз сәтті жіберілді!');
      document.getElementById('applicationForm').reset();
    } else {
      alert(`Қате: ${result.message}`);
    }
  } catch (error) {
    console.error('Ошибка:', error);
    alert('Желі қатесі! Өтінеміз, кейінірек қайталаңыз.');
  }
});
document.addEventListener('DOMContentLoaded', function() {
  const video = document.getElementById('bg-video');
  
  // Fix for iOS autoplay
  video.play().catch(error => {
    // Fallback to poster image if video fails to play
    video.poster = 'images/video-fallback.jpg';
    video.load();
  });
  
  // Pause video when tab is inactive
  document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
      video.pause();
    } else {
      video.play();
    }
  });
});
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 3
    },
    576: {
      slidesPerView: 2
    },
    0: {
      slidesPerView: 1
    }
  }
});
