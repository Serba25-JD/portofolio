document.addEventListener('DOMContentLoaded', function() {

    // Header Click
    const navBar = document.querySelector('#navbar');
    document.querySelector('#menu').onclick = () => {
        navBar.classList.toggle('active');
    }
    // Menu Close if click on menu and navbar
    const menu = document.querySelector('#menu');
    document.addEventListener('click', function(e) {
        if(!menu.contains(e.target) &&  !navBar.contains(e.target))
            navBar.classList.remove('active');
    })
    // Menu Close
    const menux = document.querySelector('#menu-close');
    menux.onclick = () => {
        navBar.classList.remove('active');
    }

    // Scroll Up
    const scrollTopButton = document.querySelector('.scroll-top');
    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollTopButton.classList.add('active'); // Tambahkan kelas active
        } else {
            scrollTopButton.classList.remove('active'); // Hapus kelas active
        }
    });

    // Menambahkan event listener untuk scroll ke atas saat tombol diklik
    scrollTopButton.addEventListener('click', (e) => {
        e.preventDefault(); // Mencegah perilaku default anchor
        // Menggunakan animasi scroll ke atas
        smoothScrollTo(0, 800); // Scroll ke atas dalam 800ms untuk lebih halus
    });

    // Fungsi untuk scroll halus
    function smoothScrollTo(target, duration) {
        const start = window.scrollY; // Posisi awal
        const change = target - start; // Perubahan posisi
        const startTime = performance.now(); // Waktu mulai

        function animateScroll(currentTime) {
            const elapsed = currentTime - startTime; // Waktu yang telah berlalu
            const progress = Math.min(elapsed / duration, 1); // Normalisasi progress (0-1)
            const easeInOutQuad = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress; // Fungsi easing

            window.scrollTo(0, start + change * easeInOutQuad); // Scroll ke posisi baru

            // Mengupdate posisi tombol
            scrollTopButton.style.bottom = `${Math.max(20 - (change * easeInOutQuad), 0)}px`;

            if (elapsed < duration) {
                requestAnimationFrame(animateScroll); // Lanjutkan animasi
            } else {
                // Pastikan tombol kembali ke posisi awal setelah scroll selesai
                scrollTopButton.style.bottom = '20px';
            }
        }

        // Mulai animasi
        requestAnimationFrame(animateScroll);
    }
});

feather.replace();