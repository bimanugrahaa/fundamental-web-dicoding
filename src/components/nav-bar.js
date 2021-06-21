import Logo from "../assets/ghibli-logo.svg"

class NavBar extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <nav class="navbar justify-content-center navbar-expand-lg navbar-dark"
            style="background-color:#e8505b">
            <a class="navbar-brand" href="#">
            <img src="${Logo}" width="200" height="50" class="brand-icon" alt="ghibli-logo"></a>
        </nav>`;
    }
}

customElements.define("nav-bar", NavBar);