// Fungsi untuk menampilkan detail agenda
function showDetail(detail) {
    alert('Detail: ' + detail); // Placeholder, bisa diganti dengan modal
}

// Fungsi untuk modal dokumentasi
function openModal(src, desc) {
    document.getElementById('modal').style.display = 'flex';
    document.getElementById('modal-img').src = src;
    document.getElementById('modal-desc').textContent = desc;
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Animasi fade-in on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Kontrol audio player (opsional, untuk info track)
const audio = document.getElementById('audio-player');
audio.addEventListener('loadedmetadata', () => {
    const duration = Math.floor(audio.duration);
    document.getElementById('track-duration').textContent = `Durasi: ${Math.floor(duration / 60)}:${duration % 60}`;
});