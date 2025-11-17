document.addEventListener('DOMContentLoaded', function() {
    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.href = '../assets/image/main/icon.ico';
    favicon.sizes = '48x48';
    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = 'styles.css';
    document.head.append(favicon, style);
    const header = document.createElement('header');
    header.setAttribute('id', 'header-container');
    const main = document.createElement('main');
    main.setAttribute('id', 'main-container');
    const footer = document.createElement('footer');
    footer.setAttribute('id', 'footer-container');
    document.body.append(header, main, footer);
    showLayout();
    changeCache();
});

function showLayout() {
    showHeader();
    showMain();
    showFooter();
    showPopup();
}

function showHeader() {
    const header = document.getElementById('header-container');
    const h1 = document.createElement('h1');
    h1.textContent = 'Selamat datang di blog saya';
    header.appendChild(h1);
}

function showMain() {
    const main = document.getElementById('main-container');
    const dataID = [
        { 'id': 'container-self-paced'},
    ]
    dataID.forEach(data => {
        const section = document.createElement('section');
        section.classList.add('container');
        section.setAttribute('id', data.id);
        main.appendChild(section);
    });
    showSelfPaced();
}

function showSelfPaced() {
    const main = document.getElementById('container-self-paced');
    const divTitle = document.createElement('div');
    const h2Title = document.createElement('h2');
    h2Title.textContent = 'Pendidikan Anti Korupsi dan Etika Berteknologi';
    divTitle.appendChild(h2Title);
    main.appendChild(divTitle);
    const divContainer = document.createElement('div');
    divContainer.classList.add('self-paced-container');
    const listData = [
        { 'title': 'Pertemuan 1', 'id':'eye-pertama', 'judul': 'Bagaimana Anda memaknai kejujuran dan tanggung jawab dalam penggunaan teknologi digital di kehidupan sehari-hari ?'},
        { 'title': 'Pertemuan 2', 'id': 'eye-kedua', 'judul': 'Analisis Etika dan Teknologi dalam kasus Korupsi Digital di Indonesia.'},
        { 'title': 'Pertemuan 3', 'id': 'eye-ketiga', 'judul': 'Merancang Pedoman Etika Digital di Lingkungan Kampus.'},
        { 'title': 'Pertemuan 4', 'id': 'eye-keempat', 'judul': 'Analisis Yuridis Kasus Korupsi Digital di Indonesia.'},
        { 'title': 'Pertemuan 5', 'id': 'eye-kelima', 'judul': 'Tugas 1: Analisis Dilema Etika. Tugas 2: Diskusi Kelompok.' },
        { 'title': 'Pertemuan 6', 'id': 'eye-keenam', 'judul': 'Tugas 1: Analisis Kasus Etika Teknologi. Tugas 2: Diskusi topik.'},
        { 'title': 'Pertemuan 7', 'id': 'eye-ketujuh', 'judul': 'Menegakkan Integritas Digital di Era AI dan Disinformasi.'},
        { 'title': 'Pertemuan 8', 'id': 'eye-kedelapan', 'judul': 'Ujian Tengah Semester.'}
    ]
    listData.forEach(data => {
        const divContent = document.createElement('div');
        const h2 = document.createElement('h2');
        h2.textContent = data.title;
        const p = document.createElement('p');
        p.textContent = data.judul;
        const icon = document.createElement('i');
        icon.setAttribute('data-feather', 'eye');
        icon.setAttribute('id', data.id);
        icon.classList.add('eye-icon');
        icon.classList.add('eye-icon');
        divContent.append(h2, p, icon);
        divContainer.appendChild(divContent);
    });
    main.appendChild(divContainer);
    feather.replace();
    showDocument();
}

const popupData = [
    {
        id: 'eye-pertama',
        type: 'iframe',
        documents: [
            { src: 'https://drive.google.com/file/d/1qx4orcWGXiYoDlBIYE8zP5uUF4OvLPfo/preview' }
        ]
    },
    {
        id: 'eye-kedua',
        type: 'iframe',
        documents: [
            { src: 'https://drive.google.com/file/d/1Cs4P_d1Glc6gFCdac67SbB3iJ5Z3cnsh/preview' }
        ]
    },
    {
        id: 'eye-ketiga',
        type: 'iframe',
        documents: [
            { src: 'https://docs.google.com/presentation/d/e/2PACX-1vQbVCJpzI2nUbZFRprQOxS_FpNQsb_MKIUZA5iFgJzEsJfLqHfRF2f8i7hop8Vi4A/pubembed?start=true&loop=true&delayms=3000' }
        ]

    },
    {
        id: 'eye-keempat',
        type: 'iframe',
        documents: [
            { src: 'https://drive.google.com/file/d/125yam0QpIghaPTiotOoI3e66QkW8-xwr/preview' }
        ]

    },
    {
        id: 'eye-kelima',
        type: 'list',
        documents: [
            { 
                judul: 'Analisis Dilema Etika', 
                href: 'https://drive.google.com/file/d/1iy2IP1CUVNrEq4NZW7EOJ4ZwKZEyH5AN/preview' 
            },
            { 
                judul: 'Apakah whistleblowing atau tindakan melaporkan atau membocorkan dugaan pelanggaran atau kecurangan yang terjadi di dalam suatu organisasi di lingkungan kerja merupakan tindakan etis.', 
                href: 'https://docs.google.com/presentation/d/e/2PACX-1vTDeynEODbSEQwAS2qAfudO92TR7wcyMjx-Qh3-oJslq2hCmLz6pPM9JdAkN7JjyQ/pubembed?start=true&loop=true&delayms=3000' 
            }
        ]
    },
    {
        id: 'eye-keenam',
        type: 'list',
        documents: [
            { 
                judul: 'Analisis Kasus Etika Teknologi', 
                href: 'https://drive.google.com/file/d/1b4RQK8VGJ_1ddovVDtbie6pjGR1URmRe/preview' 
            },
            { 
                judul: 'Apakah keamanan siber merupakan tanggung jawab moral atau teknis? Mahasiswa membuat argumentasi berdasarkan keempat prinsip etika TI.', 
                href: 'https://drive.google.com/file/d/1j49yi4k1RKmj9aI9sh_esIrmf6HtEAI6/preview' 
            }
        ]
    },
    {
        id: 'eye-ketujuh',
        type: 'iframe',
        documents: [
            { src: 'https://drive.google.com/file/d/1JmnNDh3sw_EaYJb3Jznb3eFMSf6b0nfv/preview' }
        ]
    },
    {
        id: 'eye-kedelapan',
        type: 'iframe',
        documents: [
            { src: 'https://drive.google.com/file/d/1AuLwAHyc3vzCkHwd1676_Nxqk5vRTlZT/preview' }
        ]
    }
];

function createContainer(data) {
    const container = document.getElementById('container-self-paced');
    const divContainer = document.createElement('div');
    divContainer.classList.add('container-popup');
    divContainer.id = 'container-popup';
    divContainer.style.display = 'flex';
    const divContent = document.createElement('div');
    divContent.classList.add('content-popup');
    if (data.type === 'iframe' && data.documents.length === 1) {
        const iframe = document.createElement('iframe');
        iframe.src = data.documents[0].src;
        iframe.width = '100%';
        iframe.height = '800px';
        divContent.appendChild(iframe);
    }
    else if (data.type === 'list' || data.documents.length > 1) {
        const divList = document.createElement('div');
        divList.classList.add('eye-content');

        data.documents.forEach(doc => {
            const divDoc = document.createElement('div');
            const h3 = document.createElement('h3');
            h3.textContent = doc.judul;
            const a = document.createElement('a');
            a.href = doc.href;
            a.target = '_blank';
            a.textContent = 'Lihat';
            divDoc.append(h3, a);
            divList.appendChild(divDoc);
        });
        divContent.appendChild(divList);
    }
    const button = document.createElement('button');
    button.type = 'reset';
    button.textContent = 'Tutup';
    button.id = 'close-btn';
    divContent.appendChild(button);
    divContainer.appendChild(divContent);
    container.appendChild(divContainer);
    closePopup();
}

function showDocument() {
    const allEye = document.querySelectorAll('.eye-icon');
    allEye.forEach(eye => {
        eye.addEventListener('click', function(e) {
            const target = e.target.id;
            const selected = popupData.find(item => item.id === target);
            if (selected) {
                createContainer(selected);
            }
        })
    })
}

function closePopup() {
    const button = document.getElementById('close-btn');
    if(button) {
        button.addEventListener('click', function() {
            const popup = document.getElementById('container-popup');
            if(popup) {
                popup.style.display = 'none';
                setTimeout(() => {
                    popup.remove();
                }, 500);
            }
        })
    }
}

function showFooter() {
    const footer = document.getElementById('footer-container');
    const p = document.createElement('p');
    p.textContent = 'Made with ❤️: Jeremi. (2025)';
    footer.appendChild(p);
}

function showPopup() {
    const container = document.getElementById('container-self-paced');
    const divContainer = document.createElement('div');
    divContainer.classList.add('popup-container');
    divContainer.setAttribute('id', 'popup-container');
    const divContent = document.createElement('div');
    divContent.classList.add('popup-content');
    const p = document.createElement('p');
    p.textContent = 'Sebelum melihat blog saya, harap terlebih dahulu untuk menghapus cache, agar mendapatkan data terbaru, Terima kasih. 🙏';
    const button = document.createElement('button');
    button.type = 'reset';
    button.textContent = 'Saya mengerti';
    button.setAttribute('id', 'popup-content-close');
    divContent.append(p, button);
    divContainer.appendChild(divContent);
    container.insertAdjacentElement('afterend', divContainer);
    const buttonClick = document.getElementById('popup-content-close');
    buttonClick.addEventListener('click', function() {
        const popupContainer = document.getElementById('popup-container');
        popupContainer.remove();
    })
}

function changeCache() {
    const version = '20251117';
    document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
    link.href = link.href + '?v=' + version;
    });
    document.querySelectorAll('script[src]').forEach(script => {
    script.src = script.src + '?v=' + version;
    });
}
