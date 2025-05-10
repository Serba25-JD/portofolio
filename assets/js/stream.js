document.addEventListener('DOMContentLoaded', function() {
    animeEps(animeUrlEps);
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
    document.getElementById('loading').style.display = 'flex';
    checkUrl('https://sheepbrand.com/sheepbrandftp/api/animelink?url=' + animeUrlEps)
    .then(data => {
        if (data && data.result) {
            const titles = document.querySelector('title');
            titles.innerHTML = `${data.result.title}`;
            const animeEpsContainer = document.getElementById('show-desc');
            animeEpsContainer.innerHTML = '';
            animeEpsContainer.innerHTML = `
            <figure>
                <img src="${data.result.image}" alt="${data.result.title} width="225" height="318" loading=lazy />
            </figure>
            <article class="eps-desc">
                <h3> Sinopsis ${data.result.title} </h3>
                <p> ${data.result.desc} </p>
            </article>
            <article class="eps-title">
                 ${data.result.data.map(animeEps => {
                    return `
                    <figure class="title-row">
                        <img src="image/icons-svg/play.svg" width="24" height="24" alt="play" loading="lazy" class="view-eps" data-url="${animeEps.url}" />
                        <figcaption> ${animeEps.eps} </figcaption>
                    </figure> `;
                }).join('')}
            </article>
            <a href="layanan.html#services" id="back-btn" rel="noopener noreferrer"> Kembali </a>
            `;
            document.getElementById('loading').style.display = 'none';
            document.querySelectorAll('.view-eps').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const animeUrlView = e.target.getAttribute('data-url');
                    animeEpsView(animeUrlView);
                });
            });
        }
    });

}

function animeEpsView(url) {
    document.getElementById('loading').style.display = 'flex';
    checkUrl('https://sheepbrand.com/sheepbrandftp/api/animestream?url=' + url)
    .then(data => {
        if (data && data.result) {
            const animeEpsViewContainer = document.getElementById('anime-stream');
            const headerElements = document.getElementById('stream-title');
            headerElements.innerHTML = `${data.result.title}`;
            const animeEpsView = document.getElementById('anime-stream-video');
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

setTimeout(function() {
    localStorage.clear();
    console.log('Local Storage Dihapus.');
}, 600000);

function player_error() {
    console.error("An error occurred while loading the player.");
    document.getElementById('loading').style.display = 'none';
}