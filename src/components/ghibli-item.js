import film from '../data/film.js'

class GhibliItem extends HTMLElement{
    set film(film){
        this._film = film;
        this.render();
    }

    render(){
        const id = this._film.id;
        this.innerHTML = `
        <div class="card text-center mt-4" style="background-color:#ecf4f3">
        <img src="${film[id]}" class="card-img-top img-fluid">
            <div class="card-body">
                <h5 class="card-title"> ${this._film.title} </h5>
                <h6 class="card-subtitle mb-2"> ${this._film.release_date} </h6>
                <button type="button" class="btn text-white" style="background-color:#006a71"
                    data-toggle="collapse" data-target="#${this._film.id}" 
                    aria-expanded="false"> Detail </button>
                <div class="card font-weight-bold text-wrap ml-5 mr-5 mt-2 text-white"
                    style="background-color:#68b0ab">
                    <p class="m-2"> ${this._film.rt_score}/100 </p>
                </div>
                
                <div class="collapse mt-4" id="${this._film.id}">
                    <div class="card border-info mb-2">
                        <h5 class="card-header bg-info text-white"> Description </h5>
                        <div class="card-body">${this._film.description}</div>
                    </div>
                    <div class="card border-info">
                        <h5 class="card-header text-white bg-info"> Info </h5>
                        <div class=" card-body">
                            <h6 class="text-info"> Release Date </h6> 
                            ${this._film.release_date}
                            </br>
                            </br>
                            <h6 class="text-info"> Director </h6>
                            ${this._film.director}
                            </br>
                            </br>
                            <h6 class="text-info"> Producer </h6>
                            ${this._film.producer}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define("ghibli-item", GhibliItem);