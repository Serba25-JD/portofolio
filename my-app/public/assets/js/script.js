document.addEventListener('DOMContentLoaded', function () {
    const body = document.getElementById('body-content');
    const header = document.createElement('header');
    header.setAttribute('id', 'header-content');
    const main = document.createElement('main');
    main.setAttribute('id', 'main-content')
    const footer = document.createElement('footer');
    footer.setAttribute('id', 'footer-content');
    body.append(header, main, footer);
    showAllLayout();
});

function showAllLayout() {
    showMainHeader();
    showMainHome();
    showHandleResponsive(); 
    window.addEventListener('scroll', showCheckScrollLoad);
    showCheckScrollLoad();
    showMainFooter();
}

// Header
function showMainHeader() {
    const header = document.getElementById('header-content');
    const section = document.createElement('section');
    section.setAttribute('id', 'header-container');
    const div = document.createElement('div');
    const img = new Image();
    img.src = 'assets/image/main/profile-first.webp';
    img.width = 651;
    img.height = 1156;
    img.loading = 'lazy';
    img.alt = 'my-profile';
    div.appendChild(img);
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const links = [
        { 'href': '#home', 'text': 'Beranda', 'id':'home-nav'},
        { 'href': '#about', 'text': 'Tentang', 'id':'about-nav'},
        { 'href': '#skills', 'text': 'Keahlian', 'id': 'skills-nav'},
        { 'href': '#educations', 'text': 'Pendidikan', 'id': 'educations-nav'},
        { 'href': '#experiences', 'text': 'Pengalaman', 'id': 'experiences-nav'},
        { 'href': '#works', 'text': 'Pekerjaan', 'id': 'works-nav'},
        { 'href': '#contact', 'text': 'Kontak', 'id': 'contact-nav'},
    ];
    links.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.href;
        a.text = link.text;
        a.setAttribute('id', link.id);
        a.classList.add('list-nav');
        li.appendChild(a);
        ul.appendChild(li);
    });
    nav.appendChild(ul);
    section.append(div, nav);
    header.appendChild(section);
    activeNav();
}

let isActiveNav = false;
function activeNav() {
    const nav = document.querySelectorAll('.list-nav');
    nav.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            nav.forEach(li => li.classList.remove('active'));
            link.classList.add('active');
            removeTag(link);
            activeNavContent(link);
            isActiveNav = true;
            setTimeout(() => {
                isActiveNav = false;
            }, 1000);
        })
    })
}

function removeTag(link) {
    const hrefId = link.getAttribute('href').replace('#', '');
    const tag = document.getElementById(hrefId);
    if(tag) {
        tag.scrollIntoView({behavior: 'smooth'});
        history.replaceState(null, '', window.location.pathname);
    }
}

function activeNavContent(link) {
    const hrefId = link.getAttribute('href').replace('#', '');
    if(hrefId === 'about') {
        showMainAbout();
        checkActiveNavContent(hrefId);
    };
    if(hrefId === 'skills') {
        showMainSkills();
        checkActiveNavContent(hrefId);
    };
    if(hrefId === 'educations') {
        showMainEducations();
        checkActiveNavContent(hrefId);
    };
    if(hrefId === 'experiences') {
        showMainExperiences();
        checkActiveNavContent(hrefId);
    };
    if(hrefId === 'works') {
        showMainWorks();
        checkActiveNavContent(hrefId);
    };
    if(hrefId === 'contact') {
        showMainContact();
        checkActiveNavContent(hrefId);
    };
}

function checkActiveNavContent(id) {
    const tag = document.getElementById(id);
    tag.scrollIntoView({behavior: 'smooth'});
}

function showMainHeaderMobile() {
    const header= document.getElementById('header-content');
    const section = document.createElement('section');
    section.classList.add('mobile-nav');
    section.setAttribute('id', 'mobile-nav');
    header.insertAdjacentElement('beforeend', section);
    const items = [
        {
            url: 'https://www.instagram.com/je.onlyone_',
            src: 'assets/image/main/instagram.svg',
            alt: 'instagram'
        },
        {
            url: 'https://github.com/Serba25-JD',
            src: 'assets/image/main/github.svg',
            alt: 'github'
        },
        {
            url: 'https://discord.com/users/jeremi_salvatores',
            src: 'assets/image/main/discord.svg',
            alt: 'discord'
        },
    ];
    items.forEach(item => {
        const a = document.createElement('a');
        a.href = item.url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        const img = new Image();
        img.src = item.src;
        img.width = 24;
        img.height = 24;
        img.loading = 'lazy';
        img.alt = item.alt;
        a.appendChild(img);
        section.appendChild(a);
    });
    const menuImg = new Image();
    menuImg.src = 'assets/image/main/menu.svg';
    menuImg.width = 24;
    menuImg.height = 24;
    menuImg.loading = 'lazy';
    menuImg.id = 'menu';
    section.appendChild(menuImg);
    showHeaderMobile();
}

function showHeaderMobile() {
    const menu = document.getElementById('menu');
    const header = document.getElementById('header-container');
    menu.addEventListener('click', function() {
        const headers = document.getElementById('header-content');
        if (header.style.display === 'flex') {
            header.style.display = 'none';
            headers.classList.remove('active');
        } else {
            header.style.display = 'flex';
            headers.classList.add('active');
        }
    })
    activeMenu();
}

function activeMenu() {
    const menu = document.getElementById('header-container');
    const main = document.getElementById('main-content');
    const header = document.getElementById('header-container');
    const headers = document.getElementById('header-content');
    document.addEventListener('click', function(e) {
        if(menu.contains(e.target) || main.contains(e.target)) {
            headers.classList.remove('active');
            header.style.display = 'none';
        }
    })
}
// Header END

// Home
function showMainHome() {
    const main = document.getElementById('main-content');
    const section = document.createElement('section');
    section.classList.add('container');
    section.setAttribute('id', 'home');
    main.insertAdjacentElement('afterbegin', section);
    showMainHomeLoad();
}

function showMainHomeLoad() {
    const home = document.getElementById('home');
    const h1 = document.createElement('h1');
    const button = document.createElement('a');
    h1.textContent = 'Portofolio - Junior Programmer';
    button.text = 'Download CV';
    button.href = '#';
    home.append(h1, button);
    showMainHomeHeroLoadChange();
    setInterval(showMainHomeHeroLoadChange, 1 * 60 * 1000);
}

let index = 0;
function showMainHomeHeroLoadChange() {
    const home = document.getElementById('home');
    const backgrounds = [
        'url(assets/image/main/profile-two.webp)',
        'url(assets/image/main/profile-three.webp)',
        'url(assets/image/main/profile-four.webp)',
        'url(assets/image/main/profile-five.webp)',
    ]
    home.style.backgroundImage = backgrounds[index];
    index = (index + 1) % backgrounds.length;
}

// Home END

// About
function showMainAbout() {
    if (document.getElementById('about')) return;
    const main = document.getElementById('main-content');
    const section = document.createElement('section');
    section.classList.add('container');
    section.setAttribute('id', 'about');
    main.insertAdjacentElement('beforeend', section);
    showMainAboutLoad();
}

function showMainAboutLoad() {
    const about = document.getElementById('about');
    const h2 = document.createElement('h2');
    h2.textContent = 'Tentang Saya';
    about.appendChild(h2);
    const pText = [
        {'text': 'Halo! Saya Jeremi Salvatores Sihotang.'},
        {'text': 'Saya lulusan SMK Swasta Eka Prasetya Medan jurusan Teknik Komputer dan Jaringan (TKJ). Saya memiliki ketertarikan dan pengalaman dalam pengembangan website, pemrograman Python, serta pengelolaan konten digital. Saya menguasai HTML5, CSS3, dan JavaScript, serta mampu membuat tampilan yang responsif dengan Flexbox dan Grid. Saya juga mampu membuat API menggunakan Python Flask dan mengerti teknik web scraping.'},
        {'text': 'Selain itu, saya mahir menggunakan WordPress dengan Elementor dan memahami SEO baik di dalam maupun di luar WordPress. Saya juga terbiasa menggunakan Microsoft Word, Microsoft Excel, Adobe Photoshop, dan Filmora untuk kebutuhan desain dan pengeditan video.'},
        {'text': 'Sebagai nilai tambah, saya mampu mengetik 10 jari dengan lancar, meningkatkan produktivitas saya dalam bekerja. Saya juga telah mengikuti kursus online dari Dicoding dan RevoU Fundamental Course untuk memperdalam kemampuan teknis saya.'}
    ]
    pText.forEach(desc => {
        const p = document.createElement('p');
        p.textContent = desc.text;
        about.appendChild(p);
    })
}
// About END

// Skills
function showMainSkills() {
    if (document.getElementById('skills')) return;
    const main = document.getElementById('main-content');
    const section = document.createElement('section');
    section.classList.add('container');
    section.setAttribute('id', 'skills');
    main.insertAdjacentElement('beforeend', section);
    showMainSkillsLoad();
}

function showMainSkillsLoad() {
    const skills = document.getElementById('skills');
    const h2 = document.createElement('h2');
    h2.textContent = 'Keahlian Saya';
    const div = document.createElement('div');
    div.setAttribute('id', 'skills-container');
    skills.append(h2, div);
    const data = [
        {'src': 'assets/image/svg-icon/logo-html.svg', 'figcaption': 'HTML5', 'width': 21, 'height': 21},
        {'src': 'assets/image/svg-icon/logo-css.svg', 'figcaption': 'CSS3', 'width': 64, 'height': 64},
        {'src': 'assets/image/svg-icon/logo-js.svg', 'figcaption': 'JavaScript', 'width': 459.996, 'height': 512},
        {'src': 'assets/image/svg-icon/logo-python.svg', 'figcaption': 'Python', 'width': 512, 'height': 512},
        {'src': 'assets/image/svg-icon/logo-wordpress.svg', 'figcaption': 'WordPress', 'width': 512, 'height': 512},
        {'src': 'assets/image/svg-icon/logo-adobe-ps.svg', 'figcaption': 'Photoshop', 'width': 21, 'height': 21},
    ]
    data.forEach(desc => {
        const container = document.getElementById('skills-container');
        const figure = document.createElement('figure');
        const image = new Image();
        image.src = desc.src;
        image.width = desc.width;
        image.height = desc.height;
        image.loading = 'lazy';
        image.alt = 'icon';
        const figcaption = document.createElement('figcaption');
        figcaption.textContent = desc.figcaption;
        figure.append(image, figcaption);
        container.append(figure);
    })
    showMainEducations();
}

// Skills END

// Educations
function showMainEducations() {
    if(document.getElementById('educations')) return;
    const main = document.getElementById('main-content');
    const section = document.createElement('section');
    section.classList.add('container');
    section.setAttribute('id', 'educations');
    main.insertAdjacentElement('beforeend', section);
    showMainEducationsLoad();
}

function showMainEducationsLoad() {
    const educations = document.getElementById('educations');
    const h2 = document.createElement('h2');
    h2.textContent = 'Pendidikan Saya';
    educations.appendChild(h2);
    const data = [
        {'title': 'SMK Swasta Eka Prasetya', 'src': 'assets/image/svg-icon/chevron-down.svg', 'width': '24', 'height': '24', 'id': 'senior-high-school'},
        {'title': 'Universitas Pancabudi', 'src': 'assets/image/svg-icon/chevron-down.svg', 'width': '24', 'height': '24', 'id': 'university'}
    ]
    data.forEach(item => {
        const figure = document.createElement('figure');
        figure.setAttribute('id', item.id);
        const image = new Image();
        image.src = item.src;
        image.width = item.width;
        image.height = item.height;
        image.loading = 'lazy';
        image.alt = 'icon';
        const figcaption = document.createElement('figcaption');
        figcaption.textContent = item.title;
        figure.append(image, figcaption);
        educations.appendChild(figure);
    });
    document.getElementById('senior-high-school').addEventListener('click', function(e) {
        const figure = e.currentTarget;
        const nextElement = figure.nextElementSibling;
        if (nextElement && nextElement.classList.contains('extra-dropdown')) {
            nextElement.remove();
            const image = figure.querySelector('img');
            image.src = 'assets/image/svg-icon/chevron-down.svg';
        } else {
            const div = document.createElement('div');
            div.classList.add('extra-dropdown');
            const p = document.createElement('p');
            p.textContent = 'Teknik Komputer Jaringan';
            div.appendChild(p);
            figure.insertAdjacentElement('afterend', div);
            const image = figure.querySelector('img');
            image.src = 'assets/image/svg-icon/chevron-up.svg';
        }
    });
    document.getElementById('university').addEventListener('click', function(e) {
        const figure = e.currentTarget;
        const nextElement = figure.nextElementSibling;
        if (nextElement && nextElement.classList.contains('extra-dropdown')) {
            nextElement.remove();
            const image = figure.querySelector('img');
            image.src = 'assets/image/svg-icon/chevron-down.svg';
        } else {
            const div = document.createElement('div');
            div.classList.add('extra-dropdown');
            const p = document.createElement('p');
            p.textContent = 'S1 Teknologi Informasi';
            div.appendChild(p);
            figure.insertAdjacentElement('afterend', div);
            const image = figure.querySelector('img');
            image.src = 'assets/image/svg-icon/chevron-up.svg';
        }
    });
    showMainExperiences();
}
// Educations END

// Experience
function showMainExperiences() {
    if(document.getElementById('experiences')) return;
    const main = document.getElementById('main-content');
    const section = document.createElement('section');
    section.classList.add('container');
    section.setAttribute('id', 'experiences');
    main.insertAdjacentElement('beforeend', section);
    showMainExperiencesLoad();
}

function showMainExperiencesLoad() {
    const experiences = document.getElementById('experiences');
    const h2 = document.createElement('h2');
    h2.textContent = 'Pengalaman Saya';
    experiences.appendChild(h2);
    const data = [
        {'title': 'Dicoding: Belajar Dasar Pemrograman Web', 'src': 'assets/image/main/dicoding.webp', 'height': '564', 'width': '798'},
        {'title': 'Revou: Intro to Software Engineering', 'src': 'assets/image/main/revou.webp', 'height': '565', 'width': '798'}
    ]
    data.forEach(item => {
        const figure = document.createElement('figure');
        const img = new Image();
        img.src = item.src;
        img.width = item.width;
        img.height = item.height;
        img.loading = 'lazy';
        img.alt = 'certificate';
        const figcaption = document.createElement('figcaption');
        figcaption.textContent = item.title;
        figure.append(img, figcaption);
        experiences.appendChild(figure);
    })
    showMainWorks();
}
// Experiences END

// Works
function showMainWorks() {
    if(document.getElementById('works')) return;
    const main = document.getElementById('main-content');
    const section = document.createElement('section');
    section.classList.add('container');
    section.setAttribute('id', 'works');
    main.insertAdjacentElement('beforeend', section);
    showMainWorksLoad();
}

function showMainWorksLoad() {
    const works = document.getElementById('works');
    const h2 = document.createElement('h2');
    h2.textContent = 'Pekerjaan Saya';
    works.appendChild(h2);
    const nav = document.createElement('nav');
    nav.setAttribute('id', 'works-nav');
    const ul = document.createElement('ul');
    list = [
        { 'text': 'Instagram Design', 'id': 'image-ig'},
        { 'text': 'Puzzle Design', 'id': 'image-puzzle'},
        { 'text': 'Website', 'id': 'image-website'}
    ]
    list.forEach(items => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#';
        a.text = items.text;
        a.setAttribute('id', items.id);
        a.classList.add('works-nav');
        li.appendChild(a);
        ul.appendChild(li);
    })
    nav.appendChild(ul);
    works.appendChild(nav);
    showMainWorksLoadData();
}

function showMainWorksLoadData() {
    // Instagram
    const targetInstagram = document.getElementById('image-ig');
    let slideData = [];
    let currentSlideIndex = 0;
    let isExpanded = false;
    function loadTargetInstagram() {
        document.querySelectorAll('.works-nav').forEach(nav => nav.classList.remove('active'));
        let targetNav = document.getElementById('works-nav-content');
        if (!targetNav) {
            targetNav = document.createElement('div');
            targetNav.setAttribute('id', 'works-nav-content');
            document.getElementById('works').appendChild(targetNav);
        }
        targetNav.innerHTML = '';
        currentSlideIndex = 0;
        isExpanded = false;
        fetch('assets/js/result.json')
            .then(response => response.json())
            .then(data => {
                slideData = data[0].instagram;
                renderSlide(slideData[currentSlideIndex]);

                let button = document.getElementById('load-more');
                if (!button) {
                    button = document.createElement('button');
                    button.textContent = 'Buka Lebih Banyak';
                    button.setAttribute('id', 'load-more');
                    button.addEventListener('click', function () {
                        const container = document.getElementById('works-nav-content');
                        const allSlides = container.querySelectorAll('.slide');
                        if (!isExpanded && currentSlideIndex < slideData.length - 1) {
                            currentSlideIndex++;
                            renderSlide(slideData[currentSlideIndex]);
                            if (currentSlideIndex === slideData.length - 1) {
                                button.textContent = 'Tutup Lebih Sedikit';
                                isExpanded = true;
                            }
                        } else if (isExpanded && currentSlideIndex > 0) {
                            const slides = container.querySelectorAll('.slide')
                            const lastSlide = slides[slides.length -1];
                            if(lastSlide) {
                                lastSlide.classList.remove('fade-in');
                                lastSlide.classList.add('fade-out');
                                setTimeout(() => {
                                    lastSlide.remove();
                                }, 500);
                            }
                            currentSlideIndex--;
                            if (currentSlideIndex === 0) {
                                button.textContent = 'Buka Lebih Banyak';
                                isExpanded = false;
                            }
                        }
                    });
                    targetNav.insertAdjacentElement('afterend', button);
                } else {
                    button.textContent = 'Buka Lebih Banyak';
                }
            });
    }

    function renderSlide(slideObj) {
        const container = document.getElementById('works-nav-content');
        const slideWrapper = document.createElement('div');
        slideWrapper.classList.add('slide-ig','slide', 'fade-in');
        slideObj.image.forEach(img => {
            const image = new Image();
            image.src = img.src;
            image.width = img.width;
            image.height = img.height;
            image.loading = 'lazy';
            image.alt = 'project-gallery';
            slideWrapper.appendChild(image);
        });
        container.appendChild(slideWrapper);
    }
    targetInstagram.addEventListener('click', function (e) {
        e.preventDefault();
        loadTargetInstagram();
        const targetInstagram = document.getElementById('image-ig');
        targetInstagram.classList.add('active');
    });
    loadTargetInstagram();
    // Puzzle
    const puzzle = document.getElementById('image-puzzle');
    const container = document.getElementById('works-nav-content');
    puzzle.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.works-nav').forEach(nav => nav.classList.remove('active'));
        puzzle.classList.add('active');
        if(container) {
            const target = document.querySelectorAll('.slide');
            target.forEach(slide => slide.remove());
            const button = document.getElementById('load-more');
            if(button) button.remove();
            fetch('assets/js/result.json')
            .then(response => response.json())
            .then(data => {
                const dataImage = data[1].puzzle;
                dataImage.forEach(puzzle => {
                    const div = document.createElement('div');
                    div.classList.add('works-nav-content-puzzle', 'fade-in', 'slide');
                    puzzle.image.forEach(img => {
                        const image = new Image();
                        image.src = img.src;
                        image.width = img.width;
                        image.height = img.height;
                        image.loading = 'lazy';
                        image.alt = 'project-gallery';
                        div.appendChild(image);
                    })
                    container.insertAdjacentElement('beforeend', div);
                })
            });
        }
    })
    // Website
    const website = document.getElementById('image-website');
    website.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.works-nav').forEach(nav => nav.classList.remove('active'));
        website.classList.add('active');
        if(container) {
            const target = document.querySelectorAll('.slide');
            target.forEach(slide => slide.remove());
            const button = document.getElementById('load-more');
            if(button) button.remove();
            const div = document.createElement('div');
            div.classList.add('works-nav-content-website', 'fade-in', 'slide');
            const link = ['https://susuetawa.id', 'https://revou-fundamental-course.github.io/17-mar-25-Serba25-JD/']
            link.forEach(list => {
                const iframe = document.createElement('iframe');
                iframe.src = list + '?nocache='+ new Date().getTime();
                iframe.width = '100%';
                iframe.height = '500';
                iframe.style.border = 'none';
                iframe.sandbox = 'allow-scripts allow-same-origin allow-forms allow-popups';
                iframe.loading = 'lazy';
                div.appendChild(iframe);
            });
            container.appendChild(div);
        }
    })
    showMainContact();
}
// Works END

// Contact
function showMainContact() {
    if(document.getElementById('contact')) return;
    const main = document.getElementById('main-content');
    const section = document.createElement('section');
    section.classList.add('container');
    section.setAttribute('id', 'contact');
    main.insertAdjacentElement('beforeend', section);
    showMainContactLoad();
}

function showMainContactLoad() {
    const contact = document.getElementById('contact');
    const h2 = document.createElement('h2');
    h2.textContent = 'Kontak Saya';
    contact.appendChild(h2);
    const div = document.createElement('div');
    div.classList.add('contact-container');
    const divClass = [
        { 'class': 'contact-content', 'id': 'contact-content-left'},
        { 'class': 'contact-content', 'id': 'contact-content-right'}
    ]
    divClass.forEach(classList => {
        const divContent = document.createElement('div');
        divContent.setAttribute('id', classList.id);
        divContent.classList.add(classList.class);
        div.appendChild(divContent);
    })
    contact.appendChild(div);
    // Left
    const left = document.getElementById('contact-content-left');
    const leftData = [
        { 'text': 'jeremi.salvatores@gmail.com', 'src': 'assets/image/svg-icon/mail.svg'},
        { 'text': 'Medan, Sumatera Utara', 'src': 'assets/image/svg-icon/map-pin.svg'},
        { 'text': '0851 5624 6765', 'src': 'assets/image/svg-icon/phone.svg'}
    ]
    leftData.forEach(data => {
        const figureLeftData = document.createElement('figure');
        const figcaptionLeftData = document.createElement('figcaption');
        figcaptionLeftData.textContent = data.text;
        const imageLeftData = new Image();
        imageLeftData.src = data.src;
        imageLeftData.width = 24;
        imageLeftData.height = 24;
        imageLeftData.loading = 'lazy';
        imageLeftData.alt = 'icon';
        figureLeftData.append(imageLeftData, figcaptionLeftData);
        left.appendChild(figureLeftData);
    })
    // Right
    const right = document.getElementById('contact-content-right');
    const rightData = [
        { 'id': 'name', 'type': 'text', 'placeholder': 'Nama', 'required': true, 'src': 'assets/image/svg-icon/user.svg', 'minLength': 3 },
        { 'id': 'email', 'type': 'email', 'placeholder': 'Email', 'required': true, 'src': 'assets/image/svg-icon/mail.svg', 'pattern': '^[a-zA-Z0-9._%+-]+@gmail\\.com$'},
        { 'id': 'phone', 'type': 'tel', 'placeholder': 'No. Handphone', 'required': true, 'src': 'assets/image/svg-icon/phone.svg', 'pattern': '^(\\+62|62|0)8[1-9][0-9]{7,10}$'},
        { 'id': 'message', 'type': 'textarea', 'placeholder': 'Pesan', 'required': true, 'src': 'assets/image/svg-icon/message-circle.svg', 'minLength': 50}
    ];
    rightData.forEach(item => {
        const divRightData = document.createElement('div');
        divRightData.classList.add('content-contact-right-group');
        const image = new Image();
        image.src = item.src;
        image.width = 24;
        image.height = 24;
        image.loading = 'lazy';
        image.alt = 'icon';
        const input = item.type === 'textarea'
        ? document.createElement('textarea')
        : document.createElement('input');
        input.id = item.id;
        if (item.type !== 'textarea') {
            input.type = item.type;
        }
        if (item.minLength) {
            input.minLength = item.minLength;
        }
        if (item.pattern) {
            input.pattern = item.pattern;
        }
        input.placeholder = item.placeholder;
        input.required = true;
        let typingTimeout;
        input.addEventListener('input', () => {
            clearTimeout(typingTimeout);
            typingTimeout = setTimeout(() => {
                if (input.value.trim() === '') {
                    return;
                }
                if (!input.checkValidity()) {
                    showMainNotifications(`${input.placeholder} tidak valid.`);
                } else {
                    const alert = document.getElementById('alert');
                    if (alert) alert.remove();
                }
            }, 500 * 2);
        });
        divRightData.append(image, input);
        right.appendChild(divRightData);
    });
    const buttonRight = document.createElement('button');
    buttonRight.type = 'submit';
    buttonRight.textContent = 'Kirim';
    buttonRight.classList.add('btn');
    right.appendChild(buttonRight);
    buttonRight.addEventListener('click', function(e) {
        e.preventDefault();
        const allValid = rightData.every(item => {
            const el = document.getElementById(item.id);
            return el.checkValidity();
        });
        if(allValid) {
            showMainNotifications('Berhasil dikirim');
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const message = document.getElementById('message').value.trim();
            const whatsapp = "625156246765";
            let text = 'Halo, saya ingin menghubungi:\n\n';
            text += `Nama : ${name}\n
            Email: ${email}\n
            Handphone: ${phone}\n
            Pesan: ${message}.
            `;
            const encodedMessage = encodeURIComponent(text);
            const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
            if (isMobile) {
                const whatsappAppUrl = `whatsapp://send?phone=${phone}&text=${encodedMessage}`;
                const whatsappWebUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
                let appStoreUrl = '';
                if (/android/i.test(navigator.userAgent)) {
                    appStoreUrl = 'https://play.google.com/store/apps/details?id=com.whatsapp';
                } else if (/iphone|ipad|ipod/i.test(navigator.userAgent)) {
                    appStoreUrl = 'https://apps.apple.com/app/whatsapp-messenger/id310633997';
                }
                let fallbackTimeout;
                let pageHidden = false;
                function onVisibilityChange() {
                    if (document.visibilityState === 'hidden') {
                        pageHidden = true;
                        clearTimeout(fallbackTimeout);
                    }
                }
                document.addEventListener('visibilitychange', onVisibilityChange);
                window.location.href = whatsappAppUrl;
                fallbackTimeout = setTimeout(() => {
                    if (!pageHidden) {
                        window.open(whatsappWebUrl, '_blank');
                        setTimeout(() => {
                            window.location.href = appStoreUrl;
                        }, 3000);
                    }
                }, 2000);
            } else {
                const whatsappWebUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
                window.open(whatsappWebUrl, '_blank');
            }
        } else {
            showMainNotifications('Harap isi semua kolom dengan benar.');
        }
    })
}
// Contact END

// Alert
function showMainNotifications(text) {
    const alert = document.getElementById('alert');
    if(alert) {
        alert.style.display = 'flex';
    } else {
        const main = document.getElementById('main-content');
        const div = document.createElement('div');
        div.classList.add('alert-container')
        div.setAttribute('id', 'alert');
        const divContent = document.createElement('div');
        divContent.classList.add('alert-content');
        const pAlertText = document.createElement('p');
        pAlertText.textContent = text;
        const button = document.createElement('button');
        button.type = 'reset';
        button.textContent = 'Keluar';
        button.setAttribute('id', 'button-close');
        divContent.append(pAlertText, button);
        div.appendChild(divContent);
        main.insertAdjacentElement('beforeend', div);
        closeshowMainNotifications();
    }
}

function closeshowMainNotifications() {
    const alert = document.getElementById('alert');
    alert.style.display = 'flex';
    const button = document.getElementById('button-close');
    button.addEventListener('click', function() {
        alert.style.display = 'none';
        setTimeout(() => {
            alert.remove();
        }, 60 * 1000);
    })
}
// Alert END

// Footer
function showMainFooter() {
    const footer = document.getElementById('footer-content');
    const p = document.createElement('p');
    p.textContent = 'Copyright Jeremi @2025';
    footer.appendChild(p);
}

// Scroll load content
function showCheckScroll(id) {
    const checkElement = document.getElementById(id);
    if(!checkElement) return false;
    const rect = checkElement.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
}

function showCheckScrollActiveNav(id, nav) {
    const allNav = document.querySelectorAll('.list-nav');
    const data = document.getElementById(nav);
    if(showCheckScroll(id)) {
        if(!isActiveNav) {
            allNav.forEach(li => li.classList.remove('active'));
            data.classList.add('active');
        }
    } else {
        data.classList.remove('active');
    }
}

function showCheckScrollLoad() {
    if(showCheckScroll('home')) {
        showMainAbout();
        showCheckScrollActiveNav('about', 'about-nav')
    };
    if(showCheckScroll('about')) {
        showMainSkills();
        showCheckScrollActiveNav('skills', 'skills-nav');
    };
    if(showCheckScroll('educations')) {
        showMainEducations();
        showCheckScrollActiveNav('educations', 'educations-nav');
    };
    if(showCheckScroll('experiences')) {
        showMainExperiences();
        showCheckScrollActiveNav('experiences', 'experiences-nav');
    };
    if(showCheckScroll('works')) {
        showMainWorks();
        showCheckScrollActiveNav('works', 'works-nav');
    };
    if(showCheckScroll('contact')) {
        showMainContact();
        showCheckScrollActiveNav('contact', 'contact-nav');
    };
}


// Responsive
function showHandleResponsive() {
    const isMobile = window.matchMedia('(max-width: 600px)');
    const isTablet = window.matchMedia('(min-width: 601px) and (max-width: 900px)');

    function handleResponsive() {
        if (isMobile.matches) {
            const mobile = document.getElementById('mobile-nav');
            if(!mobile) {
                showMainHeaderMobile();
            }
        } else if (isTablet.matches) {
            const mobile = document.getElementById('mobile-nav');
            if(!mobile) {
                showMainHeaderMobile();
            }
        } else {
            const mobile = document.getElementById('mobile-nav');
            if(mobile) {
                mobile.remove();
                const header = document.getElementById('header-content');
                header.classList.remove('active');
                if (header.classList.length === 0) {
                    header.removeAttribute('class');
                }
                const container = document.getElementById('header-container');
                container.style.removeProperty('display');
            }
        }
    }
    handleResponsive();
    isMobile.addEventListener('change', handleResponsive);
    isTablet.addEventListener('change', handleResponsive);
}
// Responsive END
