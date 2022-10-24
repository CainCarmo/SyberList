import { FactoryDOM }    from "../DOM/factoryDom.js"
import { objHeaderDOM }  from "../Collections/headerCollection.js"
import { objHomeDOM }    from "../Collections/homeCollection.js"
import { objDetailsDOM } from "../Collections/detailsCollection.js"
import { objSearchDOM }  from "../Collections/searchCollection.js"
import { VanillaTilt }   from "../Vanilla-Tilt/vanilla-tilt.js"

export class UpdateDomJikan {

    constructor() {
        this.oFactoryDom  = new FactoryDOM()
    }

    SetAnimeSearch(data) {
        const divAnimeItemsWrapper = this.oFactoryDom.CreateBlockElement("div", [], ["search__items--wrapper"])
        const informationAnimes    = data.data

        divAnimeItemsWrapper.innerHTML = informationAnimes.map(anime => {
            return `
                <div class="search__item">
                    <div class="item__description">
                        <img src="${anime.images.webp.image_url}" alt="Image Result">
                        <div class="item__information">
                            <div class="item__title--wrapper">
                                <h3 class="item__title">
                                    <a href="./details.php?type=anime&id=${anime.mal_id}">${anime.title}</a>
                                </h3>
                            </div>
                            <div class="item__extra--wrapper">
                                <span class="item__episodes">${anime.episodes} episódios</span>
                                <span class="item__year">${anime.year}</span>
                                <span class="item__type">${anime.type}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `
        }).join("")

        const animeEpisodes = divAnimeItemsWrapper.querySelectorAll(".item__episodes")
        const animeYear     = divAnimeItemsWrapper.querySelectorAll(".item__year")
        const animeType     = divAnimeItemsWrapper.querySelectorAll(".item__type")

        animeEpisodes.forEach((element, index) => {
            informationAnimes[index].episodes === null
                ? element.innerHTML = null
                : ""         
        })

        animeYear.forEach((element, index) => {
            informationAnimes[index].year === null
                ? element.innerHTML = null
                : ""
        })

        animeType.forEach((element, index) => {
            informationAnimes[index].type === null
                ? element.innerHTML = null
                : ""
        })

        objHeaderDOM.DivSearchResults.appendChild(divAnimeItemsWrapper)
    }

    SetAnimeFind(data) {
        const informationAnimes = data.data

        objSearchDOM.MainResults.innerHTML = informationAnimes.map(anime => {
            return `
                <div class="section__card">
                    <!-- Imagem do Card -->
                    <img src="${anime.images.webp.large_image_url}" alt="Card Image">
                    <!-- Informações do Card -->
                    <div class="card__information">
                        <h3 class="card__title">${anime.title}</h3>
                        <button type="button" class="card__button">
                            <a href="./details.php?type=anime&id=${anime.mal_id}">Saiba Mais</a>
                        </button>
                        <span class="card__extra">
                            ${anime.type} <br/> ${anime.year}
                        </span>
                    </div>
                </div>   
            `
        }).join("")

        const itemExtra = document.querySelectorAll(".card__extra")

        itemExtra.forEach((element, index) => {
            informationAnimes[index].year === null
                ? element.innerHTML = informationAnimes[index].type
                : ""

            informationAnimes[index].type === null
                ? element.innerHTML = informationAnimes[index].year
                : ""
        })
    }

    SetAnimeBanner(data) {
        const bannerInfoWrapper = this.oFactoryDom.CreateBlockElement("div", [], ["banner__info--wrapper"])
        const informationAnime  = data.data
        
        bannerInfoWrapper.innerHTML = `
            <div id="banner__info">
                <h1 id="banner__title">${informationAnime.title}</h1>
                <p id="banner__description">
                    ${informationAnime.synopsis}
                </p>
                <button id="banner__button" type="button">
                    <a href="./details.php?type=anime&id=${informationAnime.mal_id}">Saiba Mais</a>
                </button>
            </div>

            <div id="banner__card">
                <img id="banner__image" src="${informationAnime.images.webp.large_image_url}" alt="Imagem do Card">
            </div>
        `

        informationAnime.synopsis === null
            ? bannerInfoWrapper.querySelector("#banner__description").innerHTML = null
            : null

        VanillaTilt.init(bannerInfoWrapper.querySelector("#banner__image"), {
            max: "25",
            speed: 400,
            glare: true,
            "max-glare": 2
        })

        objHomeDOM.SectionBanner.appendChild(bannerInfoWrapper)

        window.sr = ScrollReveal({ reset: true })

        sr.reveal("#banner__info", {
            distance: "100px",
            origin: "left",
            duration: 3000
        })

        sr.reveal("#banner__image", {
            distance: "100px",
            origin: "right",
            duration: 3000
        })
    }

    SetRankingAnime(data) {
        const sectionRank       = this.oFactoryDom.CreateBlockElement("section", ["section__ranking"])
        const sectionHeader     = this.oFactoryDom.CreateBlockElement("section", ["section__header"])
        const sectionRankList   = this.oFactoryDom.CreateBlockElement("section", ["section__list"])
        const informationAnimes = data.data

        sectionHeader.innerHTML = `
            <!-- Título da Sessão -->
            <h2 class="section__title">
                <i class="fa-solid fa-arrow-trend-up"></i> - Ranking Animes
            </h2>
        `

        sectionRankList.innerHTML = informationAnimes.slice(0, 5).map((anime, index) => {
            return `
                <div class="section__item">
                    <!-- Rank Index -->
                    <div class="item__rank--wrapper">
                        <h2 class="item__rank">${index + 1}</h2>
                    </div>
                    <!-- Rank Description -->
                    <div class="item__description">
                        <img src="${anime.images.webp.large_image_url}" alt="Ranking Image">
                        <div class="item__information">
                            <div class="item__title--wrapper">
                                <h3 class="item__title">
                                    <a href="./details.php?type=anime&id=${anime.mal_id}">${anime.title}</a>
                                </h3>
                            </div>
                            <div class="item__extra--wrapper">
                                <span class="item__episodes">${anime.episodes} episódios</span>
                                <span class="item__year">${anime.year}</span>
                                <span class="item__type">${anime.type}</span>
                            </div>
                        </div>
                    </div>
                    <!-- Rank Score -->
                    <div class="item__score">
                        <i class="fas fa-star"></i>
                        <strong class="item__avaliation">${anime.score}</strong>
                    </div>
                </div>
            `
        }).join("")

        sectionRank.appendChild(sectionHeader)
        sectionRank.appendChild(sectionRankList)

        const animeEpisodes = sectionRankList.querySelectorAll(".item__episodes")
        const animeYear     = sectionRankList.querySelectorAll(".item__year")
        const animeType     = sectionRankList.querySelectorAll(".item__type")

        animeEpisodes.forEach((element, index) => {
            informationAnimes[index].episodes === null
                ? element.innerHTML = null
                : ""         
        })

        animeYear.forEach((element, index) => {
            informationAnimes[index].year === null
                ? element.innerHTML = null
                : ""
        })

        animeType.forEach((element, index) => {
            informationAnimes[index].type === null
                ? element.innerHTML = null
                : ""
        })
        
        objHomeDOM.MainPage.appendChild(sectionRank)
    }

    SetSeasonNow(data) {
        const sectionSliders    = this.oFactoryDom.CreateBlockElement("section", ["section__sliders"])
        const sectionHeader     = this.oFactoryDom.CreateBlockElement("header", ["section__header"])
        const sectionSlider     = this.oFactoryDom.CreateBlockElement("div", ["section__slider"], ["slider__seasonSN"])
        const sectionDots       = this.oFactoryDom.CreateBlockElement("div", ["dots"], ["slider__seasonSN--dots"], ["tablist"])
        const informationAnimes = data.data
        
        sectionHeader.innerHTML = `
            <!-- Título da Sessão -->
            <h2 class="section__title">
                <i class="fa-solid fa-mug-saucer"></i> - Temporada Atual
            </h2>
            <div class="section__arrows">
                <button type="button" class="section__arrow" id="arrow__backSN">
                    <i class="fa-solid  fa-chevron-left"></i>
                </button>
                <button type="button" class="section__arrow" id="arrow__nextSN">
                    <i class="fa-solid fa-chevron-right"></i>
                </button>
            </div>
        `

        sectionSlider.innerHTML = informationAnimes.map(anime => {
            return `
                <div class="section__card">
                    <!-- Imagem do Card -->
                    <img src="${anime.images.webp.large_image_url}" alt="Card Image">
                    <!-- Informações do Card -->
                    <div class="card__information">
                        <h3 class="card__title">${anime.title}</h3>
                        <button type="button" class="card__button">
                            <a href="./details.php?type=anime&id=${anime.mal_id}">Saiba Mais</a>
                        </button>
                        <span class="card__extra">
                            ${anime.type}<br>${anime.year}
                        </span>
                    </div>
                </div>   
            `
        }).join("")

        sectionSliders.appendChild(sectionHeader)
        sectionSliders.appendChild(sectionSlider)
        sectionSliders.appendChild(sectionDots)

        const itemExtra = sectionSliders.querySelectorAll(".card__extra")

        itemExtra.forEach((element, index) => {
            informationAnimes[index].year === null
                ? element.innerHTML = informationAnimes[index].type
                : ""

            informationAnimes[index].type === null
                ? element.innerHTML = informationAnimes[index].year
                : ""
        })

        objHomeDOM.MainPage .appendChild(sectionSliders)
        
        new Glider(sectionSlider, {
            slidesToShow: 5,
            slidesToScroll: 5,
            dots: `#${sectionDots.id}`,
            draggable: true,
            arrows: {
                prev: "#arrow__backSN",
                next: "#arrow__nextSN"
            }
        })
    }

    SetSeasonUpComming(data) {}

    SetRecentAnimeRecommendations(data) {}

    SetAnimeFullByID(data) {}

    SetAnimeCharacters(data) {}

    SetAnimeStaff(data) {}

    SetAnimeRecommendations(data) {}

    SetAnimeStreaming(data) {}

    SetMangaSearch(data) {}

    SetMangaFind(data) {}

    SetRankingManga(data) {}

    SetRecentMangaRecommendations(data) {}

    SetMangaFullByID(data) {}

    SetMangaCharacters(data) {}

    SetMangaPictures(data) {}

    SetMangaRecommendations(data) {}
}