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
    checkUrl('https://sheepbrand.com/sheepbrandftp/api/animelink?url=https://riie.stream/' + animeUrlEps)
    .then(data => {
        if (data && data.result) {
            // const showEpsContainer = document.getElementById('show-eps');
            // showEpsContainer.innerHTML = '';
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
                <nav>
                    <ul>
                        ${data.result.data.map(animeEps => {
                            return `
                            <li> <a href="#" class="view-eps" data-url=${animeEps.url} target="_blank" rel="noopener noreferrer"> ${animeEps.eps} </a> </li>
                            `;
                        }).join('')}
            </article>
            `;
            document.getElementById('loading').style.display = 'none';
            document.querySelectorAll('.view-eps').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const animeUrlView = e.target.getAttribute('data-url');
                    animeEpsView(animeUrlView);
                    // window.location.href = 'anime-streaming.html';
                    // localStorage.setItem('animeUrlView', animeUrlView);
                });
            });
        }
    });
    setTimeout(function() {
        localStorage.clear();
        console.log('Local Storage Dihapus.');
    }, 600000); 
}


// const animeUrlView = localStorage.getItem('animeUrlView');
function animeEpsView(url) {
    document.getElementById('loading').style.display = 'flex';
    checkUrl('https://sheepbrand.com/sheepbrandftp/api/animestream?url=https://riie.stream/' + url)
    .then(data => {
        if (data && data.result) {
            // const titles = document.querySelector('title');
            // titles.innerHTML = `${results.title}`;
            const animeEpsViewContainer = document.getElementById('anime-stream');
            animeEpsViewContainer.classList.toggle('active');
            const animeEpsViewIframe = document.getElementById('anime-stream-video');
            const iframe = document.createElement('iframe');
            if (iframe.innerHTML === '') {
                iframe.width = "560";
                iframe.height = "315";
                iframe.src = data.result.url;
                iframe.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
                iframe.allowFullscreen = true;
                iframe.onerror = function() {
                    player_error();
                };
                animeEpsViewIframe.appendChild(iframe);
                document.getElementById('loading').style.display = 'none';
            } else {
                console.log('error');
            }
            // animeEpsViewIframe.innerHTML = `
            // <iframe width="560" height="315" src="${data.result.url}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `;
            // document.getElementById('loading').style.display = 'none';
        }
    })
}

function player_error() {
    console.error("An error occurred while loading the player.");
    document.getElementById('loading').style.display = 'none';
}

// animeEpsView(animeUrlView);