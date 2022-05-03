import MovieListViewModel from './viewModel/movieListViewModel.js';
import MovieViewController from './view/movieViewController.js';

document.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('.movie');
  const movieListViewModel = new MovieListViewModel();
  const movieViewCtrl = new MovieViewController({ viewModel: movieListViewModel, el });
  movieViewCtrl.load();
});
