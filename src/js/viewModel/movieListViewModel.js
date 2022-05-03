import axios from 'https://cdn.skypack.dev/axios';

import { EventDispatcher } from '../util/EventDispatcher.js';
import MovieModel from '../model/movieModel.js';

const ViewModel = class extends EventDispatcher {
  #models = [];

  get items() {
    return this.#models.map(model => ({
      title: `영화제목: ${model.title}`,
      releaseYear: `개봉년도: ${model.releaseYear}`,
    }));
  }

  async fetch() {
    const resp = await axios.get(`${document.location.origin}/json/data.json`);
    const { movies } = resp.data;
    movies.forEach(movie => {
      const { title, release_year: releaseYear } = movie;
      this.#models.push(new MovieModel({ title, releaseYear }));
    });

    await (delayMs =>
      new Promise(resolve => {
        setTimeout(resolve, delayMs);
      }))(1500); // sleep (Not necessary)

    this.dispatchEvent({ type: '@update' });
  }
};

export default ViewModel;
