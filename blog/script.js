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
});

function showLayout() {
    showHeader();
    showMain();
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
        divContent.append(h2, p, icon);
        divContainer.appendChild(divContent);
    });
    main.appendChild(divContainer);
    feather.replace();
    showDocument();
}

function showDocument() {
    documentFirst();
    documentTwo();
    documentThree();
    documentFour();
    documentFive();
    documentSix();
}

function documentFirst() {
    const pertama = document.getElementById('eye-pertama');
    pertama.addEventListener('click', function() {
        const container = document.getElementById('container-self-paced');
        const divContainer = document.createElement('div');
        divContainer.classList.add('container-popup');
        divContainer.setAttribute('id', 'container-popup');
        divContainer.style.display = 'flex';
        const divContent = document.createElement('div');
        divContent.classList.add('content-popup');
        const embed = document.createElement('embed');
        const pdfUrl = encodeURIComponent('pdf/Analisis Kejujuran dan Tanggung Jawab Dalam Penggunaan Teknologi Digital di Kehidupan Sehari-hari.pdf');
        embed.src = pdfUrl;
        embed.type = 'application/pdf';
        embed.width = '100%';
        embed.height = '800px';
        const button = document.createElement('button');
        button.type = 'reset';
        button.textContent = 'Tutup';
        button.setAttribute('id', 'close-btn');
        divContent.append(embed, button);
        divContainer.appendChild(divContent);
        container.insertAdjacentElement('beforeend', divContainer);
        closePopup();
    })
}

function documentTwo() {
    const kedua = document.getElementById('eye-kedua');
    kedua.addEventListener('click', function() {
        const container = document.getElementById('container-self-paced');
        const divContainer = document.createElement('div');
        divContainer.classList.add('container-popup');
        divContainer.setAttribute('id', 'container-popup');
        divContainer.style.display = 'flex';
        const divContent = document.createElement('div');
        divContent.classList.add('content-popup');
        const embed = document.createElement('embed');
        const pdfUrl = encodeURIComponent('pdf/Analisis Etika dan Teknologi dalam Kasus Korupsi Digital di Indonesia.pdf');
        embed.src = pdfUrl;
        embed.type = 'application/pdf';
        embed.width = '100%';
        embed.height = '800px';
        const button = document.createElement('button');
        button.type = 'reset';
        button.textContent = 'Tutup';
        button.setAttribute('id', 'close-btn');
        divContent.append(embed, button);
        divContainer.appendChild(divContent);
        container.insertAdjacentElement('beforeend', divContainer);
        closePopup();
    })
}

function documentThree() {
    const ketiga = document.getElementById('eye-ketiga');
    ketiga.addEventListener('click', function() {
        const container = document.getElementById('container-self-paced');
        const divContainer = document.createElement('div');
        divContainer.classList.add('container-popup');
        divContainer.setAttribute('id', 'container-popup');
        divContainer.style.display = 'flex';
        const divContent = document.createElement('div');
        divContent.classList.add('content-popup');
        const iframe = document.createElement('iframe');
        iframe.src = 'https://docs.google.com/presentation/d/e/2PACX-1vQbVCJpzI2nUbZFRprQOxS_FpNQsb_MKIUZA5iFgJzEsJfLqHfRF2f8i7hop8Vi4A/pubembed?start=true&loop=true&delayms=3000';
        iframe.width = '1280';
        iframe.height = '749';
        iframe.allowfullscreen = 'true';
        iframe.frameborder = '0';
        iframe.mozallowfullscreen = 'true';
        iframe.webkitallowfullscreen = 'true';
        const button = document.createElement('button');
        button.type = 'reset';
        button.textContent = 'Tutup';
        button.setAttribute('id', 'close-btn');
        divContent.append(iframe, button);
        divContainer.appendChild(divContent);
        container.insertAdjacentElement('beforeend', divContainer);
        closePopup();
    })
}

function documentFour() {
    const keempat = document.getElementById('eye-keempat');
    keempat.addEventListener('click', function() {
        const container = document.getElementById('container-self-paced');
        const divContainer = document.createElement('div');
        divContainer.classList.add('container-popup');
        divContainer.setAttribute('id', 'container-popup');
        divContainer.style.display = 'flex';
        const divContent = document.createElement('div');
        divContent.classList.add('content-popup');
        const embed = document.createElement('embed');
        const pdfUrl = encodeURIComponent('pdf/Analisis Yuridis Kasus Korupsi Digital di Indonesia.pdf');
        embed.src = pdfUrl;
        embed.type = 'application/pdf';
        embed.width = '100%';
        embed.height = '800px';
        const button = document.createElement('button');
        button.type = 'reset';
        button.textContent = 'Tutup';
        button.setAttribute('id', 'close-btn');
        divContent.append(embed, button);
        divContainer.appendChild(divContent);
        container.insertAdjacentElement('beforeend', divContainer);
        closePopup();
    })
}

function documentFive() {
    const kelima = document.getElementById('eye-kelima');
    kelima.addEventListener('click', function() {
        const container = document.getElementById('container-self-paced');
        const divContainer = document.createElement('div');
        divContainer.classList.add('container-popup');
        divContainer.setAttribute('id', 'container-popup');
        divContainer.style.display = 'flex';
        const divContent = document.createElement('div');
        divContent.classList.add('content-popup');
        const divDocumentContainer = document.createElement('div');
        divDocumentContainer.classList.add('eye-content');
        const listDocument = [
            { 'judul': 'Analisis Dilema Etika', 'href': '#'},
            { 'judul': 'Apakah whistleblowing atau tindakan melaporkan atau membocorkan dugaan pelanggaran atau kecurangan yang terjadi di dalam suatu organisasi di lingkungan kerja merupakan tindakan etis?.', 'href': '#' }
        ]
        listDocument.forEach(list => {
            const divDocumentContent = document.createElement('div');
            const h3 = document.createElement('h3');
            h3.textContent = list.judul;
            const a = document.createElement('a');
            a.href = list.href;
            a.textContent = 'Check Disini';
            divDocumentContent.append(h3, a);
            divDocumentContainer.appendChild(divDocumentContent);
        })
        const button = document.createElement('button');
        button.type = 'reset';
        button.textContent = 'Tutup';
        button.setAttribute('id', 'close-btn');
        divContent.append(divDocumentContainer, button);
        divContainer.appendChild(divContent);
        container.insertAdjacentElement('beforeend', divContainer);
        closePopup();
    })
}

function documentSix() {
    const keenam = document.getElementById('eye-keenam');
    keenam.addEventListener('click', function() {
        const container = document.getElementById('container-self-paced');
        const divContainer = document.createElement('div');
        divContainer.classList.add('container-popup');
        divContainer.setAttribute('id', 'container-popup');
        divContainer.style.display = 'flex';
        const divContent = document.createElement('div');
        divContent.classList.add('content-popup');
        const divDocumentContainer = document.createElement('div');
        divDocumentContainer.classList.add('eye-content');
        const listDocument = [
            { 'judul': 'Analisis Kasus Etika Teknologi', 'href': '#'},
            { 'judul': 'Apakah keamanan siber merupakan tanggung jawab moral atau teknis? Mahasiswa membuat argumentasi berdasarkan keempat prinsip etika TI.', 'href': '#' }
        ]
        listDocument.forEach(list => {
            const divDocumentContent = document.createElement('div');
            const h3 = document.createElement('h3');
            h3.textContent = list.judul;
            const a = document.createElement('a');
            a.href = list.href;
            a.textContent = 'Check Disini';
            divDocumentContent.append(h3, a);
            divDocumentContainer.appendChild(divDocumentContent);
        })
        const button = document.createElement('button');
        button.type = 'reset';
        button.textContent = 'Tutup';
        button.setAttribute('id', 'close-btn');
        divContent.append(divDocumentContainer, button);
        divContainer.appendChild(divContent);
        container.insertAdjacentElement('beforeend', divContainer);
        closePopup();
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