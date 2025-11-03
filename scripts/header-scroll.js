document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const skipLink = document.querySelector('.skip-link');
    
    // Функция для обработки скролла
    function handleScroll() {
        const scrollY = window.scrollY;
        
        if (scrollY > 50) {
            header.classList.add('header-scrolled');
            
            // Плавное изменение прозрачности
            const opacity = Math.min(scrollY / 300, 0.95);
            header.style.backgroundColor = `rgba(235, 236, 38, ${0.95 - opacity})`; 
            
        } else {
            header.classList.remove('header-scrolled');
            header.style.backgroundColor = '#ebec26';
        }
    }
    
    // Функция для Skip Link
    function handleSkipLink() {
        skipLink.addEventListener('focus', function() {
            this.style.top = '1rem';
        });
        
        skipLink.addEventListener('blur', function() {
            this.style.top = '-100%';
        });
    }
    
    // Инициализация
    function init() {
        // Уважение к снижению движения
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            header.style.transition = 'none';
            return;
        }
        
        // Инициализация skip link
        if (skipLink) {
            handleSkipLink();
        }
        
        // Обработчик скролла с троттлингом
        let ticking = false;
        window.addEventListener('scroll', function() {
            if (!ticking) {
                requestAnimationFrame(function() {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        });
        
        // Первоначальный вызов
        handleScroll();
    }
    
    init();
});
// Скрипт для стрелочки прокрутки вниз
document.addEventListener('DOMContentLoaded', function() {
    const skipLink = document.querySelector('.skip-link');
    
    if (skipLink) {
        // Изменяем назначение ссылки
        skipLink.href = '#main-content';
        skipLink.setAttribute('aria-label', 'Прокрутить к основному содержимому');
        
        // Добавляем обработчик клика
        skipLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Прокрутка к основному контенту
            const mainContent = document.getElementById('main');
            if (mainContent) {
                // Плавная прокрутка с учетом отступа хедера
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = mainContent.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Устанавливаем фокус на main для accessibility
                mainContent.setAttribute('tabindex', '-1');
                mainContent.focus();
            }
        });
        
        // Альтернатива: прокрутка на одну высоту экрана
        const scrollDownBtn = document.createElement('button');
        scrollDownBtn.className = 'skip-link';
        scrollDownBtn.setAttribute('aria-label', 'Прокрутить вниз');
        scrollDownBtn.innerHTML = '↓';
        
        scrollDownBtn.addEventListener('click', function() {
            // Прокрутка на 90% высоты экрана
            const windowHeight = window.innerHeight;
            const scrollPosition = window.scrollY + (windowHeight * 1);
            
            window.scrollTo({
                top: scrollPosition,
                behavior: 'smooth'
            });
        });
    }
});