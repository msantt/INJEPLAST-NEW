
        // Smooth scroll para links de navegação
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Header com efeito ao scroll
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                header.style.boxShadow = '0 2px 30px rgba(60, 179, 113, 0.2)';
            } else {
                header.style.boxShadow = '0 2px 20px rgba(60, 179, 113, 0.1)';
            }
            
            lastScroll = currentScroll;
        });

        // Formulário de contato
        document.querySelector('.contato-form form').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Obrigado pelo contato! Retornaremos em breve.');
            e.target.reset();
        });

        // Animações de entrada ao scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.card, .cliente-card, .info-item').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease';
            observer.observe(el);
        });

    let currentIndex = 0;

    function moveSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slides img').length;
    const slideWidth = document.querySelector('.carrossel-div').offsetWidth;

    currentIndex += direction;

    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }

    const offset = -currentIndex * slideWidth;
    slides.style.transform = `translateX(${offset}px)`;
}

// Opcional: Faz girar sozinho a cada 5 segundos
let tempoSlide = 5000; // Seus 8 segundos
let slideTimer;

// Função para iniciar/reiniciar o tempo
function iniciarAutoPlay() {
    stopAutoPlay(); // Garante que não existam dois timers rodando juntos
    slideTimer = setInterval(() => {
        moveSlide(1);
    }, tempoSlide);
}

// Função para parar o tempo
function stopAutoPlay() {
    clearInterval(slideTimer);
}

// Seleciona seu carrossel
const carrosselArea = document.querySelector('.carrossel-div');

// Eventos de Mouse
carrosselArea.addEventListener('mouseenter', stopAutoPlay); // Pausa ao entrar
carrosselArea.addEventListener('mouseleave', iniciarAutoPlay); // Reinicia ao sair

// Inicia o carrossel pela primeira vez
iniciarAutoPlay();



/*  function abrirLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    lightboxImg.src = src; // Define a imagem que foi clicada
    lightbox.style.display = 'flex'; // Mostra o modal
    
    // Pequeno delay para a animação de escala funcionar
    setTimeout(() => {
        lightbox.classList.add('ativo');
    }, 10);
};

    function fecharLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('ativo');
    
    // Espera a animação acabar para esconder o display
    setTimeout(() => {
        lightbox.style.display = 'none';
    }, 300);
}; */

// Função para ativar o efeito
function aplicarRevelacao() {
    const elementos = document.querySelectorAll('.revelar');
    
    // Se o navegador for muito antigo ou der erro, mostra tudo de vez
    if (!('IntersectionObserver' in window)) {
        elementos.forEach(el => el.style.opacity = "1");
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visivel');
            } else {
                // Remove se quiser que suma ao subir o scroll
                entry.target.classList.remove('visivel');
            }
        });
    }, { threshold: 0.1 });

    elementos.forEach(el => observer.observe(el));
}

// Executa assim que o HTML carregar
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', aplicarRevelacao);
} else {
    aplicarRevelacao();
}