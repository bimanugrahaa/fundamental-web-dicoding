class GhibliCarousel extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <div class="m-5">
            <div id="ghibliCarousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#ghibliCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#ghibliCarousel" data-slide-to="1"></li>
                    <li data-target="#ghibliCarousel" data-slide-to="2"></li>
                    <li data-target="#ghibliCarousel" data-slide-to="3"></li>
                    <li data-target="#ghibliCarousel" data-slide-to="4"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="http://www.ghibli.jp/images/totoro1.jpg" class="rounded-lg img-fluid" alt="ghibli-images">
                        <div class="carousel-caption rounded mr-5 ml-5" style="background-color:#ff7e67">
                            <h4>My Neighbor Totoro</h4>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="http://www.ghibli.jp/images/chihiro1.jpg" class="rounded-lg img-fluid" alt="ghibli-images">
                        <div class="carousel-caption rounded mr-5 ml-5" style="background-color:#ff7e67">
                            <h4>Spirited Away</h4>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="http://www.ghibli.jp/images/kaze1.jpg" class="rounded-lg img-fluid" alt="ghibli-images">
                        <div class="carousel-caption rounded mr-5 ml-5" style="background-color:#ff7e67">
                            <h4>The Wind Rises</h4>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="http://www.ghibli.jp/images/buta1.jpg" class="rounded-lg img-fluid" alt="ghibli-images">
                        <div class="carousel-caption rounded mr-5 ml-5" style="background-color:#ff7e67">
                            <h4>Porco Rosso</h4>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="http://www.ghibli.jp/images/neko1.jpg" class="rounded-lg img-fluid" alt="ghibli-images">
                        <div class="carousel-caption rounded mr-5 ml-5" style="background-color:#ff7e67">
                            <h4>The Cat Returns</h4>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("ghibli-carousel", GhibliCarousel);