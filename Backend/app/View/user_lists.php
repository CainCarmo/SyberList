<?php

    use App\Model\Entity\Tmdb;
    use App\Model\Entity\Jikan;
    use App\Control\Session\Login;
    
    $oTmdb  = new Tmdb;
    $oJikan = new Jikan;
    
    $cardsAnime = "";
    $cardsManga = "";
    $cardsMovie = "";
    $cardsSerie = "";

    $cardsMovieRequest = $oTmdb->GetItemsByUser(oUserID: $_SESSION["User"]["ID"]);
    $cardsAnimeRequest = $oJikan->GetItemsByUser(oUserID: $_SESSION["User"]["ID"]);
    
    foreach($cardsAnimeRequest as $cardsAnimeResponse) {

        if ($cardsAnimeResponse->FK_TYPE_ID <= 3) {

            $cardsAnime .= '
                <div class="section__card">
                    <img src="' . $cardsAnimeResponse->COVER . '" alt="Card Image">
                    <div class="card__information">
                        <h3 class="card__title">'. $cardsAnimeResponse->TITLE . '</h3>
                        <button type="button" class="card__button">
                            <a href="./details.php?type=anime&id=' . $cardsAnimeResponse->ID_TMDB . '">Saiba Mais</a>
                        </button>
                        <span class="card__extra"></span>
                    </div>
                </div>
            ';
        }
        else {

            $cardsManga .= '
                <div class="section__card">
                    <img src="' . $cardsAnimeResponse->COVER . '" alt="Card Image">
                    <div class="card__information">
                        <h3 class="card__title">'. $cardsAnimeResponse->TITLE . '</h3>
                        <button type="button" class="card__button">
                            <a href="./details.php?type=anime&id=' . $cardsAnimeResponse->ID_TMDB . '">Saiba Mais</a>
                        </button>
                        <span class="card__extra"></span>
                    </div>
                </div>
            ';
        }
    }

    foreach($cardsMovieRequest as $cardsMovieResponse) {

            if ($cardsMovieResponse->FK_TYPE_ID = 1) {

                $cardsMovie .= '
                    <div class="section__card">
                        <img src="' . $cardsMovieResponse->COVER . '" alt="Card Image">
                        <div class="card__information">
                            <h3 class="card__title">'. $cardsMovieResponse->TITLE . '</h3>
                            <button type="button" class="card__button">
                                <a href="./details.php?type=movie&id=' . $cardsMovieResponse->ID_TMDB . '">Saiba Mais</a>
                            </button>
                            <span class="card__extra"></span>
                        </div>
                    </div>
                ';
            }
            else {

                $cardsSerie .= `
                    <div class="section__card">
                        <img src="' . $cardsMovieResponse->COVER . '" alt="Card Image">
                        <div class="card__information">
                            <h3 class="card__title">' . $cardsMovieResponse->TITLE . '</h3>
                            <button type="button" class="card__button">
                                <a href="./details.php?type=serie&id=' . $cardsMovieResponse->ID_TMDB . '">Saiba Mais</a>
                            </button>
                            <span class="card__extra"></span>
                        </div>
                    </div>
                `;
            }

    }

    isset($_POST["logout"])
        ? Login::Logout(pageType: $pageType)
        : null;

    
    #region start
    // use App\Model\Entity\Jikan;
    // use App\Model\Enums\EnumsJikan;

    // $oJikan = new Jikan();
    // $cards= "";
    // $responses = $oJikan->GetItemsByUser($_SESSION["User"]["ID"]);

    // echo '<pre style="color: #000">';

    // foreach ($responses as $response) {
    //     $type = EnumsJikan::ToggleType("GET", $response->FK_TYPE_ID);

    //     $cards .= '
    //         <div class="section__card">
    //             <img src="'. $response->COVER .'" alt="Card Image">
    //             <div class="card__information">
    //                 <h3 class="card__title">'. $response->TITLE .'</h3>
    //                 <button type="button" class="card__button">
    //                     <a href="./details.php?type=anime&id='. $response->ID_JIKAN .'">Saiba Mais</a>
    //                 </button>
    //                 <span class="card__extra">
    //                     '. $type .'
    //                 </span>
    //             </div>
    //         </div>
    //     ';
    // }
    
    // print_r($cards);

    // echo '</pre>'; exit;
    #endregion

?>
        <section id="banner">
            <img src="./Resources/Image/戦争.png" alt="Banner Image">
            <header id="banner__user">
                <div id="user__icon">
                    <img src="./Resources/Image/perfil.jpg" alt="">
                </div>
                <div id="user__info">
                    <h1 id="info__nickname"><?=$_SESSION["User"]["NICKNAME"]?> #<?=$_SESSION["User"]["ID"]?></h1>
                    <span id="info__email"><?=$_SESSION["User"]["USER_EMAIL"]?></span>
                </div>
                <div id="user__control">
                    <form method="POST">
                        <button type="submit" id="control__button" name="logout">
                            <i class="fa-solid fa-right-from-bracket"></i>
                            <span id="button__text">Sair</span>
                        </button>
                    </form>
                </div>
            </header>
        </section>

        <main id="content">
            <div id="lists">

                <section class="lists__user">

                    <header class="section__header">
                        <h2 class="section__title">
                            <i class="fa-solid fa-list"></i> - Listas Anime/Mangá
                        </h2>
                        <div></div>
                    </header>

                    <div class="section__lists" id="lists__anime">

                        <div class="lists__tabs">
                            <button type="button" class="lists__tab tab__anime" id="button__anime">Anime</button>
                            <button type="button" class="lists__tab tab__anime" id="button__manga">Mangá</button>
                        </div>
                        
                        <div class="section__list">

                            <div class="list__item item__anime" id="list__anime">
                                <?=$cardsAnime?>
                            </div>

                            <div class="list__item item__anime" id="list__manga">
                                <?=$cardsManga?>
                            </div>

                        </div>

                    </div>

                    <header class="section__header">
                        <h2 class="section__title">
                            <i class="fa-solid fa-list"></i> - Listas Filmes/Série
                        </h2>
                        <div></div>
                    </header>

                    <div class="section__lists" id="lists__movies">

                        <div class="lists__tabs">
                            <button type="button" class="lists__tab tab__movie" id="button__movie">Filme</button>
                            <button type="button" class="lists__tab tab__movie" id="button__serie">Série</button>
                        </div>
                        
                        <div class="section__list">

                            <div class="list__item item__movie" id="list__movie">
                                <?=$cardsMovie?>
                            </div>

                            <div class="list__item item__movie" id="list__serie">
                                <?=$cardsSerie?>
                            </div>

                        </div>

                    </div>

                </section>

            </div>
        </main>