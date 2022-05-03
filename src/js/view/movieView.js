const View = class {
  el;

  constructor({ title, releaseYear }) {
    const template = View.#template;

    template.querySelector('.movie__title').textContent = `${title}`;
    template.querySelector('.movie__release-year').textContent = `${releaseYear}`;

    this.el = template;
  }

  static get #template() {
    const template = document.createElement('template');
    const html = `
      <li class="movie__item">
        <p class="movie__title"></p>
        <p class="movie__release-year"></p>
      </li>
    `;
    template.innerHTML = html.trim(); // Never return a text node of whitespace as the result

    return template.content.firstChild;
  }
};

export default View;
