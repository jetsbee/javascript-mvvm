import MovieView from './movieView.js';

const ViewController = class {
  #containerEl;

  #views = [];

  #viewModel;

  constructor({ viewModel, el }) {
    this.#containerEl = el;

    this.#viewModel = viewModel;
    this.#viewModel.addEventListener('@update', evt => {
      this.#clear();
      this.#update(evt);
      this.#render();
    });
  }

  #clear() {
    this.#views.splice(0, this.#views.length); // clear previous views
    while (this.#containerEl.firstChild) {
      this.#containerEl.removeChild(this.#containerEl.lastChild);
    }
  }

  #render() {
    this.#views.forEach(view => {
      this.#containerEl.appendChild(view.el);
    });
  }

  #update(evt) {
    evt.target.items.forEach(item => {
      this.#views.push(new MovieView({ title: item.title, releaseYear: item.releaseYear }));
    });
  }

  load() {
    this.#viewModel.fetch();
  }
};

export default ViewController;
