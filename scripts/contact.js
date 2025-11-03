 document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            let isValid = true;
            
            if (name.length < 2) {
                document.getElementById('name-error').textContent = 'Имя должно содержать минимум 2 символа';
                isValid = false;
            } else {
                document.getElementById('name-error').textContent = '';
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                document.getElementById('email-error').textContent = 'Введите корректный email адрес';
                isValid = false;
            } else {
                document.getElementById('email-error').textContent = '';
            }
            
            if (message.length < 10) {
                document.getElementById('message-error').textContent = 'Сообщение должно содержать минимум 10 символов';
                isValid = false;
            } else {
                document.getElementById('message-error').textContent = '';
            }
            
            if (isValid) {
                alert('Сообщение отправлено!');
                this.reset();
            }
        });