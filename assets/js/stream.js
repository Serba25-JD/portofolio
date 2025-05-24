document.addEventListener('DOMContentLoaded', function() {
    const currentPages = window.location.pathname;
    if (currentPages.includes('anime-streaming.html')) {
        const animeUrlEps = localStorage.getItem('animeUrlEps');
        if (!animeUrlEps) {
            console.error('animeUrlEps is null or undefined.');
        } else {
            animeEps(animeUrlEps);
        }
    }
    if (currentPages.includes('movie-streaming.html')) {
        const movieUrlEps = localStorage.getItem('movieUrlEps');
        if (!movieUrlEps) {
            console.error('movieUrlEps is null or undefined.');
        } else {
            movieEps(movieUrlEps);
        }
    }
    if (currentPages.includes('drakor-streaming.html')) {
        const drakorUrlEps = localStorage.getItem('drakorUrlEps');
        if (!drakorUrlEps) {
            console.error('drakorUrlEps is null or undefined.');
        } else {
            drakorEps(drakorUrlEps);
        }
    }


    // Function
    setTimeout(function() {
        localStorage.clear();
        console.log('Local Storage Dihapus.');
    }, 600000);
    
    function player_error() {
        console.error("An error occurred while loading the player.");
        document.getElementById('loading').style.display = 'none';
    }
});

// Check Url Response 
function checkUrl(url) {
    return fetch(url)
    .then(response => {
        if(!response.ok) {
            throw new Error('Network response not ok');
        }
        return response.json();
    })
    .catch(error => {
        console.error('Error fetching data : ', error);
        return null;
    })
}

// Anime Episode
const animeUrlEps = localStorage.getItem('animeUrlEps');
function animeEps(animeUrlEps) {
    if (!animeUrlEps) {
        console.error('animeUrlEps is null or undefined.');
        document.getElementById('loading').style.display = 'none';
        return;
    }
    document.getElementById('loading').style.display = 'flex';
    checkUrl('https://sheepbrand.com/sheepbrandftp/public/animelink?url=' + animeUrlEps)
    .then(data => {
        if (data && data.result) {
            const titles = document.querySelector('title');
            titles.innerHTML = `${data.result.title}`;
            const img = localStorage.getItem('animeImgUrl');
            const animeEpsContainer = document.getElementById('show-desc');
            animeEpsContainer.innerHTML = '';
            animeEpsContainer.innerHTML = `
            <article class="eps-desc">
                <img src="https://sheepbrand.com/sheepbrandftp${img}" alt="${data.result.title}" width="225" height="318" loading="lazy" />
                <h3> ${data.result.title} </h3>
            </article>
            <article class="eps-title">
                 ${data.result.data.map(animeEps => {
                    return `
                    <figure class="title-row">
                        <img src="../image/icons-svg/play.svg" width="24" height="24" alt="play" loading="lazy" class="view-eps-anime" data-url="${animeEps.url}" />
                        <figcaption> ${animeEps.eps} </figcaption>
                    </figure> `;
                }).join('')}
            </article>
            <a href="../services/anime.html#services" id="back-btn" rel="noopener noreferrer"> Kembali </a>
            `;
            document.getElementById('loading').style.display = 'none';
            document.querySelectorAll('.view-eps-anime').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const animeUrlView = e.target.getAttribute('data-url');
                    animeEpsView(animeUrlView);
                });
            });
        }
    });

}

// Anime View
function animeEpsView(url) {
    document.getElementById('loading').style.display = 'flex';
    checkUrl('https://sheepbrand.com/sheepbrandftp/public/animestream?url=' + url)
    .then(data => {
        if (data && data.result) {
            const animeEpsViewContainer = document.getElementById('project-stream');
            const headerElements = document.getElementById('stream-title');
            headerElements.innerHTML = `${data.result.title}`;
            const animeEpsView = document.getElementById('project-stream-video');
            const iframe = animeEpsView.querySelector('iframe');
            if (iframe) {
                document.getElementById('loading').style.display = 'flex';
                iframe.contentWindow.postMessage('checkDebugger', '*');
                window.addEventListener('message', (event) => {
                    if (event.data === 'checkDebugger') {
                        console.log('Debugger check received in iframe!');
                    }
                });
                if (iframe.src !== data.result.url) {
                    iframe.src = data.result.url;
                }
                iframe.onerror = function () {
                    player_error();
                }
            } else {
                document.getElementById('loading').style.display = 'flex';
                const newIframe = document.createElement('iframe');
                newIframe.width = '1280';
                newIframe.height = '720';
                newIframe.src = data.result.url;
                newIframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
                newIframe.allowFullScreen = true;
                newIframe.loading = 'lazy';
                newIframe.onerror = function () {
                    player_error();
                }
                animeEpsView.appendChild(newIframe);
                animeEpsViewContainer.classList.toggle('active');
            }
        }
        document.getElementById('loading').style.display = 'none';
    })
    .catch(error => {
        console.error("An error occurred while fetching data:", error);
        document.getElementById('loading').style.display = 'none';
    });
}

// Movie Episode
const movieUrlEps = localStorage.getItem('movieUrlEps');
function movieEps(url) {
    if (!movieUrlEps) {
        console.error('movieUrlEps is null or undefined.');
        document.getElementById('loading').style.display = 'none';
        return;
    }
    document.getElementById('loading').style.display = 'flex';
    checkUrl('https://sheepbrand.com/sheepbrandftp/public/movielink?url=' + url)
    .then(data => {
        if(data && data.result) {
            const movieEpsContainer = document.getElementById('show-desc');
            const titles = document.querySelector('title');
            const title = localStorage.getItem('movieUrlEpsTitle');
            titles.innerHTML = `${title}`;
            const img = localStorage.getItem('movieUrlEpsImage');
            movieEpsContainer.innerHTML = '';
            movieEpsContainer.innerHTML = `
            <article class="eps-desc">
                <img src="https://sheepbrand.com/sheepbrandftp${img}" alt="${title}" width="225" height="318" loading="lazy" />
                <h3> ${title} </h3>
            </article>
            <article class="eps-title">
                 ${data.result.map(movieEps => {
                    return `
                    <figure class="title-row">
                        <img src="../image/icons-svg/play.svg" width="24" height="24" alt="play" loading="lazy" class="view-eps-movie" data-url="${movieEps.url}" />
                        <figcaption> ${movieEps.server} </figcaption>
                    </figure> `;
                }).join('')}
            </article> 
            <a href="../services/movie.html#services" id="back-btn" rel="noopener noreferrer"> Kembali </a>
            `;
            document.getElementById('loading').style.display = 'none';
            document.querySelectorAll('.view-eps-movie').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const movieUrlView = e.target.getAttribute('data-url');
                    movieEpsView(movieUrlView);
                });
            });
        }   
    })
    .catch(error => {
        console.error("An error occurred while fetching data:", error);
        document.getElementById('loading').style.display = 'none';
    });
}

// Movie View
function movieEpsView(url) {
    document.getElementById('loading').style.display = 'flex';
    setTimeout(() => {
        window.open(url, '_blank', 'noopener,noreferrer');
        document.getElementById('loading').style.display = 'none';
    }, 500);
}

// Drakor Episode
const drakorUrlEps = localStorage.getItem('drakorUrlEps');
function drakorEps(url) {
    if (!drakorUrlEps) {
        console.error('drakorUrlEps is null or undefined.');
        document.getElementById('loading').style.display = 'none';
        return;
    }
    document.getElementById('loading').style.display = 'flex';
    checkUrl('https://sheepbrand.com/sheepbrandftp/public/drakorlink?url=' + url)
    .then(data => {
        if(data && data.result) {
            const drakorEpsContainer = document.getElementById('show-desc');
            const titles = document.querySelector('title');
            const title = localStorage.getItem('drakorUrlEpsTitle');
            titles.innerHTML = `${title}`;
            const img = localStorage.getItem('drakorUrlEpsImage');
            drakorEpsContainer.innerHTML = '';
            drakorEpsContainer.innerHTML = `
            <article class="eps-desc">
                <img src="https://sheepbrand.com/sheepbrandftp${img}" alt="${title}" width="225" height="318" loading="lazy" />
                <h3> ${title} </h3>
            </article>
            <article class="eps-title">
                 ${data.result.map(drakorEps => {
                    if (Array.isArray(drakorEps.url)) {
                        const servers = drakorEps.url.find(u => u.server === "Server 1");
                        return `
                            <figure class="title-row">
                                <figcaption> ${drakorEps.title} </figcaption>
                                ${drakorEps.url.map(server => `
                                    <img src="../image/icons-svg/play.svg" width="24" height="24" alt="play"loading="lazy" class="view-eps-drakor" data-url="${server.link}" data-server="${server.server}" />
                                    <h3>${server.server}</h3>
                                `).join('')}
                            </figure> `;
                    }
                    return `
                        <figure class="title-row">
                            <img src="../image/icons-svg/play.svg" width="24" height="24" alt="play" loading="lazy" class="view-eps-drakor" data-url="${drakorEps.url}" />
                            <figcaption> ${drakorEps.title} </figcaption>
                        </figure> `;
                }).join('')}
            </article> 
            <a href="../services/drakor.html#services" id="back-btn" rel="noopener noreferrer"> Kembali </a>
            `;
            document.getElementById('loading').style.display = 'none';
            document.querySelectorAll('.view-eps-drakor').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const drakorUrlView = e.target.getAttribute('data-url');
                    drakorEpsView(drakorUrlView);
                });
            });
        }   
    })
    .catch(error => {
        console.error("An error occurred while fetching data:", error);
        document.getElementById('loading').style.display = 'none';
    });
}

// Drakor View
function drakorEpsView(url) {
    document.getElementById('loading').style.display = 'flex';
    checkUrl('https://sheepbrand.com/sheepbrandftp/public/drakorstream?url=' + url)
    .then(data => {
        if (data && data.result) {
            const drakorEpsViewContainer = document.getElementById('project-stream');
            const headerElements = document.getElementById('stream-title');
            const title = localStorage.getItem('drakorUrlEpsTitle');
            headerElements.innerHTML = `${title}`;
            const drakorEpsView = document.getElementById('project-stream-video');
            const iframe = drakorEpsView.querySelector('iframe');
            if (iframe) {
                document.getElementById('loading').style.display = 'flex';
                iframe.contentWindow.postMessage('checkDebugger', '*');
                window.addEventListener('message', (event) => {
                    if (event.data === 'checkDebugger') {
                        console.log('Debugger check received in iframe!');
                    }
                });
                if (iframe.src !== data.result.url) {
                    iframe.src = data.result.url;
                }
                iframe.onerror = function () {
                    player_error();
                }
            } else {
                document.getElementById('loading').style.display = 'flex';
                const newIframe = document.createElement('iframe');
                newIframe.width = '1280';
                newIframe.height = '720';
                newIframe.src = data.result.url;
                newIframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
                newIframe.allowFullScreen = true;
                newIframe.loading = 'lazy';
                newIframe.onerror = function () {
                    player_error();
                }
                drakorEpsView.appendChild(newIframe);
                drakorEpsViewContainer.classList.toggle('active');
            }
        }
        document.getElementById('loading').style.display = 'none';
    })
    .catch(error => {
        console.error("An error occurred while fetching data:", error);
        document.getElementById('loading').style.display = 'none';
    });
}