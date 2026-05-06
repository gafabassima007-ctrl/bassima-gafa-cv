// Effet de parallaxe sur les mouvements de souris pour les blobs
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    document.querySelector('.blob-1').style.transform = `translate(${x * 50}px, ${y * 50}px)`;
    document.querySelector('.blob-2').style.transform = `translate(${-x * 50}px, ${-y * 50}px)`;
});

// Apparition progressive des éléments au scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .section-title, .skill-pill').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s ease-out';
    observer.observe(el);
    // Effet de parallaxe sur les mouvements de souris pour les blobs ET la photo
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    // Les blobs bougent de manière opposée
    document.querySelector('.blob-1').style.transform = `translate(${x * 60}px, ${y * 60}px)`;
    document.querySelector('.blob-2').style.transform = `translate(${-x * 60}px, ${-y * 60}px)`;

    // La photo bouge très légèrement avec la souris
    const photo = document.querySelector('.hero-image-wrapper');
    if (photo) {
        photo.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
    }
});

// Apparition progressive des éléments au scroll (déjà existant)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .section-title, .skill-pill').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s ease-out';
    observer.observe(el);
});
// Animation des barres de progression
const langObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bars = entry.target.querySelectorAll('.progress');
            bars.forEach(bar => {
                bar.style.transform = 'scaleX(1)';
            });
        }
    });
}, { threshold: 0.5 });

const extrasSection = document.querySelector('#extras');
if (extrasSection) {
    langObserver.observe(extrasSection);
}
});