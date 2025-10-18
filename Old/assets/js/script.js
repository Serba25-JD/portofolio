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

// Proteksi Developer
(function(){
  function _0x4c3a(_0x57bc){return atob(_0x57bc);}
  
  const _0x2d9f = {
    ctxmenu: _0x4c3a('Y29udGV4dG1lbnQ='),
    prevent: 'preventDefault',
    keydown: _0x4c3a('a2V5ZG93bg=='),
    f12: _0x4c3a('RjEy'),
    ctrl: 'ctrlKey',
    shift: 'shiftKey',
    keyI: _0x4c3a('SQ=='),
    keyJ: _0x4c3a('Sg=='),
    keyU: _0x4c3a('VQ=='),
    google: _0x4c3a('aHR0cHM6Ly9zZXJiYTI1LWpkLmdpdGh1Yi5pby9wb3J0b2ZvbGlvLw=='),
    selectstart: _0x4c3a('c2VsZWN0c3RhcnQ='),
    dragstart: _0x4c3a('ZHJhZ3N0YXJ0'),
    addEventListener: 'addEventListener'
  };

  document[_0x2d9f.addEventListener](_0x2d9f.ctxmenu, function(e) {
    e[_0x2d9f.prevent]();
  });

  document[_0x2d9f.addEventListener](_0x2d9f.keydown, function(e) {
    if (
      e.key === _0x2d9f.f12 ||
      (e[_0x2d9f.ctrl] && e[_0x2d9f.shift] && (e.key === _0x2d9f.keyI || e.key === _0x2d9f.keyJ)) ||
      (e[_0x2d9f.ctrl] && e.key === _0x2d9f.keyU)
    ) {
      e[_0x2d9f.prevent]();
      window.location.href = _0x2d9f.google;
    }
  });

  setInterval(function() {
    const start = new Date();
    debugger;
    const end = new Date();
    if (end - start > 150) {
      window.location.href = _0x2d9f.google;
    }
  }, 1000);

  document[_0x2d9f.addEventListener](_0x2d9f.selectstart, function(e){e.preventDefault();});
  document[_0x2d9f.addEventListener](_0x2d9f.dragstart, function(e){e.preventDefault();});
})();
