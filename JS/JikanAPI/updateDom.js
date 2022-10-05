import { FactoryDom }    from "../DOM/factoryDom.js"
import { objHeaderDom }  from "../Collections/headerCollection.js"
import { objHomeDom }    from "../Collections/homeCollection.js"
import { objDetailsDom } from "../Collections/detailsCollection.js"
import { VanillaTilt }   from "../Vanilla-Tilt/vanilla-tilt.js"

export class updateDomJikan {

    constructor() {
        this.oFactoryDom = new FactoryDom()
    }

    SetAnimeSearch(data) {
        const divAnimeItemsWrapper = this.oFactoryDom.CreateBlockElement("div", [], ["search__items--wrapper"])
        const informationAnime     = data.data

        divAnimeItemsWrapper.innerHTML = informationAnime.map(anime => {
            return `
            <div class="search__item">
                <div class="item__description">
                    <img src="${anime.images.webp.image_url}" alt="Image Result">
                    <div class="item__information">
                        <div class="item__title--wrapper">
                            <h3 class="item__title">
                                <a href="./details.php?type=anime&id=${anime.mal_id}">${anime.titles[0].title}</a>
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

        animeEpisodes.forEach((e, i) => {
            if (informationAnime[i].episodes === null)
                e.innerHTML = null
        })

        animeYear.forEach((e, i) => {
            if (informationAnime[i].year === null)
                e.innerHTML = null
        })

        animeType.forEach((e, i) => {
            if (informationAnime[i].type === null)
                e.innerHTML = null
        })

        objHeaderDom.divSearchResults.appendChild(divAnimeItemsWrapper)
    }

    SetAnimeBanner(data) {
        const bannerInfoWrapper = this.oFactoryDom.CreateBlockElement("div", [], ["banner__info--wrapper"])
        const informationAnime  = data.data
        
        bannerInfoWrapper.innerHTML = `
            <div id="banner__info">
                <h1 id="banner__title">${informationAnime.titles[0].title}</h1>
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

        VanillaTilt.init(bannerInfoWrapper.querySelector("#banner__image"), {
            max: "25",
            speed: 400,
            glare: true,
            "max-glare": 1
        })

        objHomeDom.sectionBanner.appendChild(bannerInfoWrapper)
    }

    SetRankingAnime(data) {
        const sectionRank      = this.oFactoryDom.CreateBlockElement("section", ["section__ranking"])
        const sectionHeader    = this.oFactoryDom.CreateBlockElement("section", ["section__header"])
        const sectionRankList  = this.oFactoryDom.CreateBlockElement("section", ["section__list"])
        const informationAnime = data.data

        sectionHeader.innerHTML = `
            <!-- Título da Sessão -->
            <h2 class="section__title">
                <i class="fa-solid fa-arrow-trend-up"></i> - Ranking Animes
            </h2>
            <button type="button" class="section__button">Veja Mais</button>
        `

        sectionRankList.innerHTML = informationAnime.slice(0, 5).map(anime => {
            return `
                <div class="section__item">
                    <!-- Rank Index -->
                    <div class="item__rank--wrapper">
                        <h2 class="item__rank">${anime.rank}</h2>
                    </div>
                    <!-- Rank Description -->
                    <div class="item__description">
                        <img src="${anime.images.webp.large_image_url}" alt="Ranking Image">
                        <div class="item__information">
                            <div class="item__title--wrapper">
                                <h3 class="item__title">
                                    <a href="./details.php?type=anime&id=${anime.mal_id}">${anime.titles[0].title}</a>
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
        objHomeDom.mainPage.appendChild(sectionRank)
    }

    SetSeasonNow(data) {
        const sectionSliders   = this.oFactoryDom.CreateBlockElement("section", ["section__sliders"])
        const sectionHeader    = this.oFactoryDom.CreateBlockElement("header", ["section__header"])
        const sectionSlider    = this.oFactoryDom.CreateBlockElement("div", ["section__slider"], ["slider__seasonSN"])
        const sectionDots      = this.oFactoryDom.CreateBlockElement("div", ["dots"], ["slider__seasonSN--dots"], ["tablist"])
        const informationAnime = data.data

        sectionHeader.innerHTML = `
            <!-- Título da Sessão -->
            <h2 class="section__title">
                <i class="fa-solid fa-mug-saucer"></i> - Temporada Atual
            </h2>
            <div class="section__arrows">
                <button type="button" class="section__arrow" id="arrow__backSN">
                    <i class="fa-solid fa-circle-chevron-left"></i>
                </button>
                <button type="button" class="section__arrow" id="arrow__nextSN">
                    <i class="fa-solid fa-circle-chevron-right"></i>
                </button>
            </div>
        `

        sectionSlider.innerHTML = informationAnime.map(anime => {
            return `
                <div class="section__card">
                    <!-- Imagem do Card -->
                    <img src="${anime.images.webp.large_image_url}" alt="Card Image">
                    <!-- Informações do Card -->
                    <div class="card__information">
                        <h3 class="card__title">${anime.titles[0].title}</h3>
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
        objHomeDom.mainPage.appendChild(sectionSliders)
        
        new Glider(sectionSlider, {
            slidesToShow: 5,
            slidesToScroll: 5,
            dots: "#slider__seasonSN--dots",
            draggable: true,
            arrows: {
                prev: "#arrow__backSN",
                next: "#arrow__nextSN"
            }
        })
    }

    SetSeasonUpComming(data) {
        const sectionSliders   = this.oFactoryDom.CreateBlockElement("section", ["section__sliders"])
        const sectionHeader    = this.oFactoryDom.CreateBlockElement("header", ["section__header"])
        const sectionSlider    = this.oFactoryDom.CreateBlockElement("div", ["section__slider"], ["slider__seasonSU"])
        const sectionDots      = this.oFactoryDom.CreateBlockElement("div", ["dots"], ["slider__seasonSU--dots"], ["tablist"])
        const informationAnime = data.data

        sectionHeader.innerHTML = `
            <!-- Título da Sessão -->
            <h2 class="section__title">
                <i class="fa-solid fa-mug-saucer"></i> - Próxima Temporada
            </h2>
            <div class="section__arrows">
                <button type="button" class="section__arrow" id="arrow__backSU">
                    <i class="fa-solid fa-circle-chevron-left"></i>
                </button>
                <button type="button" class="section__arrow" id="arrow__nextSU">
                    <i class="fa-solid fa-circle-chevron-right"></i>
                </button>
            </div>
        `

        sectionSlider.innerHTML = informationAnime.map(anime => {
            return `
                <div class="section__card">
                    <!-- Imagem do Card -->
                    <img src="${anime.images.webp.large_image_url}" alt="Card Image">
                    <!-- Informações do Card -->
                    <div class="card__information">
                        <h3 class="card__title">${anime.titles[0].title}</h3>
                        <button type="button" class="card__button">
                            <a href="#">Saiba Mais</a>
                        </button>
                        <span class="card__extra">
                            ${anime.type}<br>${anime.year}
                        </span>
                    </div>
                </div>   
            `
        }).join("")

        const itemYear = sectionSlider.querySelectorAll(".card__extra")

        itemYear.forEach((e, i) => {
            if (informationAnime[i].year === null)
                e.innerHTML = informationAnime[i].type
        })

        sectionSliders.appendChild(sectionHeader)
        sectionSliders.appendChild(sectionSlider)
        sectionSliders.appendChild(sectionDots)
        objHomeDom.mainPage.appendChild(sectionSliders)
        
        new Glider(sectionSlider, {
            slidesToShow: 5,
            slidesToScroll: 5,
            dots: "#slider__seasonSU--dots",
            draggable: true,
            arrows: {
                prev: "#arrow__backSU",
                next: "#arrow__nextSU"
            }
        })
    }

    SetRecentAnimeRecommendations(data) {
        const sectionSliders   = this.oFactoryDom.CreateBlockElement("section", ["section__sliders"])
        const sectionHeader    = this.oFactoryDom.CreateBlockElement("header", ["section__header"])
        const sectionSlider    = this.oFactoryDom.CreateBlockElement("div", ["section__slider"], ["slider__seasonRRA"])
        const sectionDots      = this.oFactoryDom.CreateBlockElement("div", ["dots"], ["slider__seasonRRA--dots"], ["tablist"])
        const informationAnime = data.data

        sectionHeader.innerHTML = `
            <!-- Título da Sessão -->
            <h2 class="section__title">
                <i class="fa-solid fa-mug-saucer"></i> - Recomendações Anime
            </h2>
            <div class="section__arrows">
                <button type="button" class="section__arrow" id="arrow__backRRA">
                    <i class="fa-solid fa-circle-chevron-left"></i>
                </button>
                <button type="button" class="section__arrow" id="arrow__nextRRA">
                    <i class="fa-solid fa-circle-chevron-right"></i>
                </button>
            </div>
        `
        
        sectionSlider.innerHTML = informationAnime.slice(0, 20).map(anime => {
            return `
                <div class="section__card">
                    <!-- Imagem do Card -->
                    <img src="${anime.entry[0].images.webp.large_image_url}" alt="Card Image">
                    <!-- Informações do Card -->
                    <div class="card__information">
                        <h3 class="card__title">${anime.entry[0].title}</h3>
                        <button type="button" class="card__button">
                            <a href="./details.php?type=anime&id=${anime.entry[0].mal_id}">Saiba Mais</a>
                        </button>
                        <span class="card__extra"></span>
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
            dots: "#slider__seasonRRA--dots",
            draggable: true,
            arrows: {
                prev: "#arrow__backRRA",
                next: "#arrow__nextRRA"
            }
        })
    }

    SetAnimeFullByID(data) {    
        const bannerInfoWrapper = this.oFactoryDom.CreateBlockElement("div", [], ["banner__info--wrapper"])
        const informationAnime  = data.data

        bannerInfoWrapper.innerHTML = `
            <div id="banner__info">
                <form method="POST">
                    <form method="POST" id="banner__form">
                        <button id="form__submit" name="salvar" type="submit">
                            <i class="fa-star fa-regular" id="star-details"></i>
                        </button>
                    </form>
                </form>
                <h1 id="banner__title">${informationAnime.title}</h1>
                <p id="banner__description">
                    ${informationAnime.synopsis}
                </p>
            </div>

            <div id="banner__card">
                <img id="banner__image" src="${informationAnime.images.webp.large_image_url}" alt="Imagem do Card">
                
            </div>
        `
        const bannerInfo   = bannerInfoWrapper.querySelector("#banner__info")
        const bannerGenres = this.oFactoryDom.CreateBlockElement("div", [], ["banner__genres"])
        const bannerGenre  = this.oFactoryDom.CreateBlockElement("div", ["banner__genre"], ["banner__type"])

        bannerGenres.innerHTML = informationAnime.genres.map(genre => {
            return `
                <div class="banner__genre">
                    <span>${genre.name}</span>
                </div>
            `
        }).join("")

        bannerGenre.innerHTML = ` <span>${informationAnime.type}</span> `

        VanillaTilt.init(bannerInfoWrapper.querySelector("#banner__image"), {
            max: "25",
            speed: 400,
            glare: true,
            "max-glare": 1
        })

        bannerGenres.insertBefore(bannerGenre, bannerGenres.children[0])
        bannerInfo.appendChild(bannerGenres)
        objDetailsDom.sectionBanner.appendChild(bannerInfoWrapper)

        const sectionTrailer      = this.oFactoryDom.CreateBlockElement("section", [], ["section__trailer"])
        const sectionHeader       = this.oFactoryDom.CreateBlockElement("header", ["section__header"])
        const trailerVideoWrapper = this.oFactoryDom.CreateBlockElement("div", [], ["trailer__video--wrapper"])

        sectionHeader.innerHTML = `
            <!-- Título da Sessão -->
            <h2 class="section__title">
                <i class="fa-solid fa-mug-saucer"></i> - Trailler
            </h2>
        `

        trailerVideoWrapper.innerHTML = `
            <iframe id="trailer__video" src="${informationAnime.trailer.embed_url}" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `

        objHeaderDom.title.innerHTML = `${informationAnime.title} | SyberList`
        sectionTrailer.appendChild(sectionHeader)
        sectionTrailer.appendChild(trailerVideoWrapper)
        
        informationAnime.trailer.embed_url == null
            ? ""
            : objDetailsDom.mainDetails.appendChild(sectionTrailer)
    }

    SetAnimeCharacters(data) {
        const sectionSliders   = this.oFactoryDom.CreateBlockElement("section", ["section__sliders"])
        const sectionHeader    = this.oFactoryDom.CreateBlockElement("header", ["section__header"])
        const sectionSlider    = this.oFactoryDom.CreateBlockElement("div", ["section__slider"], ["slider__seasonCH"])
        const sectionDots      = this.oFactoryDom.CreateBlockElement("div", ["dots"], ["slider__seasonCH--dots"], ["tablist"])
        const informationAnime = data.data

        sectionHeader.innerHTML = `
            <!-- Título da Sessão -->
            <h2 class="section__title">
                <i class="fa-solid fa-mug-saucer"></i> - Personagens
            </h2>
            <div class="section__arrows">
                <button type="button" class="section__arrow" id="arrow__backCH">
                    <i class="fa-solid fa-circle-chevron-left"></i>
                </button>
                <button type="button" class="section__arrow" id="arrow__nextCH">
                    <i class="fa-solid fa-circle-chevron-right"></i>
                </button>
            </div>
        `

        sectionSlider.innerHTML = informationAnime.slice(0, 30).map(char => {
            return `
                <div class="section__card">
                    <!-- Imagem do Card -->
                    <img src="${char.character.images.webp.image_url}" alt="Card Image">
                    <!-- Informações do Card -->
                    <div class="card__information">
                        <h3 class="card__title">${char.character.name}</h3>
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
            dots: "#slider__seasonCH--dots",
            draggable: true,
            arrows: {
                prev: "#arrow__backCH",
                next: "#arrow__nextCH"
            }
        })
    }

    SetAnimeStaff(data) {}

    SetAnimeEpisodes(data) {}

    SetAnimeRecommendations(data) {
        const sectionSliders   = this.oFactoryDom.CreateBlockElement("section", ["section__sliders"])
        const sectionHeader    = this.oFactoryDom.CreateBlockElement("header", ["section__header"])
        const sectionSlider    = this.oFactoryDom.CreateBlockElement("div", ["section__slider"], ["slider__seasonRE"])
        const sectionDots      = this.oFactoryDom.CreateBlockElement("div", ["dots"], ["slider__seasonRE--dots"], ["tablist"])
        const informationAnime = data.data

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

        sectionSlider.innerHTML = informationAnime.slice(0, 30).map(anime => {
            return `
                <div class="section__card">
                    <!-- Imagem do Card -->
                    <img src="${anime.entry.images.webp.large_image_url}" alt="Card Image">
                    <!-- Informações do Card -->
                    <div class="card__information">
                        <h3 class="card__title">${anime.entry.title}</h3>
                        <button type="button" class="card__button">
                            <a href="./details.php?type=anime&id=${anime.mal_id}">Saiba Mais</a>
                        </button>
                        <span class="card__extra"></span>
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
            dots: "#slider__seasonRE--dots",
            draggable: true,
            arrows: {
                prev: "#arrow__backRE",
                next: "#arrow__nextRE"
            }
        })
    }

    SetAnimeThemes(data) {}

    SetAnimeStreaming(data) {}

    SetAnimeGenres(data) {}

    SetRankingManga(data) {
        const sectionRank      = this.oFactoryDom.CreateBlockElement("section", ["section__ranking"])
        const sectionHeader    = this.oFactoryDom.CreateBlockElement("section", ["section__header"])
        const sectionRankList  = this.oFactoryDom.CreateBlockElement("section", ["section__list"])
        const informationManga = data.data

        sectionHeader.innerHTML = `
            <!-- Título da Sessão -->
            <h2 class="section__title">
                <i class="fa-solid fa-arrow-trend-up"></i> - Ranking Mangás
            </h2>
            <button type="button" class="section__button">Veja Mais</button>
        `

        sectionRankList.innerHTML = informationManga.slice(0, 5).map(manga => {
            return `
                <div class="section__item">
                    <!-- Rank Index -->
                    <div class="item__rank--wrapper">
                        <h2 class="item__rank">${manga.rank}</h2>
                    </div>
                    <!-- Rank Description -->
                    <div class="item__description">
                        <img src="${manga.images.webp.large_image_url}" alt="Ranking Image">
                        <div class="item__information">
                            <div class="item__title--wrapper">
                                <h3 class="item__title">
                                    <a href="./details.php?type=manga&id=${manga.mal_id}">${manga.titles[0].title}</a>
                                </h3>
                            </div>
                            <div class="item__extra--wrapper">
                                <span class="item__chapters item__manga">${manga.chapters} capítulos</span>
                                <span class="item__year item__manga">${manga.published.prop.from.year}</span>
                                <span class="item__type item__manga">${manga.type}</span>
                            </div>
                        </div>
                    </div>
                    <!-- Rank Score -->
                    <div class="item__score">
                        <i class="fas fa-star"></i>
                        <strong class="item__avaliation">${manga.score}</strong>
                    </div>
                </div>
            `
        }).join("")

        const itemChapters = sectionRankList.querySelectorAll(".item__chapters.item__manga")
        const itemYear     = sectionRankList.querySelectorAll(".item__year.item__manga")
        const itemType     = sectionRankList.querySelectorAll(".item__type.item__manga")
        
        itemChapters.forEach((e, i) => {
            if (informationManga[i].chapters === null)
                e.innerHTML = null
        })

        itemYear.forEach((e, i) => {
            if (informationManga[i].published.prop.from.year === null)
                e.innerHTML = null
        })

        itemType.forEach((e, i) => {
            if (informationManga[i].type === null)
                e.innerHTML = null
        })

        sectionRank.appendChild(sectionHeader)
        sectionRank.appendChild(sectionRankList)
        objHomeDom.mainPage.appendChild(sectionRank)
    }

    SetRecentMangaRecommendations(data) {
        const sectionSliders   = this.oFactoryDom.CreateBlockElement("section", ["section__sliders"])
        const sectionHeader    = this.oFactoryDom.CreateBlockElement("header", ["section__header"])
        const sectionSlider    = this.oFactoryDom.CreateBlockElement("div", ["section__slider"], ["slider__seasonRRM"])
        const sectionDots      = this.oFactoryDom.CreateBlockElement("div", ["dots"], ["slider__seasonRRM--dots"], ["tablist"])
        const informationManga = data.data

        sectionHeader.innerHTML = `
            <!-- Título da Sessão -->
            <h2 class="section__title">
                <i class="fa-solid fa-mug-saucer"></i> - Recomendações Mangá
            </h2>
            <div class="section__arrows">
                <button type="button" class="section__arrow" id="arrow__backRRM">
                    <i class="fa-solid fa-circle-chevron-left"></i>
                </button>
                <button type="button" class="section__arrow" id="arrow__nextRRM">
                    <i class="fa-solid fa-circle-chevron-right"></i>
                </button>
            </div>
        `
        
        sectionSlider.innerHTML = informationManga.slice(0, 15).map(manga => {
            return `
                <div class="section__card">
                    <!-- Imagem do Card -->
                    <img src="${manga.entry[0].images.webp.large_image_url}" alt="Card Image">
                    <!-- Informações do Card -->
                    <div class="card__information">
                        <h3 class="card__title">${manga.entry[0].title}</h3>
                        <button type="button" class="card__button">
                            <a href="./details.php?type=manga&id=${manga.entry[0].mal_id}">Saiba Mais</a>
                        </button>
                        <span class="card__extra"></span>
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
            dots: "#slider__seasonRRM--dots",
            draggable: true,
            arrows: {
                prev: "#arrow__backRRM",
                next: "#arrow__nextRRM"
            }
        })
    }

    SetMangaFullByID(data) {
        const bannerInfoWrapper = this.oFactoryDom.CreateBlockElement("div", [], ["banner__info--wrapper"])
        const informationManga  = data.data

        bannerInfoWrapper.innerHTML = `
            <div id="banner__info">
                <form id="form__details" name="form__details" action="details.php" method="POST" enctype="application/x-www-form-urlencoded">
                    <button id="form__submit" name="salvar" type="button">
                        <i class="fa-star fa-regular" id="star-details"></i>
                    </button>
                </form>
                <h1 id="banner__title">${informationManga.title}</h1>
                <p id="banner__description">
                    ${informationManga.synopsis}
                </p>
            </div>

            <div id="banner__card">
                <img id="banner__image" src="${informationManga.images.webp.large_image_url}" alt="Imagem do Card">
                
            </div>
        `
        const bannerInfo   = bannerInfoWrapper.querySelector("#banner__info")
        const bannerGenres = this.oFactoryDom.CreateBlockElement("div", [], ["banner__genres"])
        const bannerGenre  = this.oFactoryDom.CreateBlockElement("div", ["banner__genre"], ["banner__type"])

        bannerGenres.innerHTML = informationManga.genres.map(genre => {
            return `
                <div class="banner__genre">
                    <span>${genre.name}</span>
                </div>
            `
        }).join("")

        bannerGenre.innerHTML = ` <span>${informationManga.type}</span> `

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

    SetMangaCharacters(data) {
        const sectionSliders   = this.oFactoryDom.CreateBlockElement("section", ["section__sliders"])
        const sectionHeader    = this.oFactoryDom.CreateBlockElement("header", ["section__header"])
        const sectionSlider    = this.oFactoryDom.CreateBlockElement("div", ["section__slider"], ["slider__seasonCH"])
        const sectionDots      = this.oFactoryDom.CreateBlockElement("div", ["dots"], ["slider__seasonCH--dots"], ["tablist"])
        const informationManga = data.data

        sectionHeader.innerHTML = `
            <!-- Título da Sessão -->
            <h2 class="section__title">
                <i class="fa-solid fa-mug-saucer"></i> - Personagens
            </h2>
            <div class="section__arrows">
                <button type="button" class="section__arrow" id="arrow__backCH">
                    <i class="fa-solid fa-circle-chevron-left"></i>
                </button>
                <button type="button" class="section__arrow" id="arrow__nextCH">
                    <i class="fa-solid fa-circle-chevron-right"></i>
                </button>
            </div>
        `

        sectionSlider.innerHTML = informationManga.slice(0, 30).map(char => {
            return `
                <div class="section__card">
                    <!-- Imagem do Card -->
                    <img src="${char.character.images.webp.image_url}" alt="Card Image">
                    <!-- Informações do Card -->
                    <div class="card__information">
                        <h3 class="card__title">${char.character.name}</h3>
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
            dots: "#slider__seasonCH--dots",
            draggable: true,
            arrows: {
                prev: "#arrow__backCH",
                next: "#arrow__nextCH"
            }
        })
    }

    SetMangaPictures(data) {
        const sectionSliders   = this.oFactoryDom.CreateBlockElement("section", ["section__sliders"])
        const sectionHeader    = this.oFactoryDom.CreateBlockElement("header", ["section__header"])
        const sectionSlider    = this.oFactoryDom.CreateBlockElement("div", ["section__slider"], ["slider__seasonPC"])
        const sectionDots      = this.oFactoryDom.CreateBlockElement("div", ["dots"], ["slider__seasonPC--dots"], ["tablist"])
        const informationManga = data.data

        sectionHeader.innerHTML = `
            <!-- Título da Sessão -->
            <h2 class="section__title">
                <i class="fa-solid fa-mug-saucer"></i> - Capas
            </h2>
            <div class="section__arrows">
                <button type="button" class="section__arrow" id="arrow__backPC">
                    <i class="fa-solid fa-circle-chevron-left"></i>
                </button>
                <button type="button" class="section__arrow" id="arrow__nextPC">
                    <i class="fa-solid fa-circle-chevron-right"></i>
                </button>
            </div>
        `

        sectionSlider.innerHTML = informationManga.slice(0, 30).map(picture => {
            return `
                <div class="section__card">
                    <!-- Imagem do Card -->
                    <img src="${picture.webp.image_url}" alt="Card Image">
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
            dots: "#slider__seasonPC--dots",
            draggable: true,
            arrows: {
                prev: "#arrow__backPC",
                next: "#arrow__nextPC"
            }
        })
    }

    SetMangaRecommendations(data) {
        const sectionSliders   = this.oFactoryDom.CreateBlockElement("section", ["section__sliders"])
        const sectionHeader    = this.oFactoryDom.CreateBlockElement("header", ["section__header"])
        const sectionSlider    = this.oFactoryDom.CreateBlockElement("div", ["section__slider"], ["slider__seasonRE"])
        const sectionDots      = this.oFactoryDom.CreateBlockElement("div", ["dots"], ["slider__seasonRE--dots"], ["tablist"])
        const informationManga = data.data

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

        sectionSlider.innerHTML = informationManga.slice(0, 30).map(anime => {
            return `
                <div class="section__card">
                    <!-- Imagem do Card -->
                    <img src="${anime.entry.images.webp.large_image_url}" alt="Card Image">
                    <!-- Informações do Card -->
                    <div class="card__information">
                        <h3 class="card__title">${anime.entry.title}</h3>
                        <button type="button" class="card__button">
                            <a href="./details.php?type=manga&id=${anime.mal_id}">Saiba Mais</a>
                        </button>
                        <span class="card__extra"></span>
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
            dots: "#slider__seasonRE--dots",
            draggable: true,
            arrows: {
                prev: "#arrow__backRE",
                next: "#arrow__nextRE"
            }
        })
    }

    SetMangaGenres(data) {}
}