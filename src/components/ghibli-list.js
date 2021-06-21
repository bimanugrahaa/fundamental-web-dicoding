import "../components/ghibli-item.js";

class GhibliList extends HTMLElement {
    set films(films) {
        [this._films] = films;
        this.render();
    }

    render() {
        this.innerHTML = "";
        this.className = "row row-cols-1 row-cols-sm-2 row-cols-md-3";
        this._films.forEach(film => {
            const ghibliItemElement = document.createElement("ghibli-item");
            ghibliItemElement.setAttribute(
                "class",
                "col-lg-4 col-md-6 col-sm-12 mb-3"
            );
            ghibliItemElement.film = film;
            this.appendChild(ghibliItemElement);
        });
    }

    renderError(message) {
        this.innerHTML = "";
        this.innerHTML += `<h2 class="text-secondary mt-5">${message}</h2>`;
    }
}

customElements.define("ghibli-list", GhibliList);