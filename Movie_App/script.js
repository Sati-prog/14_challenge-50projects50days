"use strict";

const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=aa6555ca3b843c69abc880f7795782b9&page=1',
      IMG_PATH = 'https://image.tmdb.org/t/p/w1280',
      SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=aa6555ca3b843c69abc880f7795782b9&query="';

const form = document.getElementById('form'),
      search = document.getElementById('search'),
      main = document.getElementById('main');

      // Get initial movies
getMovies(API_URL);

async function getMovies(url) {

    const res = await fetch(url),
          data = await res.json();

    showMovies(data.results);
}

function showMovies(movies) {


    main.innerHTML = '';

    movies.forEach(movie => {
        
        const { title, poster_path, vote_average, overview } = movie,
              movieEl = document.createElement('div');

        movieEl.classList.add('movie');

        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                    ${overview}
            </div>
        `;

        main.appendChild(movieEl);
    });
}

function getClassByRate(vote) {

    if (vote >= 8) {

        return 'green';
    } else if (vote >= 5) {

        return 'orange';
    } else {

        return 'red';
    }
}

form.addEventListener('submit', (e) => {

    e.preventDefault();

    const searchTerm = search.value;


    if (searchTerm && searchTerm !== '') {

        getMovies(SEARCH_API + searchTerm);

        search.value = '';
    } else {

        window.location.reload();
    }
});