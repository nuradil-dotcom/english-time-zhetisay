document.getElementById('applicationForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const form = e.target;

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
      showPopup(); // ВОТ ОН — ПОКАЗЫВАЕМ!
      form.reset();
    } else {
      alert(`Қате: ${result.message}`);
    }
  } catch (error) {
    console.error('Ошибка:', error);
    alert('Желі қатесі! Өтінеміз, кейінірек қайталаңыз.');
  }
});

// функция попапа
function showPopup() {
  const popup = document.querySelector('.popup');
  popup.style.display = 'block';
  setTimeout(() => {
    popup.style.display = 'none';
  }, 4000);
}
