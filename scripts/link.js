
document.addEventListener('DOMContentLoaded', function() {
    const scrollBtn = document.querySelector('.skip-link');
    
    if (scrollBtn) {
        // Убираем стандартное поведение ссылки
        scrollBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Прокрутка к следующей секции (skills-section)
            const skillsSection = document.querySelector('.skills-section');
            if (skillsSection) {
                skillsSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            } else {
                // Если секции skills нет, прокручиваем просто вниз
                window.scrollBy({
                    top: window.innerHeight,
                    behavior: 'smooth'
                });
            }
            
            // Убираем анимацию подпрыгивания после клика, но кнопка остается
            this.classList.remove('initial-bounce');
            this.classList.add('no-animation');
        });

        // Обработка фокуса для доступности
        scrollBtn.addEventListener('focus', function() {
            this.style.opacity = '1';
        });

        scrollBtn.addEventListener('blur', function() {
            this.style.opacity = '0.8';
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const scrollBtn = document.getElementById('scrollDownBtn');
    
    if (scrollBtn) {
        console.log('Кнопка прокрутки найдена'); // Для отладки
        
        scrollBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('Кнопка нажата'); // Для отладки
            
            // Сохраняем ссылку на кнопку
            const button = this;
            
            // Прокрутка к skills-section
            const skillsSection = document.querySelector('.skills-section');
            if (skillsSection) {
                skillsSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            } else {
                // Альтернатива - прокрутка вниз
                window.scrollBy({
                    top: window.innerHeight,
                    behavior: 'smooth'
                });
            }
            
            // Убираем анимацию, но кнопка остается
            button.classList.remove('initial-bounce');
            button.classList.add('no-animation');
            
            // Гарантируем, что кнопка остается видимой
            setTimeout(() => {
                button.style.display = 'flex';
                button.style.visibility = 'visible';
                button.style.opacity = '0.8';
            }, 100);
        });

        // Дополнительные обработчики для надежности
        scrollBtn.addEventListener('mousedown', function(e) {
            e.preventDefault();
        });

        scrollBtn.addEventListener('touchstart', function(e) {
            e.preventDefault();
        });

        // Обработка фокуса для доступности
        scrollBtn.addEventListener('focus', function() {
            this.style.opacity = '1';
            this.style.outline = '3px solid #2563eb';
            this.style.outlineOffset = '2px';
        });

        scrollBtn.addEventListener('blur', function() {
            this.style.opacity = '0.8';
            this.style.outline = 'none';
        });
        
        // Гарантируем, что кнопка всегда видима при загрузке
        scrollBtn.style.display = 'flex';
        scrollBtn.style.visibility = 'visible';
    } else {
        console.log('Кнопка прокрутки не найдена'); // Для отладки
    }
});

// Дополнительная защита - перепроверяем кнопку после полной загрузки
window.addEventListener('load', function() {
    const scrollBtn = document.getElementById('scrollDownBtn');
    if (scrollBtn) {
        scrollBtn.style.display = 'flex';
        scrollBtn.style.visibility = 'visible';
        scrollBtn.style.opacity = '0.8';
    }
});
