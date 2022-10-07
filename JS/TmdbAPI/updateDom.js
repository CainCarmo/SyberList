import { FactoryDom }    from "../DOM/factoryDom.js"
import { objHeaderDom }  from "../Collections/headerCollection.js"
import { objHomeDom }    from "../Collections/homeCollection.js"
import { objDetailsDom } from "../Collections/detailsCollection.js"
import { VanillaTilt }   from "../Vanilla-Tilt/vanilla-tilt.js"

export class UpdateDomTmdb {

    constructor() {
        this.oFactoryDom  = new FactoryDom()
        this.BaseImageURL = "https://image.tmdb.org/t/p/w500"
    }

    async FindGenre(ID) {
        console.log(ID)
        let genresJson = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=32a48ac8387366ff3d957d772176624f&language=pt-BR`)
                .then(res => res.json())
                .catch(err => console.warn(err.message))

        let genre = genresJson.map(genre => {
            if (genre.id = ID)
                return genre.name
        })

        return await genre
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
                <img id="banner__image" src="${this.BaseImageURL+informationSerie.poster_path}" alt="Imagem do Card">
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
        console.log(informationMovies)
        sectionHeader.innerHTML = `
            <!-- Título da Sessão -->
            <h2 class="section__title">
                <i class="fa-solid fa-arrow-trend-up"></i> - Top Filmes 
            </h2>
            <button type="button" class="section__button">Veja Mais</button>
        `

        sectionRankList.innerHTML = informationMovies.slice(0, 5).map((movie, index) => {
            return `
                <div class="section__item">
                    <!-- Rank Index -->
                    <div class="item__rank--wrapper">
                        <h2 class="item__rank">${index + 1}</h2>
                    </div>
                    <!-- Rank Description -->
                    <div class="item__description">
                        <img src="${this.BaseImageURL+movie.poster_path}" alt="Ranking Image">
                        <div class="item__information">
                            <div class="item__title--wrapper">
                                <h3 class="item__title">
                                    <a href="./details.php?type=movie&id=${movie.id}">${movie.title}</a>
                                </h3>
                            </div>
                            <div class="item__extra--wrapper">
                                <span class="item__year">${movie.release_date.split("-")[0]}</span>
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

    SetMoviesPopular(data) {}

    SetMoviesLatest(data) {}

    SetMoviesUpComing(data) {}

    SetMoviesByID(data) {}

    SetMoviesRecommendatiosByID() {}
    
    SetMoviesSimilar(data) {}

    SetTvTop(data) {}

    SetTvLatest(data) {}

    SetTvPopular(data) {}

    SetTvByID(data) {}
    
    SetTvRecommendationsByID(data) {}
}