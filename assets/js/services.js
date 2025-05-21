document.addEventListener('DOMContentLoaded', function() {
    animeGoing(currentPageAnime);
    movieGoing(currentPageMovie);

    // Set Timeout Clear Local Storage
    setTimeout(function() {
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
    document.getElementById('loadinganime').style.display = 'flex';
    checkUrl('https://sheepbrand.com/sheepbrandftp/api/animegoing?pages=' + pages)
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
                document.getElementById('loadinganime').style.display = 'none';
            });

            // Menambahkan event listener ke setiap tombol Episode
            document.querySelectorAll('.anime-list-eps').forEach(link => {
                link.addEventListener('click', function(e) {
                    const animeUrl = e.target.getAttribute('data-url');
                    const animeImgURL = e.target.getAttribute('img-src');
                    localStorage.setItem('animeUrlEps', animeUrl);
                    localStorage.setItem('animeImgUrl', animeImgURL);
                    window.location.href = 'anime-streaming.html';
                });
            });
        }
    });
    
}

// Tombol Halaman Sebelumnya
document.getElementById('prevBtnAnime').addEventListener('click', () => {
    if (currentPageAnime > minPageAnime) {
        currentPageAnime--;
            animeGoing(currentPageAnime, 'prev');
    } else {
        alert('Ini adalah halaman pertama.');
    }
});

// Tombol Halaman Selanjutnya
document.getElementById('nextBtnAnime').addEventListener('click', () => {
    if (currentPageAnime < maxPageAnime) {
        currentPageAnime++;
            animeGoing(currentPageAnime, 'next');
    } else {
        alert('Ini adalah halaman terakhir.');
    }
});

// Moviegoing
let minPageMovie = 1;
let maxPageMovie = 18;
let currentPageMovie = 1;

function movieGoing(pages, direction = null) {
    document.getElementById('loadingmovie').style.display = 'flex';
    checkUrl('https://sheepbrand.com/sheepbrandftp/api/moviegoing?pages=' + pages)
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
                    <button class="movie-list-eps" data-url="${movie.url}"> Nonton Movie </button>
                `;
                moviegoingContainer.appendChild(moviegoingSection);
                document.getElementById('loadingmovie').style.display = 'none';
            });

            // Menambahkan event listener ke setiap tombol Episode
            document.querySelectorAll('.movie-list-eps').forEach(link => {
                link.addEventListener('click', function(e) {
                    const movieUrl = e.target.getAttribute('data-url');
                    localStorage.setItem('movieUrlEps', movieUrl);
                    window.location.href = 'movie-streaming.html';
                });
            });
        }
    });
    
}

// Tombol Halaman Sebelumnya
document.getElementById('prevBtnMovie').addEventListener('click', () => {
    if (currentPageMovie > minPageMovie) {
        currentPageMovie--;
            movieGoing(currentPageMovie, 'prev');
    } else {
        alert('Ini adalah halaman pertama.');
    }
});

// Tombol Halaman Selanjutnya
document.getElementById('nextBtnMovie').addEventListener('click', () => {
    if (currentPageMovie < maxPageMovie) {
        currentPageMovie++;
            movieGoing(currentPageMovie, 'next');
    } else {
        alert('Ini adalah halaman terakhir.');
    }
});