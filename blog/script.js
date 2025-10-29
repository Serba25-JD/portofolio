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
        iframe.src = `https://mozilla.github.io/pdf.js/web/viewer.html?file=${pdfUrl}&toolbar=0&textLayer=false&disableDownload=true`;
        // iframe.src = pdfUrl;
        iframe.width = '100%';
        iframe.style.height = '100vh';
        iframe.loading = 'lazy';
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('type', 'application/pdf');
        // const canvas = document.createElement('canvas');
        // canvas.setAttribute('id', 'pdf-canvas');
        const button = document.createElement('button');
        button.type = 'reset';
        button.textContent = 'Tutup';
        button.setAttribute('id', 'close-btn');
        // divContent.append(canvas, button);
        divContent.append(iframe, button);
        divContainer.appendChild(divContent);
        container.insertAdjacentElement('beforeend', divContainer);
        // const pdfUrl = 'https://serba25-jd.github.io/portofolio/blog/pdf/Analisis Kejujuran dan Tanggung Jawab Dalam Penggunaan Teknologi Digital di Kehidupan Sehari-hari.pdf';
        // const canvasContent = document.getElementById('pdf-canvas');
        // pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js';
        // const ctx = canvasContent.getContext('2d');
        // pdfjsLib.getDocument(pdfUrl).promise.then(pdf => {
        //     pdf.getPage(1).then(page => {
        //         const viewport = page.getViewport({ scale: 1.5 });
        //         canvas.height = viewport.height;
        //         canvas.width = viewport.width;

        //         const renderContext = {
        //             canvasContext: ctx,
        //             viewport: viewport
        //         };
        //         page.render(renderContext);
        //     });
        // });
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
        iframe.src = `https://mozilla.github.io/pdf.js/web/viewer.html?file=${pdfUrl}&toolbar=0&textLayer=false&disableDownload=true`;
        // iframe.src = pdfUrl;
        iframe.width = '100%';
        iframe.style.height = '100vh';
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
        // const container = document.getElementById('container-self-paced');
        // const divContainer = document.createElement('div');
        // divContainer.classList.add('container-popup');
        // divContainer.setAttribute('id', 'container-popup');
        // divContainer.style.display = 'flex';
        // const divContent = document.createElement('div');
        // divContent.classList.add('content-popup');

        // const pdfUrl = 'https://serba25-jd.github.io/portofolio/blog/pdf/Analisis Etika dan Teknologi dalam Kasus Korupsi Digital di Indonesia.pdf';
        // pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js';

        // // div khusus untuk menampung semua canvas
        // const pdfContainer = document.createElement('div');
        // pdfContainer.setAttribute('id', 'pdf-container');
        // pdfContainer.style.display = 'flex';
        // pdfContainer.style.flexDirection = 'column';
        // pdfContainer.style.gap = '1rem';
        // pdfContainer.style.overflowY = 'auto';
        // pdfContainer.style.maxHeight = '90vh';

        // divContent.append(pdfContainer);

        // const button = document.createElement('button');
        // button.type = 'reset';
        // button.textContent = 'Tutup';
        // button.setAttribute('id', 'close-btn');
        // divContent.appendChild(button);

        // divContainer.appendChild(divContent);
        // container.insertAdjacentElement('beforeend', divContainer);

        // pdfjsLib.getDocument(pdfUrl).promise.then(pdf => {
        //     for (let i = 1; i <= pdf.numPages; i++) {
        //         pdf.getPage(i).then(page => {
        //             const viewport = page.getViewport({ scale: 1.5 });
        //             const canvas = document.createElement('canvas'); // buat canvas baru per halaman
        //             canvas.width = viewport.width;
        //             canvas.height = viewport.height;
        //             pdfContainer.appendChild(canvas);
        //             const ctx = canvas.getContext('2d');
        //             page.render({ canvasContext: ctx, viewport: viewport });
        //         });
        //     }
        // });
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