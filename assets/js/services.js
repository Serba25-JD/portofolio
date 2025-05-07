// document.addEventListener('DOMContentLoaded', function() {
//     animeGoing();

// })

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
// function animeGoing() {
//     checkUrl('https://sheepbrand.com/sheepbrandftp/api/animegoing')
//     .then(data => {
//         if (data && data.result) {
//             const animegoingContainer = document.getElementById('anime-going');
//             data.result.forEach(anime => {
//                 const animegoingSection = document.createElement('figure');
//                 animegoingSection.classList.add('row');
//                 animegoingSection.innerHTML = `
//                 <img src="${anime.image}" alt="${anime.title}" width="225" height="318" loading="lazy" />
//                 <figcaption> ${anime.title} </figcaption>
//                 <button class="list-eps"> Episode </button>
//                 `
//                 animegoingContainer.append(animegoingSection);
//             })
//         }
//     })
//     document.querySelectorAll('.list-eps').forEach(link => {
//         link.addEventListener('click', function(e) {
//             checkUrl(`https://sheepbrand.com/sheepbrandftp/api/animelink?url=${anime.url}`)
//         })
//     })
// }

const list = document.querySelector('.list-eps');
list.addEventListener('click', function(e) {
    console.log(e);
})



// animelink?url=https://riie.stream/anime/shangri-la-frontier-kusoge-hunter-kamige-ni-idoman-to-su-2nd-season/
