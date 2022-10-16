import { FactoryDom }    from "../DOM/factoryDom.js"
import { objHeaderDom }  from "../Collections/headerCollection.js"
import { objHomeDom }    from "../Collections/homeCollection.js"
import { objDetailsDom } from "../Collections/detailsCollection.js"
import { objBrowse }     from "../Collections/browseCollection.js"
import { VanillaTilt }   from "../Vanilla-Tilt/vanilla-tilt.js"

export class UpdateDomTmdb {

    constructor() {
        this.oFactoryDom   = new FactoryDom()
        this.BaseImageURL  = "https://image.tmdb.org/t/p/w500"
        this.ImageNotFound = "./Resources/Image/Not-Found.jpg"
    }

    async SetGenre(data, IDs) {
        const informationGenres = data
    }

    async SetMovieSearch(data) {
        const divMovieItemsWrapper = this.oFactoryDom.CreateBlockElement("div", [], ["search__items--wrapper"])
        const informationMovies    = data.results

        divMovieItemsWrapper.innerHTML = informationMovies.map(movie => {
            
            let cardImage = movie.poster_path != null 
                ? this.BaseImageURL + movie.poster_path
                : this.ImageNotFound

            let cardYear  = movie.release_date != null 
                ? movie.release_date.split("-")[0]
                : ""
            
            return `
            <div class="search__item">
                <div class="item__description">
                    <img src="${cardImage}" alt="Image Result">
                    <div class="item__information">
                        <div class="item__title--wrapper">
                            <h3 class="item__title">
                                <a href="./details.php?type=movie&id=${movie.id}">${movie.title}</a>
                            </h3>
                        </div>
                        <div class="item__extra--wrapper">
                            <span class="item__year">${cardYear}</span>
                            <span class="item__type">Filme</span>
                        </div>
                    </div>
                </div>
            </div>
            `
        }).join("")

        const movieYear = divMovieItemsWrapper.querySelectorAll(".item__year")

        movieYear.forEach((e, i) => {
            if (informationMovies[i].release_date === null)
                e.innerHTML = null
        })

        objHeaderDom.divSearchResults.appendChild(divMovieItemsWrapper)
    }

    SetMovieBrowse(data) {
        const informationMovies = data.results

        objBrowse.mainResults.innerHTML = informationMovies.map(movie => {
            
            let cardImage = movie.poster_path != null 
                ? this.BaseImageURL + movie.poster_path
                : this.ImageNotFound

            let cardYear  = movie.release_date != null 
                ? movie.release_date.split("-")[0]
                : ""

            return `
                <div class="section__card">
                    <!-- Imagem do Card -->
                    <img src="${cardImage}" alt="Card Image">
                    <!-- Informações do Card -->
                    <div class="card__information">
                        <h3 class="card__title">${movie.title}</h3>
                        <button type="button" class="card__button">
                            <a href="./details.php?type=movie&id=${movie.id}">Saiba Mais</a>
                        </button>
                        <span class="card__extra">
                            ${cardYear}
                        </span>
                    </div>
                </div>   
        `
        }).join("")
    }

    SetTvBanner(data) {
        const bannerInfoWrapper = this.oFactoryDom.CreateBlockElement("div", [], ["banner__info--wrapper"])
        const informationSerie  = data
        
        bannerInfoWrapper.innerHTML = `
            <div id="banner__info">
                <h1 id="banner__title">${informationSerie.original_title}</h1>
                <p id="banner__description">
                    ${informationSerie.overview}
                </p>
                <button id="banner__button" type="button">
                    <a href="./details.php?type=movie&id=${informationSerie.id}">Saiba Mais</a>
                </button>
            </div>

            <div id="banner__card">
                <img id="banner__image" src="${this.BaseImageURL + informationSerie.poster_path}" alt="Imagem do Card">
            </div>
        `

        VanillaTilt.init(bannerInfoWrapper.querySelector("#banner__image"), {
            max: "25",
            speed: 400,
            glare: true,
            "max-glare": 1
        })

        objHomeDom.sectionBanner.appendChild(bannerInfoWrapper)
    }

    async SetMoviesTop(data) {
        const sectionRank       = this.oFactoryDom.CreateBlockElement("section", ["section__ranking"])
        const sectionHeader     = this.oFactoryDom.CreateBlockElement("section", ["section__header"])
        const sectionRankList   = this.oFactoryDom.CreateBlockElement("section", ["section__list"])
        const informationMovies = data.results
        
        sectionHeader.innerHTML = `
            <!-- Título da Sessão -->
            <h2 class="section__title">
                <i class="fa-solid fa-arrow-trend-up"></i> - Ranking Filmes 
            </h2>
            <button type="button" class="section__button">Veja Mais</button>
        `

        sectionRankList.innerHTML = informationMovies.slice(0, 5).map((movie, index) => {

            let cardImage = movie.poster_path != null 
                ? this.BaseImageURL + movie.poster_path
                : this.ImageNotFound

            let cardYear  = movie.release_date != null 
                ? movie.release_date.split("-")[0]
                : ""
            
            return `
                <div class="section__item">
                    <!-- Rank Index -->
                    <div class="item__rank--wrapper">
                        <h2 class="item__rank">${index + 1}</h2>
                    </div>
                    <!-- Rank Description -->
                    <div class="item__description">
                        <img src="${cardImage}" alt="Ranking Image">
                        <div class="item__information">
                            <div class="item__title--wrapper">
                                <h3 class="item__title">
                                    <a href="./details.php?type=movie&id=${movie.id}">${movie.title}</a>
                                </h3>
                            </div>
                            <div class="item__extra--wrapper">
                                <span class="item__year">${cardYear}</span>
                                <span class="item__episodes"></span>
                                <span class="item__genre"></span>
                            </div>
                        </div>
                    </div>
                    <!-- Rank Score -->
                    <div class="item__score">
                        <i class="fas fa-star"></i>
                        <strong class="item__avaliation">${movie.vote_average}</strong>
                    </div>
                </div>
            `
        }).join("")

        sectionRank.appendChild(sectionHeader)
        sectionRank.appendChild(sectionRankList)
        objHomeDom.mainPage.appendChild(sectionRank)
    }

    SetMoviesPopular(data) {
        const sectionSliders   = this.oFactoryDom.CreateBlockElement("section", ["section__sliders"])
        const sectionHeader    = this.oFactoryDom.CreateBlockElement("header", ["section__header"])
        const sectionSlider    = this.oFactoryDom.CreateBlockElement("div", ["section__slider"], ["slider__seasonMP"])
        const sectionDots      = this.oFactoryDom.CreateBlockElement("div", ["dots"], ["slider__seasonMP--dots"], ["tablist"])
        const informationMovies = data.results

        sectionHeader.innerHTML = `
            <!-- Título da Sessão -->
            <h2 class="section__title">
                <i class="fa-solid fa-mug-saucer"></i> - Filmes em Destaque
            </h2>
            <div class="section__arrows">
                <button type="button" class="section__arrow" id="arrow__backMP">
                    <i class="fa-solid fa-circle-chevron-left"></i>
                </button>
                <button type="button" class="section__arrow" id="arrow__nextMP">
                    <i class="fa-solid fa-circle-chevron-right"></i>
                </button>
            </div>
        `

        sectionSlider.innerHTML = informationMovies.map(movie => {

            let cardImage = movie.poster_path != null 
                ? this.BaseImageURL + movie.poster_path
                : this.ImageNotFound

            let cardYear  = movie.release_date != null 
                ? movie.release_date.split("-")[0]
                : ""

            return `
                <div class="section__card">
                    <!-- Imagem do Card -->
                    <img src="${cardImage}" alt="Card Image">
                    <!-- Informações do Card -->
                    <div class="card__information">
                        <h3 class="card__title">${movie.title}</h3>
                        <button type="button" class="card__button">
                            <a href="./details.php?type=movie&id=${movie.id}">Saiba Mais</a>
                        </button>
                        <span class="card__extra">
                            ${cardYear}
                        </span>
                    </div>
                </div>   
            `
        }).join("")

        sectionSliders.appendChild(sectionHeader)
        sectionSliders.appendChild(sectionSlider)
        sectionSliders.appendChild(sectionDots)
        objHomeDom.mainPage.appendChild(sectionSliders)
        
        new Glider(sectionSlider, {
            slidesToShow: 5,
            slidesToScroll: 5,
            dots: `#${sectionDots.id}`,
            draggable: true,
            arrows: {
                prev: "#arrow__backMP",
                next: "#arrow__nextMP"
            }
        })
    }

    SetMoviesUpComing(data) {
        const sectionSliders    = this.oFactoryDom.CreateBlockElement("section", ["section__sliders"])
        const sectionHeader     = this.oFactoryDom.CreateBlockElement("header", ["section__header"])
        const sectionSlider     = this.oFactoryDom.CreateBlockElement("div", ["section__slider"], ["slider__seasonMU"])
        const sectionDots       = this.oFactoryDom.CreateBlockElement("div", ["dots"], ["slider__seasonMU--dots"], ["tablist"])
        const informationMovies = data.results
        
        sectionHeader.innerHTML = `
            <!-- Título da Sessão -->
            <h2 class="section__title">
                <i class="fa-solid fa-mug-saucer"></i> - Filmes em Lançamento
            </h2>
            <div class="section__arrows">
                <button type="button" class="section__arrow" id="arrow__backMU">
                    <i class="fa-solid fa-circle-chevron-left"></i>
                </button>
                <button type="button" class="section__arrow" id="arrow__nextMU">
                    <i class="fa-solid fa-circle-chevron-right"></i>
                </button>
            </div>
        `

        sectionSlider.innerHTML = informationMovies.map(movie => {
            
            let cardImage = movie.poster_path != null 
                ? this.BaseImageURL + movie.poster_path
                : this.ImageNotFound

            let cardYear  = movie.release_date != null 
                ? movie.release_date.split("-")[0]
                : ""

            return `
                <div class="section__card">
                    <!-- Imagem do Card -->
                    <img src="${cardImage}" alt="Card Image">
                    <!-- Informações do Card -->
                    <div class="card__information">
                        <h3 class="card__title">${movie.title}</h3>
                        <button type="button" class="card__button">
                            <a href="./details.php?type=movie&id=${movie.id}">Saiba Mais</a>
                        </button>
                        <span class="card__extra">
                            ${cardYear}
                        </span>
                    </div>
                </div>   
            `
        }).join("")

        sectionSliders.appendChild(sectionHeader)
        sectionSliders.appendChild(sectionSlider)
        sectionSliders.appendChild(sectionDots)
        objHomeDom.mainPage.appendChild(sectionSliders)
        
        new Glider(sectionSlider, {
            slidesToShow: 5,
            slidesToScroll: 5,
            dots: `#${sectionDots.id}`,
            draggable: true,
            arrows: {
                prev: "#arrow__backMU",
                next: "#arrow__nextMU"
            }
        })
    }

    async SetMoviesByID(data) {
        const bannerInfoWrapper = this.oFactoryDom.CreateBlockElement("div", [], ["banner__info--wrapper"])
        const infomationMovie   = data

        bannerInfoWrapper.innerHTML = `
            <div id="banner__info">
                <h1 id="banner__title">${infomationMovie.title}</h1>
                <p id="banner__description">
                    ${infomationMovie.overview}
                </p>
            </div>

            <div id="banner__card">
                <img id="banner__image" src="${this.BaseImageURL + infomationMovie.poster_path}" alt="Imagem do Card">
                
            </div>
        `
        const bannerInfo   = bannerInfoWrapper.querySelector("#banner__info")
        const bannerGenres = this.oFactoryDom.CreateBlockElement("div", [], ["banner__genres"])
        const bannerGenre  = this.oFactoryDom.CreateBlockElement("div", ["banner__genre"], ["banner__type"])

        bannerGenre.innerHTML = ` <span>Movie</span> `

        VanillaTilt.init(bannerInfoWrapper.querySelector("#banner__image"), {
            max: "25",
            speed: 400,
            glare: true,
            "max-glare": 1
        })

        objHeaderDom.title.innerHTML = `${infomationMovie.title} | SyberList`

        bannerGenres.insertBefore(bannerGenre, bannerGenres.children[0])
        bannerInfo.appendChild(bannerGenres)
        objDetailsDom.sectionBanner.appendChild(bannerInfoWrapper)
    }

    SetMovieTrailer(data) {
        const sectionTrailer      = this.oFactoryDom.CreateBlockElement("section", [], ["section__trailer"])
        const sectionHeader       = this.oFactoryDom.CreateBlockElement("header", ["section__header"])
        const trailerVideoWrapper = this.oFactoryDom.CreateBlockElement("div", [], ["trailer__video--wrapper"])
        const informationTrailer  = data.results

        sectionHeader.innerHTML = `
            <!-- Título da Sessão -->
            <h2 class="section__title">
                <i class="fa-solid fa-mug-saucer"></i> - Trailler
            </h2>
        `

        trailerVideoWrapper.innerHTML = `
            <iframe id="trailer__video" src="https://www.youtube.com/embed/${informationTrailer[0].key}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `

        sectionTrailer.appendChild(sectionHeader)
        sectionTrailer.appendChild(trailerVideoWrapper)
        
        informationTrailer[0].key == null
            ? ""
            : objDetailsDom.mainDetails.appendChild(sectionTrailer)
    }

    SetMoviesRecommendatiosByID(data) {
        const sectionSliders   = this.oFactoryDom.CreateBlockElement("section", ["section__sliders"])
        const sectionHeader    = this.oFactoryDom.CreateBlockElement("header", ["section__header"])
        const sectionSlider    = this.oFactoryDom.CreateBlockElement("div", ["section__slider"], ["slider__seasonRE"])
        const sectionDots      = this.oFactoryDom.CreateBlockElement("div", ["dots"], ["slider__seasonRE--dots"], ["tablist"])
        const informationMovie = data.results

        sectionHeader.innerHTML = `
            <!-- Título da Sessão -->
            <h2 class="section__title">
                <i class="fa-solid fa-mug-saucer"></i> - Recomendações
            </h2>
            <div class="section__arrows">
                <button type="button" class="section__arrow" id="arrow__backRE">
                    <i class="fa-solid fa-circle-chevron-left"></i>
                </button>
                <button type="button" class="section__arrow" id="arrow__nextRE">
                    <i class="fa-solid fa-circle-chevron-right"></i>
                </button>
            </div>
        `

        sectionSlider.innerHTML = informationMovie.map(movie => {

            let cardImage = movie.poster_path != null 
                ? this.BaseImageURL + movie.poster_path
                : this.ImageNotFound

            let cardYear  = movie.release_date != null 
                ? movie.release_date.split("-")[0]
                : ""

            return `
                <div class="section__card">
                    <!-- Imagem do Card -->
                    <img src="${cardImage}" alt="Card Image">
                    <!-- Informações do Card -->
                    <div class="card__information">
                        <h3 class="card__title">${movie.title}</h3>
                        <button type="button" class="card__button">
                            <a href="./details.php?type=movie&id=${movie.id}">Saiba Mais</a>
                        </button>
                        <span class="card__extra">
                            ${cardYear}
                        </span>
                    </div>
                </div>   
            `
        }).join("")

        sectionSliders.appendChild(sectionHeader)
        sectionSliders.appendChild(sectionSlider)
        sectionSliders.appendChild(sectionDots)
        objDetailsDom.mainDetails.appendChild(sectionSliders)

        new Glider(sectionSlider, {
            slidesToShow: 5,
            slidesToScroll: 5,
            dots: `#${sectionDots.id}`,
            draggable: true,
            arrows: {
                prev: "#arrow__backRE",
                next: "#arrow__nextRE"
            }
        })
    }
    
    SetMoviesSimilar(data) {
        const sectionSliders    = this.oFactoryDom.CreateBlockElement("section", ["section__sliders"])
        const sectionHeader     = this.oFactoryDom.CreateBlockElement("header", ["section__header"])
        const sectionSlider     = this.oFactoryDom.CreateBlockElement("div", ["section__slider"], ["slider__seasonSI"])
        const sectionDots       = this.oFactoryDom.CreateBlockElement("div", ["dots"], ["slider__seasonSI--dots"], ["tablist"])
        const informationMovies = data.results

        sectionHeader.innerHTML = `
            <!-- Título da Sessão -->
            <h2 class="section__title">
                <i class="fa-solid fa-mug-saucer"></i> - Similares
            </h2>
            <div class="section__arrows">
                <button type="button" class="section__arrow" id="arrow__backSI">
                    <i class="fa-solid fa-circle-chevron-left"></i>
                </button>
                <button type="button" class="section__arrow" id="arrow__nextSI">
                    <i class="fa-solid fa-circle-chevron-right"></i>
                </button>
            </div>
        `

        sectionSlider.innerHTML = informationMovies.map(movie => {

            let cardImage = movie.poster_path != null 
                ? this.BaseImageURL + movie.poster_path
                : this.ImageNotFound

            let cardYear  = movie.release_date != null 
                ? movie.release_date.split("-")[0]
                : ""

            return `
                <div class="section__card">
                    <!-- Imagem do Card -->
                    <img src="${cardImage}" alt="Card Image">
                    <!-- Informações do Card -->
                    <div class="card__information">
                        <h3 class="card__title">${movie.title}</h3>
                        <button type="button" class="card__button">
                            <a href="./details.php?type=movie&id=${movie.id}">Saiba Mais</a>
                        </button>
                        <span class="card__extra">
                            ${cardYear}
                        </span>
                    </div>
                </div>   
            `
        }).join("")

        sectionSliders.appendChild(sectionHeader)
        sectionSliders.appendChild(sectionSlider)
        sectionSliders.appendChild(sectionDots)
        objDetailsDom.mainDetails.appendChild(sectionSliders)

        new Glider(sectionSlider, {
            slidesToShow: 5,
            slidesToScroll: 5,
            dots: `#${sectionDots.id}`,
            draggable: true,
            arrows: {
                prev: "#arrow__backSI",
                next: "#arrow__nextSI"
            }
        })
    }

    SetTvBrowse(data) {
        const informationSeries = data.results

        objBrowse.mainResults.innerHTML = informationSeries.map(serie => {
            
            let cardImage = serie.poster_path != null 
                ? this.BaseImageURL + serie.poster_path
                : this.ImageNotFound

            let cardYear  = serie.first_air_date != null 
                ? serie.first_air_date.split("-")[0]
                : ""

            return `
                <div class="section__card">
                    <!-- Imagem do Card -->
                    <img src="${cardImage}" alt="Card Image">
                    <!-- Informações do Card -->
                    <div class="card__information">
                        <h3 class="card__title">${serie.name}</h3>
                        <button type="button" class="card__button">
                            <a href="./details.php?type=tv&id=${serie.id}">Saiba Mais</a>
                        </button>
                        <span class="card__extra">
                            ${cardYear}
                        </span>
                    </div>
                </div>   
            `
        }).join("")
    }

    async SetTvSearch(data) {
        const divSerieItemsWrapper = this.oFactoryDom.CreateBlockElement("div", [], ["search__items--wrapper"])
        const informationSeries    = data.results

        divSerieItemsWrapper.innerHTML = informationSeries.map(serie => {
            
            let cardImage = serie.poster_path != null 
                ? this.BaseImageURL + serie.poster_path
                : this.ImageNotFound

            let cardYear  = serie.first_air_date != null 
                ? serie.first_air_date.split("-")[0]
                : ""

            return `
            <div class="search__item">
                <div class="item__description">
                    <img src="${cardImage}" alt="Image Result">
                    <div class="item__information">
                        <div class="item__title--wrapper">
                            <h3 class="item__title">
                                <a href="./details.php?type=movie&id=${serie.id}">${serie.name}</a>
                            </h3>
                        </div>
                        <div class="item__extra--wrapper">
                            <span class="item__year">${cardYear}</span>
                            <span class="item__type">Filme</span>
                        </div>
                    </div>
                </div>
            </div>
            `
        }).join("")

        const serieYear = divSerieItemsWrapper.querySelectorAll(".item__year")

        serieYear.forEach((e, i) => {
            if (informationSeries[i].first_air_date === null)
                e.innerHTML = null
        })

        objHeaderDom.divSearchResults.appendChild(divSerieItemsWrapper)
    }

    SetTvTop(data) {
        const sectionRank       = this.oFactoryDom.CreateBlockElement("section", ["section__ranking"])
        const sectionHeader     = this.oFactoryDom.CreateBlockElement("section", ["section__header"])
        const sectionRankList   = this.oFactoryDom.CreateBlockElement("section", ["section__list"])
        const informationSeries = data.results
        
        sectionHeader.innerHTML = `
            <!-- Título da Sessão -->
            <h2 class="section__title">
                <i class="fa-solid fa-arrow-trend-up"></i> - Ranking Séries
            </h2>
            <button type="button" class="section__button">Veja Mais</button>
        `

        sectionRankList.innerHTML = informationSeries.slice(0, 5).map((serie, index) => {

            let cardImage = serie.poster_path != null 
                ? this.BaseImageURL + serie.poster_path
                : this.ImageNotFound

            let cardYear  = serie.first_air_date != null 
                ? serie.first_air_date.split("-")[0]
                : ""
            
            return `
                <div class="section__item">
                    <!-- Rank Index -->
                    <div class="item__rank--wrapper">
                        <h2 class="item__rank">${index + 1}</h2>
                    </div>
                    <!-- Rank Description -->
                    <div class="item__description">
                        <img src="${cardImage}" alt="Ranking Image">
                        <div class="item__information">
                            <div class="item__title--wrapper">
                                <h3 class="item__title">
                                    <a href="./details.php?type=tv&id=${serie.id}">${serie.name}</a>
                                </h3>
                            </div>
                            <div class="item__extra--wrapper">
                                <span class="item__year">${cardYear}</span>
                                <span class="item__episodes"></span>
                                <span class="item__genre"></span>
                            </div>
                        </div>
                    </div>
                    <!-- Rank Score -->
                    <div class="item__score">
                        <i class="fas fa-star"></i>
                        <strong class="item__avaliation">${serie.vote_average}</strong>
                    </div>
                </div>
            `
        }).join("")

        sectionRank.appendChild(sectionHeader)
        sectionRank.appendChild(sectionRankList)
        objHomeDom.mainPage.appendChild(sectionRank)
    }

    SetTvPopular(data) {
        const sectionSliders    = this.oFactoryDom.CreateBlockElement("section", ["section__sliders"])
        const sectionHeader     = this.oFactoryDom.CreateBlockElement("header", ["section__header"])
        const sectionSlider     = this.oFactoryDom.CreateBlockElement("div", ["section__slider"], ["slider__seasonTP"])
        const sectionDots       = this.oFactoryDom.CreateBlockElement("div", ["dots"], ["slider__seasonTP--dots"], ["tablist"])
        const informationSeries = data.results

        sectionHeader.innerHTML = `
            <!-- Título da Sessão -->
            <h2 class="section__title">
                <i class="fa-solid fa-mug-saucer"></i> - Séries em Destaque
            </h2>
            <div class="section__arrows">
                <button type="button" class="section__arrow" id="arrow__backTP">
                    <i class="fa-solid fa-circle-chevron-left"></i>
                </button>
                <button type="button" class="section__arrow" id="arrow__nextTP">
                    <i class="fa-solid fa-circle-chevron-right"></i>
                </button>
            </div>
        `

        sectionSlider.innerHTML = informationSeries.map(serie => {

            let cardImage = serie.poster_path != null 
                ? this.BaseImageURL + serie.poster_path
                : this.ImageNotFound

            let cardYear  = serie.first_air_date != null 
                ? serie.first_air_date.split("-")[0]
                : ""

            return `
                <div class="section__card">
                    <!-- Imagem do Card -->
                    <img src="${cardImage}" alt="Card Image">
                    <!-- Informações do Card -->
                    <div class="card__information">
                        <h3 class="card__title">${serie.name}</h3>
                        <button type="button" class="card__button">
                            <a href="./details.php?type=tv&id=${serie.id}">Saiba Mais</a>
                        </button>
                        <span class="card__extra">
                            ${cardYear}
                        </span>
                    </div>
                </div>   
            `
        }).join("")

        sectionSliders.appendChild(sectionHeader)
        sectionSliders.appendChild(sectionSlider)
        sectionSliders.appendChild(sectionDots)
        objHomeDom.mainPage.appendChild(sectionSliders)
        
        new Glider(sectionSlider, {
            slidesToShow: 5,
            slidesToScroll: 5,
            dots: `#${sectionDots.id}`,
            draggable: true,
            arrows: {
                prev: "#arrow__backTP",
                next: "#arrow__nextTP"
            }
        })
    }

    SetTvByID(data) {
        const bannerInfoWrapper = this.oFactoryDom.CreateBlockElement("div", [], ["banner__info--wrapper"])
        const infomationSerie   = data

        bannerInfoWrapper.innerHTML = `
            <div id="banner__info">
                <h1 id="banner__title">${infomationSerie.name}</h1>
                <p id="banner__description">
                    ${infomationSerie.overview}
                </p>
            </div>

            <div id="banner__card">
                <img id="banner__image" src="${this.BaseImageURL + infomationSerie.poster_path}" alt="Imagem do Card">
                
            </div>
        `
        const bannerInfo   = bannerInfoWrapper.querySelector("#banner__info")
        const bannerGenres = this.oFactoryDom.CreateBlockElement("div", [], ["banner__genres"])
        const bannerGenre  = this.oFactoryDom.CreateBlockElement("div", ["banner__genre"], ["banner__type"])

        bannerGenre.innerHTML = ` <span>${infomationSerie.type}</span> `

        VanillaTilt.init(bannerInfoWrapper.querySelector("#banner__image"), {
            max: "25",
            speed: 400,
            glare: true,
            "max-glare": 1
        })

        bannerGenres.insertBefore(bannerGenre, bannerGenres.children[0])
        bannerInfo.appendChild(bannerGenres)
        objDetailsDom.sectionBanner.appendChild(bannerInfoWrapper)
    }

    
    
    SetTvRecommendationsByID(data) {
        const sectionSliders    = this.oFactoryDom.CreateBlockElement("section", ["section__sliders"])
        const sectionHeader     = this.oFactoryDom.CreateBlockElement("header", ["section__header"])
        const sectionSlider     = this.oFactoryDom.CreateBlockElement("div", ["section__slider"], ["slider__seasonRE"])
        const sectionDots       = this.oFactoryDom.CreateBlockElement("div", ["dots"], ["slider__seasonRE--dots"], ["tablist"])
        const informationSeries = data.results

        sectionHeader.innerHTML = `
            <!-- Título da Sessão -->
            <h2 class="section__title">
                <i class="fa-solid fa-mug-saucer"></i> - Recomendações
            </h2>
            <div class="section__arrows">
                <button type="button" class="section__arrow" id="arrow__backRE">
                    <i class="fa-solid fa-circle-chevron-left"></i>
                </button>
                <button type="button" class="section__arrow" id="arrow__nextRE">
                    <i class="fa-solid fa-circle-chevron-right"></i>
                </button>
            </div>
        `

        sectionSlider.innerHTML = informationSeries.map(serie => {

            let cardImage = serie.poster_path != null 
                ? this.BaseImageURL + serie.poster_path
                : this.ImageNotFound

            let cardYear  = serie.first_air_date != null 
                ? serie.first_air_date.split("-")[0]
                : ""
            
            return `
                <div class="section__card">
                    <!-- Imagem do Card -->
                    <img src="${cardImage}" alt="Card Image">
                    <!-- Informações do Card -->
                    <div class="card__information">
                        <h3 class="card__title">${serie.name}</h3>
                        <button type="button" class="card__button">
                            <a href="./details.php?type=movie&id=${serie.id}">Saiba Mais</a>
                        </button>
                        <span class="card__extra">
                            ${cardYear}
                        </span>
                    </div>
                </div>   
            `
        }).join("")

        sectionSliders.appendChild(sectionHeader)
        sectionSliders.appendChild(sectionSlider)
        sectionSliders.appendChild(sectionDots)
        objDetailsDom.mainDetails.appendChild(sectionSliders)

        new Glider(sectionSlider, {
            slidesToShow: 5,
            slidesToScroll: 5,
            dots: `#${sectionDots.id}`,
            draggable: true,
            arrows: {
                prev: "#arrow__backRE",
                next: "#arrow__nextRE"
            }
        })
    }
}