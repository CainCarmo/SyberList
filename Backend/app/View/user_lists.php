<?php

    use App\Model\Entity\Jikan;
    use App\Model\Enums\EnumsJikan;

    $oJikan = new Jikan();
    $cards= "";
    $responses = $oJikan->GetItemsByUser($_SESSION["User"]["ID"]);

    echo '<pre style="color: #000">';

    foreach ($responses as $response) {
        $type = EnumsJikan::ToggleType("GET", $response->FK_TYPE_ID);

        $cards .= '
            <div class="section__card">
                <img src="'. $response->COVER .'" alt="Card Image">
                <div class="card__information">
                    <h3 class="card__title">'. $response->TITLE .'</h3>
                    <button type="button" class="card__button">
                        <a href="./details.php?type=anime&id='. $response->ID_JIKAN .'">Saiba Mais</a>
                    </button>
                    <span class="card__extra">
                        '. $type .'
                    </span>
                </div>
            </div>
        ';
    }
    
    print_r($cards);

    echo '</pre>'; exit;

?>
        
        <section id="banner">
            <img src="./Resources/Image/saber_戦争.jpg" alt="Banner Image">
        </section>

        <div class="container" id="container__lists">
            <main id="content">
                <header id="user__header">
                    <img src="./Resources/Image/117797.jpg" alt="">
                    <div id="user__informations">
                        <h2 id="user__username">Kinshikss</h2>
                        <span id="user__email">cainacarmo@gmail,com</span>
                    </div>
                </header>

                <section class="user__lists" id="lists__anime">
                    
                    <header class="section__header">
                        <h2 class="section__title">
                            <i class="fa-solid fa-list"></i> - Listas Anime
                        </h2>
                        <div class="section__arrows">
                            <button type="button" class="section__arrow section__arrowLA" id="arrow__back">
                                <i class="fa-solid fa-circle-chevron-left"></i>
                            </button>
                            <button type="button" class="section__arrow section__arrowLA" id="arrow__next">
                                <i class="fa-solid fa-circle-chevron-right"></i>
                            </button>
                        </div>
                    </header>

                    <div class="section__lists">
                        <div class="lists__tabs">
                            <button type="button" class="lists__tab" id="button__watch">Para assistir</button>
                            <button type="button" class="lists__tab" id="button__watching">Assistindo</button>
                            <button type="button" class="lists__tab" id="button__watched">Completo</button>
                            <button type="button" class="lists__tab" id="button__drop">Dropado</button>
                        </div>
                        <div id="section__sliders">
                            <div class="section__slider lists__slider slider__anime" id="slider__watch">
                                <div class="section__card">
                                    <img src="./Resources/Image/117797.jpg" alt="Card Image">
                                    <div class="card__information">
                                        <h3 class="card__title">${anime.entry[0].title}</h3>
                                        <button type="button" class="card__button">
                                            <a href="./details.php?type=anime&id=${anime.entry[0].mal_id}">Saiba Mais</a>
                                        </button>
                                        <span class="card__extra"></span>
                                    </div>
                                </div>
                                <div class="section__card">
                                    <img src="./Resources/Image/117797.jpg" alt="Card Image">
                                    <div class="card__information">
                                        <h3 class="card__title">${anime.entry[0].title}</h3>
                                        <button type="button" class="card__button">
                                            <a href="./details.php?type=anime&id=${anime.entry[0].mal_id}">Saiba Mais</a>
                                        </button>
                                        <span class="card__extra"></span>
                                    </div>
                                </div>
                                <div class="section__card">
                                    <img src="./Resources/Image/117797.jpg" alt="Card Image">
                                    <div class="card__information">
                                        <h3 class="card__title">${anime.entry[0].title}</h3>
                                        <button type="button" class="card__button">
                                            <a href="./details.php?type=anime&id=${anime.entry[0].mal_id}">Saiba Mais</a>
                                        </button>
                                        <span class="card__extra"></span>
                                    </div>
                                </div>
                                <div class="section__card">
                                    <img src="./Resources/Image/117797.jpg" alt="Card Image">
                                    <div class="card__information">
                                        <h3 class="card__title">${anime.entry[0].title}</h3>
                                        <button type="button" class="card__button">
                                            <a href="./details.php?type=anime&id=${anime.entry[0].mal_id}">Saiba Mais</a>
                                        </button>
                                        <span class="card__extra"></span>
                                    </div>
                                </div>
                                <div class="section__card">
                                    <img src="./Resources/Image/117797.jpg" alt="Card Image">
                                    <div class="card__information">
                                        <h3 class="card__title">${anime.entry[0].title}</h3>
                                        <button type="button" class="card__button">
                                            <a href="./details.php?type=anime&id=${anime.entry[0].mal_id}">Saiba Mais</a>
                                        </button>
                                        <span class="card__extra"></span>
                                    </div>
                                </div>
                                <div class="section__card">
                                    <img src="./Resources/Image/117797.jpg" alt="Card Image">
                                    <div class="card__information">
                                        <h3 class="card__title">${anime.entry[0].title}</h3>
                                        <button type="button" class="card__button">
                                            <a href="./details.php?type=anime&id=${anime.entry[0].mal_id}">Saiba Mais</a>
                                        </button>
                                        <span class="card__extra"></span>
                                    </div>
                                </div>
                                <div class="section__card">
                                    <img src="./Resources/Image/117797.jpg" alt="Card Image">
                                    <div class="card__information">
                                        <h3 class="card__title">${anime.entry[0].title}</h3>
                                        <button type="button" class="card__button">
                                            <a href="./details.php?type=anime&id=${anime.entry[0].mal_id}">Saiba Mais</a>
                                        </button>
                                        <span class="card__extra"></span>
                                    </div>
                                </div>
                                <div class="section__card">
                                    <img src="./Resources/Image/117797.jpg" alt="Card Image">
                                    <div class="card__information">
                                        <h3 class="card__title">${anime.entry[0].title}</h3>
                                        <button type="button" class="card__button">
                                            <a href="./details.php?type=anime&id=${anime.entry[0].mal_id}">Saiba Mais</a>
                                        </button>
                                        <span class="card__extra"></span>
                                    </div>
                                </div>
                                <div class="section__card">
                                    <img src="./Resources/Image/117797.jpg" alt="Card Image">
                                    <div class="card__information">
                                        <h3 class="card__title">${anime.entry[0].title}</h3>
                                        <button type="button" class="card__button">
                                            <a href="./details.php?type=anime&id=${anime.entry[0].mal_id}">Saiba Mais</a>
                                        </button>
                                        <span class="card__extra"></span>
                                    </div>
                                </div>
                                <div class="section__card">
                                    <img src="./Resources/Image/117797.jpg" alt="Card Image">
                                    <div class="card__information">
                                        <h3 class="card__title">${anime.entry[0].title}</h3>
                                        <button type="button" class="card__button">
                                            <a href="./details.php?type=anime&id=${anime.entry[0].mal_id}">Saiba Mais</a>
                                        </button>
                                        <span class="card__extra"></span>
                                    </div>
                                </div>
                                <div class="section__card">
                                    <img src="./Resources/Image/117797.jpg" alt="Card Image">
                                    <div class="card__information">
                                        <h3 class="card__title">${anime.entry[0].title}</h3>
                                        <button type="button" class="card__button">
                                            <a href="./details.php?type=anime&id=${anime.entry[0].mal_id}">Saiba Mais</a>
                                        </button>
                                        <span class="card__extra"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="section__slider lists__slider slider__anime" id="slider__watching">
                                <div class="section__card">
                                    <img src="./Resources/Image/117797.jpg" alt="Card Image">
                                    <div class="card__information">
                                        <h3 class="card__title">${anime.entry[0].title}</h3>
                                        <button type="button" class="card__button">
                                            <a href="./details.php?type=anime&id=${anime.entry[0].mal_id}">Saiba Mais</a>
                                        </button>
                                        <span class="card__extra"></span>
                                    </div>
                                </div>
                                <div class="section__card">
                                    <img src="./Resources/Image/117797.jpg" alt="Card Image">
                                    <div class="card__information">
                                        <h3 class="card__title">${anime.entry[0].title}</h3>
                                        <button type="button" class="card__button">
                                            <a href="./details.php?type=anime&id=${anime.entry[0].mal_id}">Saiba Mais</a>
                                        </button>
                                        <span class="card__extra"></span>
                                    </div>
                                </div>
                                <div class="section__card">
                                    <img src="./Resources/Image/117797.jpg" alt="Card Image">
                                    <div class="card__information">
                                        <h3 class="card__title">${anime.entry[0].title}</h3>
                                        <button type="button" class="card__button">
                                            <a href="./details.php?type=anime&id=${anime.entry[0].mal_id}">Saiba Mais</a>
                                        </button>
                                        <span class="card__extra"></span>
                                    </div>
                                </div>
                                <div class="section__card">
                                    <img src="./Resources/Image/117797.jpg" alt="Card Image">
                                    <div class="card__information">
                                        <h3 class="card__title">${anime.entry[0].title}</h3>
                                        <button type="button" class="card__button">
                                            <a href="./details.php?type=anime&id=${anime.entry[0].mal_id}">Saiba Mais</a>
                                        </button>
                                        <span class="card__extra"></span>
                                    </div>
                                </div>
                                <div class="section__card">
                                    <img src="./Resources/Image/117797.jpg" alt="Card Image">
                                    <div class="card__information">
                                        <h3 class="card__title">${anime.entry[0].title}</h3>
                                        <button type="button" class="card__button">
                                            <a href="./details.php?type=anime&id=${anime.entry[0].mal_id}">Saiba Mais</a>
                                        </button>
                                        <span class="card__extra"></span>
                                    </div>
                                </div>
                                <div class="section__card">
                                    <img src="./Resources/Image/117797.jpg" alt="Card Image">
                                    <div class="card__information">
                                        <h3 class="card__title">${anime.entry[0].title}</h3>
                                        <button type="button" class="card__button">
                                            <a href="./details.php?type=anime&id=${anime.entry[0].mal_id}">Saiba Mais</a>
                                        </button>
                                        <span class="card__extra"></span>
                                    </div>
                                </div>
                                <div class="section__card">
                                    <img src="./Resources/Image/117797.jpg" alt="Card Image">
                                    <div class="card__information">
                                        <h3 class="card__title">${anime.entry[0].title}</h3>
                                        <button type="button" class="card__button">
                                            <a href="./details.php?type=anime&id=${anime.entry[0].mal_id}">Saiba Mais</a>
                                        </button>
                                        <span class="card__extra"></span>
                                    </div>
                                </div>
                                <div class="section__card">
                                    <img src="./Resources/Image/117797.jpg" alt="Card Image">
                                    <div class="card__information">
                                        <h3 class="card__title">${anime.entry[0].title}</h3>
                                        <button type="button" class="card__button">
                                            <a href="./details.php?type=anime&id=${anime.entry[0].mal_id}">Saiba Mais</a>
                                        </button>
                                        <span class="card__extra"></span>
                                    </div>
                                </div>
                                <div class="section__card">
                                    <img src="./Resources/Image/117797.jpg" alt="Card Image">
                                    <div class="card__information">
                                        <h3 class="card__title">${anime.entry[0].title}</h3>
                                        <button type="button" class="card__button">
                                            <a href="./details.php?type=anime&id=${anime.entry[0].mal_id}">Saiba Mais</a>
                                        </button>
                                        <span class="card__extra"></span>
                                    </div>
                                </div>
                                <div class="section__card">
                                    <img src="./Resources/Image/117797.jpg" alt="Card Image">
                                    <div class="card__information">
                                        <h3 class="card__title">${anime.entry[0].title}</h3>
                                        <button type="button" class="card__button">
                                            <a href="./details.php?type=anime&id=${anime.entry[0].mal_id}">Saiba Mais</a>
                                        </button>
                                        <span class="card__extra"></span>
                                    </div>
                                </div>
                                <div class="section__card">
                                    <img src="./Resources/Image/117797.jpg" alt="Card Image">
                                    <div class="card__information">
                                        <h3 class="card__title">${anime.entry[0].title}</h3>
                                        <button type="button" class="card__button">
                                            <a href="./details.php?type=anime&id=${anime.entry[0].mal_id}">Saiba Mais</a>
                                        </button>
                                        <span class="card__extra"></span>
                                    </div>
                                </div>
                                <div class="section__card">
                                    <img src="./Resources/Image/117797.jpg" alt="Card Image">
                                    <div class="card__information">
                                        <h3 class="card__title">${anime.entry[0].title}</h3>
                                        <button type="button" class="card__button">
                                            <a href="./details.php?type=anime&id=${anime.entry[0].mal_id}">Saiba Mais</a>
                                        </button>
                                        <span class="card__extra"></span>
                                    </div>
                                </div>
                                <div class="section__card">
                                    <img src="./Resources/Image/117797.jpg" alt="Card Image">
                                    <div class="card__information">
                                        <h3 class="card__title">${anime.entry[0].title}</h3>
                                        <button type="button" class="card__button">
                                            <a href="./details.php?type=anime&id=${anime.entry[0].mal_id}">Saiba Mais</a>
                                        </button>
                                        <span class="card__extra"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="section__slider lists__slider slider__anime" id="slider__watched">
                                <div class="section__card">
                                    <img src="./Resources/Image/117797.jpg" alt="Card Image">
                                    <div class="card__information">
                                        <h3 class="card__title">${anime.entry[0].title}</h3>
                                        <button type="button" class="card__button">
                                            <a href="./details.php?type=anime&id=${anime.entry[0].mal_id}">Saiba Mais</a>
                                        </button>
                                        <span class="card__extra"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="section__slider lists__slider slider__anime" id="slider__drop">
                                <div class="section__card">
                                    <img src="./Resources/Image/117797.jpg" alt="Card Image">
                                    <div class="card__information">
                                        <h3 class="card__title">${anime.entry[0].title}</h3>
                                        <button type="button" class="card__button">
                                            <a href="./details.php?type=anime&id=${anime.entry[0].mal_id}">Saiba Mais</a>
                                        </button>
                                        <span class="card__extra"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <section class="user__lists" id="lists__films">

                </section>
            </main>
        </div>