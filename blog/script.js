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
    const divContainer = document.createElement('div');
    divContainer.classList.add('self-paced-container');
    const listData = [
        { 'id':'eye-pertama', 'judul': 'Bagaimana Anda memaknai kejujuran dan tanggung jawab dalam penggunaan teknologi digital di kehidupan sehari-hari ?'},
        { 'id': 'eye-kedua', 'judul': 'Analisis Etika dan Teknologi dalam kasus Korupsi Digital di Indonesia.'}
    ]
    listData.forEach(data => {
        const divContent = document.createElement('div');
        const h2 = document.createElement('h2');
        h2.textContent = 'Pendidikan Anti Korupsi dan Etika Berteknologi';
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
    // Eye Pertama
    const pertama = document.getElementById('eye-pertama');
    pertama.addEventListener('click', function() {
        const container = document.getElementById('container-self-paced');
        const divContainer = document.createElement('div');
        divContainer.classList.add('container-popup');
        divContainer.setAttribute('id', 'container-popup');
        divContainer.style.display = 'flex';
        const divContent = document.createElement('div');
        divContent.classList.add('content-popup');
        const pdfUrl = encodeURIComponent('https://serba25-jd.github.io/portofolio/blog/pdf/Analisis Kejujuran dan Tanggung Jawab Dalam Penggunaan Teknologi Digital di Kehidupan Sehari-hari.pdf');
        const iframe = document.createElement('iframe');
        iframe.src = `https://docs.google.com/gview?url=${pdfUrl}&embedded=true`;
        iframe.width = '100%';
        iframe.style.height = 'auto';
        iframe.loading = 'lazy';
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('type', 'application/pdf');
        const button = document.createElement('button');
        button.type = 'reset';
        button.textContent = 'Tutup';
        button.setAttribute('id', 'close-btn');
        divContent.append(iframe, button);
        divContainer.appendChild(divContent);
        container.insertAdjacentElement('beforeend', divContainer);
        closePopup();
    });
    // Eye Kedua
    const kedua = document.getElementById('eye-kedua');
    kedua.addEventListener('click', function() {
        const container = document.getElementById('container-self-paced');
        const divContainer = document.createElement('div');
        divContainer.classList.add('container-popup');
        divContainer.setAttribute('id', 'container-popup');
        divContainer.style.display = 'flex';
        const divContent = document.createElement('div');
        divContent.classList.add('content-popup');
        const pdfUrl = encodeURIComponent('https://serba25-jd.github.io/portofolio/blog/pdf/Analisis Etika dan Teknologi dalam Kasus Korupsi Digital di Indonesia.pdf');
        const iframe = document.createElement('iframe');
        iframe.src = `https://docs.google.com/gview?url=${pdfUrl}&embedded=true`;
        iframe.width = '100%';
        iframe.style.height = 'auto';
        iframe.loading = 'lazy';
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('type', 'application/pdf');
        const button = document.createElement('button');
        button.type = 'reset';
        button.textContent = 'Tutup';
        button.setAttribute('id', 'close-btn');
        divContent.appendChild(button);
        divContainer.appendChild(divContent);
        container.insertAdjacentElement('beforeend', divContainer);
        closePopup();
    });
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