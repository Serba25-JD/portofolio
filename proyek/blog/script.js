document.addEventListener('DOMContentLoaded', function() {
    showAllLayout();
    changeCache();
});

function startGreetings() {
    const options = { timeZone: "Asia/Jakarta", hour: "2-digit", hour12: false };
    const hourWIB = parseInt(new Intl.DateTimeFormat("id-ID", options).format(new Date()));
    if (hourWIB >= 5 && hourWIB < 11) {
        return "Selamat pagi";
    } else if (hourWIB >= 11 && hourWIB < 15) {
        return "Selamat siang";
    } else if (hourWIB >= 15 && hourWIB < 18) {
        return "Selamat sore";
    } else {
        return "Selamat malam";
    }
};

function showLogin() {
    const divContainer = document.createElement('div');
    divContainer.setAttribute('id', 'login-container');
    const divContent = document.createElement('div');
    divContent.setAttribute('id', 'login-content');
    const h1Greetings = document.createElement('h1');
    h1Greetings.textContent = `${startGreetings()}.`;
    const pTitleContent = document.createElement('p');
    pTitleContent.textContent = 'Blog ini hanya dapat dilihat oleh Bapak Rahmadani, S.Kom., M.Kom.';
    const label = document.createElement('label');
    label.htmlFor = 'password';
    label.textContent = 'Password';
    const input = document.createElement('input');
    input.setAttribute('id', 'password');
    input.type = 'password';
    input.minLength = '1';
    input.maxLength = '12';
    const button = document.createElement('button');
    button.setAttribute('id', 'login-button');
    button.type = 'submit';
    button.textContent = 'Login';
    divContent.append(h1Greetings, pTitleContent, label, input, button);
    divContainer.appendChild(divContent);
    document.body.appendChild(divContainer);
    showLoadLogin();
};

function showLoadLogin() {
    const button = document.getElementById('login-button');
    const container = document.getElementById('login-container');
    button.addEventListener('click', function() {
        const password = '2';
        const passwordInput = document.getElementById('password').value;
        let error = document.getElementById('login-error');
        if(!error) {
            error = document.createElement('p');
            error.setAttribute('id', 'login-error');
            button.insertAdjacentElement('afterend', error);
        }
        if(!passwordInput) {
            error.textContent = 'Silahkan masukkan password terlebih dahulu.';
            return;
        }
        if(passwordInput !== password) {
            error.textContent = 'Password salah.';
            return;
        }
        localStorage.setItem('login', 'true');
        error.remove();
        container.remove();
        if(url) {
            window.open(url, '_blank', 'noopener,noreferrer');
            url = null;
        };
    });
};

function showAllLayout() {
    const header = document.createElement('header');
    const main = document.createElement('main');
    const footer = document.createElement('footer');
    document.body.append(header, main, footer);
    loadHeader();
    loadMain();
    loadFooter();
};

function formatDate(date) {
    const months = [
        "Januari","Februari","Maret","April","Mei","Juni",
        "Juli","Agustus","September","Oktober","November","Desember"
    ];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
};

function startClock() {
    const pLeft = document.getElementById('wib-clock');
    function updateTime() {
        const options = {
            timeZone: "Asia/Jakarta",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        };
        const timeWIB = new Intl.DateTimeFormat("id-ID", options).format(new Date());
        pLeft.textContent = `Waktu: ${timeWIB}`;
    }
    updateTime();
    setInterval(updateTime, 1000);
};

function loadHeader() {
    const header = document.querySelector('header');
    // Left
    const divLeft = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.textContent = 'Blog Pendidikan Anti Korupsi dan Etika Teknologi';
    divLeft.appendChild(h1);
    // Right
    const divRight = document.createElement('div');
    const pDate = document.createElement('p');
    pDate.textContent = `${formatDate(new Date())}`;
    const pClock = document.createElement('p');
    pClock.setAttribute('id', 'wib-clock');
    divRight.append(pDate, pClock);
    header.append(divLeft, divRight);
    startClock();
};

const data = [
    {
        'title': 'Pertemuan 1', 
        'text': 'Bagaimana Anda memaknai kejujuran dan tanggung jawab dalam penggunaan teknologi digital di kehidupan sehari-hari ?.',
        'src': 'https://drive.google.com/file/d/1qx4orcWGXiYoDlBIYE8zP5uUF4OvLPfo/preview'
    },
    {
        'title': 'Pertemuan 2',
        'text': 'Analisis Etika dan Teknologi dalam kasus Korupsi Digital di Indonesia.',
        'src': 'https://drive.google.com/file/d/1Cs4P_d1Glc6gFCdac67SbB3iJ5Z3cnsh/preview'

    },
    {
        'title': 'Pertemuan 3',
        'text': 'Merancang Pedoman Etika Digital di Lingkungan Kampus.',
        'src': 'https://docs.google.com/presentation/d/e/2PACX-1vQbVCJpzI2nUbZFRprQOxS_FpNQsb_MKIUZA5iFgJzEsJfLqHfRF2f8i7hop8Vi4A/pubembed?start=true&loop=true&delayms=3000'

    },
    {
        'title': 'Pertemuan 4',
        'text': 'Analisis Yuridis Kasus Korupsi Digital di Indonesia.',
        'src': 'https://drive.google.com/file/d/125yam0QpIghaPTiotOoI3e66QkW8-xwr/preview'

    },
    {
        'title': 'Pertemuan 5',
        'text': 'Analisis Dilema Etika. [1]',
        'src': 'https://drive.google.com/file/d/1iy2IP1CUVNrEq4NZW7EOJ4ZwKZEyH5AN/preview'

    },
    {
        'title': 'Pertemuan 5',
        'text': 'Apakah whistleblowing atau tindakan melaporkan atau membocorkan dugaan pelanggaran atau kecurangan yang terjadi di dalam suatu organisasi di lingkungan kerja merupakan tindakan etis. [2]',
        'src': 'https://docs.google.com/presentation/d/e/2PACX-1vTDeynEODbSEQwAS2qAfudO92TR7wcyMjx-Qh3-oJslq2hCmLz6pPM9JdAkN7JjyQ/pubembed?start=true&loop=true&delayms=3000'

    },
    {
        'title': 'Pertemuan 6',
        'text': 'Analisis Kasus Etika Teknologi. [1]',
        'src': 'https://drive.google.com/file/d/1b4RQK8VGJ_1ddovVDtbie6pjGR1URmRe/preview'

    },
    {
        'title': 'Pertemuan 6',
        'text': 'Apakah keamanan siber merupakan tanggung jawab moral atau teknis ?. [2]',
        'src': 'https://drive.google.com/file/d/1j49yi4k1RKmj9aI9sh_esIrmf6HtEAI6/preview'

    },
    {
        'title': 'Pertemuan 7',
        'text': 'Menegakkan Integritas Digital di Era AI dan Disinformasi.',
        'src': 'https://drive.google.com/file/d/1JmnNDh3sw_EaYJb3Jznb3eFMSf6b0nfv/preview'

    },
    {
        'title': 'Pertemuan 8',
        'text': 'Ujian Tengah Semester.',
        'src': 'https://drive.google.com/file/d/1AuLwAHyc3vzCkHwd1676_Nxqk5vRTlZT/preview'
    },
    {
        'title': 'Pertemuan 9',
        'text': 'Analisis Kasus Korupsi Digital. [1]',
        'src': 'https://drive.google.com/file/d/1ZB0iu0Y8fUF34HMqLsWm9J-aAbK8qTEK/preview'
    },
    {
        'title': 'Pertemuan 9',
        'text': 'Mensimulasikan Proses Pengadaan yang Transparan dan Bebas Korupsi. [2]',
        'src': 'https://drive.google.com/file/d/1FtVL03JVCJ52A26j05VfGK4lwjWED9EX/preview'
    },
    {
        'title': 'Pertemuan 10',
        'text': 'AI yang Bias dan Privasi yang Hilang: Di Mana Letak Keadilan Digital ?. [1]',
        'src': 'https://drive.google.com/file/d/1KM8X90Rs-en3gLxSA-qsRpWIRnipb3aR/preview'
    },
    {
        'title': 'Pertemuan 10',
        'text': 'Mempresentasikan Argumen Etis, Sosial, dan Teknologis. [2]',
        'src': 'https://drive.google.com/file/d/1zQGWG2dLzopQJ3cyqK7j1aA_2nmoyxSz/preview'
    },
    {
        'title': 'Pertemuan 11',
        'text': 'Merancang Mockup Dashboard Digital untuk Memantau Proyek TI Secara Transparan.',
        'src': 'https://selfpaced.my.canva.site/'
    },
    {
        'title': 'Pertemuan 12',
        'text': 'Menganalisis Satu Kasus Nyata Pelanggaran Etika Profesional TI.',
        'src': 'https://drive.google.com/file/d/11Rcdvx13m5Cn-cNLKUehqjg-tv8didXJ/preview'
    },
    {
        'title': 'Pertemuan 13',
        'text': 'Rancang dan Presentasikan Program Insider Threat untuk Sebuah Organisasi/Pemerintah atau mungkin universitas.',
        'src': 'https://drive.google.com/file/d/1TAqnWK7rEB2gq3JmgQoFQY9Qd2j9daXe/preview'
    },
    {
        'title': 'Pertemuan 14',
        'text': 'Keberanian Moral dalam Sistem Whistleblowing: Studi Kasus dan Refleksi Etika. [1]',
        'src': 'https://drive.google.com/file/d/1Jmlxlwhhe1PlyF-nJ5YbFnYeOGrHXPYs/preview'
    },
    {
        'title': 'Pertemuan 14',
        'text': 'Menganalisis Dilema Etika yang Muncul dengan Mengacu Pada Teori Etika. [2]',
        'src': 'https://drive.google.com/file/d/1yqylKNQ1KTNY4lIqUNBOQgcnwjXHbbWu/view?usp=sharing'
    }
];

let url = null;
function loadMain() {
    const main = document.querySelector('main');
    const section = document.createElement('section');
    data.forEach((list, no) => {
        const article = document.createElement('article');
        article.classList.add('container');
        article.setAttribute('no', no);
        const image = new Image();
        image.src = 'logo_unpab_4x.png';
        image.width = 769;
        image.height = 775;
        image.loading = 'lazy';
        const h2 = document.createElement('h2');
        h2.textContent = list.title;
        const p = document.createElement('p');
        p.textContent = list.text;
        article.append(image, h2, p);
        section.appendChild(article);
    });
    main.appendChild(section);
    document.querySelectorAll('.container').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const index = this.getAttribute('no');
            const src = data[index].src;
            if(localStorage.getItem('login') === 'true') {
                window.open(src, '_blank', 'noopener,noreferrer');
            } else {
                showLogin();
                url = src;
            };
        });
    });
};

function loadFooter() {
    const footer = document.querySelector('footer');
    const p = document.createElement('p');
    p.textContent = 'Made with ❤️: Jeremi. (2025)';
    footer.appendChild(p);
};

function changeCache() {
    const version = '20251226';
    document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
    link.href = link.href + '?v=' + version;
    });
    document.querySelectorAll('script[src]').forEach(script => {
    script.src = script.src + '?v=' + version;
    });
};