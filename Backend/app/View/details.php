<?php

    use App\Model\Entity\Tmdb;
    use App\Model\Entity\Jikan;

    $oTmdb  = new Tmdb();
    $oJikan = new Jikan();

    $itemID = explode("&", explode("id=", $_SERVER["QUERY_STRING"])[1])[0];

    if (isset($_POST["salvar"]) && $oUserLogged) {

        switch ($pageType) {

            case "anime":
            case "manga":

                $oJikan->SearchItemByID(type: $pageType, ID: $itemID);
                $oJikan->Register();

                header("location: " . $_SERVER["REQUEST_URI"]);
                break;

            case "tv":
            case "movie":

                $oTmdb->SearchItemByID(type: $pageType, ID: $itemID);
                $oTmdb->Register();
                
                header("location: " . $_SERVER["REQUEST_URI"]);
                break;
        }
    }

?>

        <!-- Banner de Destaque -->
        <section id="banner">
            <video src="./Resources/Video/mylivewallpapers.com-KonoSuba-Magic-Spells-Megumin.mp4" id="banner__video" autoplay muted loop></video>
        </section>

        <!-- Corpo da Página -->
        <main class="container" id="container__details"></main>