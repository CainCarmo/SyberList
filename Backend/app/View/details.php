<?php

    use App\Model\Entity\Tmdb;
    use App\Model\Entity\Jikan;
    use App\Model\Enums\EnumsJikan;

    $oTmdb  = new Tmdb();
    $oJikan = new Jikan();

    $itemID = explode("=", $_SERVER["QUERY_STRING"])[2];

    if (isset($_POST["salvar"])) {

        switch ($pageType) {

            case "anime":
            case "manga":

                $oJikan->SearchItemByID(type: $pageType, ID: $itemID);

                $oJikan->Register();
                break;

            case "movie":
            case "serie":

                $oTmdb->SearchItemByID(type: $pageType, ID: $itemID);

                $oTmdb->Register();
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