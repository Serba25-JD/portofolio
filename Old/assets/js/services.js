document.addEventListener('DOMContentLoaded', function () {
    if (window.location.href.includes('anime.html')) {
        animeGoing(currentPageAnime);
    } else if (window.location.href.includes('movie.html')) {
        movieGoing(currentPageMovie);
    } else if (window.location.href.includes('drakor.html')) {
        drakorGoing(currentPageDrakor);
    }

    // Tombol Anime
    const prevBtnAnime = document.getElementById('prevBtnAnime');
    const nextBtnAnime = document.getElementById('nextBtnAnime');
    if (prevBtnAnime) {
        prevBtnAnime.addEventListener('click', () => {
            if (currentPageAnime > minPageAnime) {
                currentPageAnime--;
                animeGoing(currentPageAnime, 'prev');
            } else {
                alert('Ini adalah halaman pertama.');
            }
        });
    }
    if (nextBtnAnime) {
        nextBtnAnime.addEventListener('click', () => {
            if (currentPageAnime < maxPageAnime) {
                currentPageAnime++;
                animeGoing(currentPageAnime, 'next');
            } else {
                alert('Ini adalah halaman terakhir.');
            }
        });
    }

    // Tombol Movie
    const prevBtnMovie = document.getElementById('prevBtnMovie');
    const nextBtnMovie = document.getElementById('nextBtnMovie');
    if (prevBtnMovie) {
        prevBtnMovie.addEventListener('click', () => {
            if (currentPageMovie > minPageMovie) {
                currentPageMovie--;
                movieGoing(currentPageMovie, 'prev');
            } else {
                alert('Ini adalah halaman pertama.');
            }
        });
    }
    if (nextBtnMovie) {
        nextBtnMovie.addEventListener('click', () => {
            if (currentPageMovie < maxPageMovie) {
                currentPageMovie++;
                movieGoing(currentPageMovie, 'next');
            } else {
                alert('Ini adalah halaman terakhir.');
            }
        });
    }
    
    // Tombol Drakor
    const prevBtnDrakor = document.getElementById('prevBtnDrakor');
    const nextBtnDrakor = document.getElementById('nextBtnDrakor');
    if (prevBtnDrakor) {
        prevBtnDrakor.addEventListener('click', () => {
            if (currentPageDrakor > minPageDrakor) {
                currentPageDrakor--;
                drakorGoing(currentPageDrakor, 'prev');
            } else {
                alert('Ini adalah halaman pertama.');
            }
        });
    }
    if (nextBtnDrakor) {
        nextBtnDrakor.addEventListener('click', () => {
            if (currentPageDrakor < maxPageDrakor) {
                currentPageDrakor++;
                drakorGoing(currentPageDrakor, 'next');
            } else {
                alert('Ini adalah halaman terakhir.');
            }
        });
    }

    // Set Timeout Clear Local Storage
    setTimeout(function () {
        localStorage.clear();
        console.log('Local Storage Dihapus.');
    }, 600000);
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

// Animegoing
let minPageAnime = 1;
let maxPageAnime = 4;
let currentPageAnime = 1;

function animeGoing(pages, direction = null) {
    document.getElementById('loading').style.display = 'flex';
    checkUrl('https://sheepbrand.com/sheepbrandftp/public/animegoing?pages=' + pages)
    .then(data => {
        if (data && data.result) {
            const animegoingContainer = document.getElementById('anime-going');
            animegoingContainer.innerHTML = '';
            if (data.result.length === 0) {
                if (direction === 'next' && currentPageAnime < maxPageAnime) {
                    currentPageAnime++;
                    animeGoing(currentPageAnime, 'next');
                    return;
                } else if (direction === 'prev' && currentPageAnime > minPageAnime) {
                    currentPageAnime--;
                    animeGoing(currentPageAnime, 'prev');
                    return;
                } else {
                    alert('Halaman tidak ada.');
                    return;
                }
            }
            data.result.forEach(anime => {
                const animegoingSection = document.createElement('figure');
                animegoingSection.classList.add('row');
                animegoingSection.innerHTML = `
                    <img src="https://sheepbrand.com/sheepbrandftp${anime.image}" alt="${anime.title}" width="225" height="318" loading="lazy" />
                    <figcaption>${anime.title}</figcaption>
                    <details>
                        <summary> Klik untuk menampilkan detail </summary>
                        <p> ${anime.eps} : Update ${anime.update}</p>
                    </details>
                    <button class="anime-list-eps" data-url="${anime.url}" img-src="${anime.image}"> Episode </button>
                `;
                animegoingContainer.appendChild(animegoingSection);
                document.getElementById('loading').style.display = 'none';
            });

            // Menambahkan event listener ke setiap tombol Episode
            document.querySelectorAll('.anime-list-eps').forEach(link => {
                link.addEventListener('click', function(e) {
                    const animeUrl = e.target.getAttribute('data-url');
                    const animeImgURL = e.target.getAttribute('img-src');
                    localStorage.setItem('animeUrlEps', animeUrl);
                    localStorage.setItem('animeImgUrl', animeImgURL);
                    url = 'anime-streaming.html';
                    document.getElementById('loading').style.display = 'flex';
                    setTimeout(() => {
                        window.open(url, '_blank', 'noopener,noreferrer');
                        document.getElementById('loading').style.display = 'none';
                    }, 1000);
                });
            });
        }
    });
    
}

// Moviegoing
let minPageMovie = 1;
let maxPageMovie = 18;
let currentPageMovie = 1;

function movieGoing(pages, direction = null) {
    document.getElementById('loading').style.display = 'flex';
    checkUrl('https://sheepbrand.com/sheepbrandftp/public/moviegoing?pages=' + pages)
    .then(data => {
        if (data && data.result) {
            const moviegoingContainer = document.getElementById('movie-going');
            moviegoingContainer.innerHTML = '';
            if (data.result.length === 0) {
                if (direction === 'next' && currentPageMovie < maxPageMovie) {
                    currentPageMovie++;
                    movieGoing(currentPageMovie, 'next');
                    return;
                } else if (direction === 'prev' && currentPageMovie > minPageMovie) {
                    currentPageMovie--;
                    movieGoing(currentPageMovie, 'prev');
                    return;
                } else {
                    alert('Halaman tidak ada.');
                    return;
                }
            }
            data.result.forEach(movie => {
                const moviegoingSection = document.createElement('figure');
                moviegoingSection.classList.add('row');
                moviegoingSection.innerHTML = `
                    <img src="https://sheepbrand.com/sheepbrandftp${movie.image}" alt="${movie.title}" width="200" height="300" loading="lazy" />
                    <figcaption>${movie.title}</figcaption>
                    <button class="movie-list-eps" data-url="${movie.url}" data-title="${movie.title}" data-image="${movie.image}"> Nonton Movie </button>
                `;
                moviegoingContainer.appendChild(moviegoingSection);
                document.getElementById('loading').style.display = 'none';
            });

            // Menambahkan event listener ke setiap tombol Episode
            document.querySelectorAll('.movie-list-eps').forEach(link => {
                link.addEventListener('click', function(e) {
                    const movieUrl = e.target.getAttribute('data-url');
                    const movieTitle = e.target.getAttribute('data-title');
                    const movieImage = e.target.getAttribute('data-image');
                    localStorage.setItem('movieUrlEps', movieUrl);
                    localStorage.setItem('movieUrlEpsTitle', movieTitle);
                    localStorage.setItem('movieUrlEpsImage', movieImage);
                    url = 'movie-streaming.html';
                    document.getElementById('loading').style.display = 'flex';
                    setTimeout(() => {
                        window.open(url, '_blank', 'noopener,noreferrer');
                        document.getElementById('loading').style.display = 'none';
                    }, 1000);
                });
            });
        }
    });
    
}

// drakorgoing
let minPageDrakor = 1;
let maxPageDrakor = 7;
let currentPageDrakor = 1;

function drakorGoing(pages, direction = null) {
    document.getElementById('loading').style.display = 'flex';
    checkUrl('https://sheepbrand.com/sheepbrandftp/public/drakorgoing?pages=' + pages)
    .then(data => {
        if (data && data.result) {
            const drakorgoingContainer = document.getElementById('drakor-going');
            drakorgoingContainer.innerHTML = '';
            if (data.result.length === 0) {
                if (direction === 'next' && currentPageDrakor < maxPageDrakor) {
                    currentPageDrakor++;
                    drakorGoing(currentPageDrakor, 'next');
                    return;
                } else if (direction === 'prev' && currentPageDrakor > minPageDrakor) {
                    currentPageDrakor--;
                    drakorGoing(currentPageDrakor, 'prev');
                    return;
                } else {
                    alert('Halaman tidak ada.');
                    return;
                }
            }
            data.result.forEach(drakor => {
                const drakorgoingSection = document.createElement('figure');
                drakorgoingSection.classList.add('row');
                drakorgoingSection.innerHTML = `
                    <img src="https://sheepbrand.com/sheepbrandftp${drakor.image}" alt="${drakor.title}" width="200" height="300" loading="lazy" />
                    <figcaption>${drakor.title}</figcaption>
                    <button class="drakor-list-eps" data-url="${drakor.url}" data-title="${drakor.title}" data-image="${drakor.image}"> Nonton drakor </button>
                `;
                drakorgoingContainer.appendChild(drakorgoingSection);
                document.getElementById('loading').style.display = 'none';
            });

            // Menambahkan event listener ke setiap tombol Episode
            document.querySelectorAll('.drakor-list-eps').forEach(link => {
                link.addEventListener('click', function(e) {
                    const drakorUrl = e.target.getAttribute('data-url');
                    const drakorTitle = e.target.getAttribute('data-title');
                    const drakorImage = e.target.getAttribute('data-image');
                    localStorage.setItem('drakorUrlEps', drakorUrl);
                    localStorage.setItem('drakorUrlEpsTitle', drakorTitle);
                    localStorage.setItem('drakorUrlEpsImage', drakorImage);
                    url = 'drakor-streaming.html';
                    document.getElementById('loading').style.display = 'flex';
                    setTimeout(() => {
                        window.open(url, '_blank', 'noopener,noreferrer');
                        document.getElementById('loading').style.display = 'none';
                    }, 1000);
                });
            });
        }
    });
    
}