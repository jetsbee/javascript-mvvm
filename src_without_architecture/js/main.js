import axios from 'https://cdn.skypack.dev/axios';

const processMovieData = data => ({
  title: `영화제목: ${data.title}`,
  releaseYear: `개봉년도: ${data.release_year}`,
});

const getMovieItemEl = data => {
  const template = document.createElement('template');
  const html = `
      <li class="movie__item">
        <p class="movie__title">${data.title}</p>
        <p class="movie__release-year">${data.releaseYear}</p>
      </li>
    `;
  template.innerHTML = html.trim(); // Never return a text node of whitespace as the result

  return template.content.firstChild;
};

const fetchMovie = async () => {
  const resp = await axios.get(`${document.location.origin}/json/data.json`);
  const { movies } = resp.data;
  return movies;
};

const main = async () => {
  const movieEl = document.querySelector('.movie');
  const moviesData = await fetchMovie();
  moviesData.forEach(movie => {
    const processedMovieData = processMovieData(movie);
    const movieItemEl = getMovieItemEl(processedMovieData);
    movieEl.appendChild(movieItemEl);
  });
};

document.addEventListener('DOMContentLoaded', main);
