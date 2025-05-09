document.addEventListener('DOMContentLoaded', function() {
    animeGoing(currentPage);
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
let currentPage = 1;

function animeGoing(pages) {
    document.getElementById('loading').style.display = 'flex';
    checkUrl('https://sheepbrand.com/sheepbrandftp/api/animegoing?pages=' + pages)
    .then(data => {
        if (data && data.result) {
            const animegoingContainer = document.getElementById('anime-going');
            animegoingContainer.innerHTML = '';
            data.result.forEach(anime => {
                const animegoingSection = document.createElement('figure');
                animegoingSection.classList.add('row');
                animegoingSection.innerHTML = `
                    <img src="${anime.image}" alt="${anime.title}" width="225" height="318" loading="lazy" />
                    <figcaption>${anime.title}</figcaption>
                    <button class="list-eps" data-url="${anime.url}"> Episode </button>
                `;
                animegoingContainer.appendChild(animegoingSection);
                document.getElementById('loading').style.display = 'none';
            });

            // Menambahkan event listener ke setiap tombol Episode
            document.querySelectorAll('.list-eps').forEach(link => {
                link.addEventListener('click', function(e) {
                    const animeUrl = e.target.getAttribute('data-url');
                    window.location.href = 'anime-streaming.html';
                    localStorage.setItem('animeUrlEps', animeUrl);
                    // const showEpsContainer = e.target.closest('figure').querySelector('.show-eps');
                    // if (showEpsContainer.innerHTML === '') {
                    //     animeEps(animeUrl, showEpsContainer);
                    // } else {
                    //     showEpsContainer.innerHTML = '';
                    // }
                });
            });

            // Tombol Halaman Sebelumnya
            document.getElementById('prevBtn').addEventListener('click', () => {
                if (currentPage > 1) {
                    currentPage--;
                    animeGoing(currentPage);
                }
            });

            // Tombol Halaman Selanjutnya
            document.getElementById('nextBtn').addEventListener('click', () => {
                currentPage++;
                animeGoing(currentPage);
            });
        }
    });
    
}