<?php

    use App\Model\Entity\Tmdb;
    use App\Model\Entity\Jikan;
    use App\Model\Enums\EnumsJikan;

    $oTmdb  = new Tmdb();
    $oJikan = new Jikan();

    $itemID = explode("=", $_SERVER["QUERY_STRING"])[2];

    if (isset($_POST["salvar"])) {

        $jikanItem = $oJikan->SearchAnimeByID(type: explode("&", $pageType)[0], ID: $itemID);

        if ($pageType === "anime&id" || $pageType === "manga&id") {

            $oJikan->ID_Jikan        = $jikanItem->mal_id;
            $oJikan->FK_USER_ID      = $_SESSION["User"]["ID"];
            $oJikan->Title           = $jikanItem->title;
            $oJikan->Description     = str_replace("'", "\'", $jikanItem->synopsis);
            $oJikan->FK_TYPE_ID      = EnumsJikan::ToggleType(method: "POST", type: $jikanItem->type);
            $oJikan->Cover           = $jikanItem->images->webp->large_image_url;
            $oJikan->FK_SITUATION_ID = 1;

            echo '<pre style="color: #000">';
            print_r($oJikan);
            echo '</pre>'; exit;
        }
        else {


        }
    }

?>

        <!-- Banner de Destaque -->
        <section id="banner">
            <video src="./Resources/Video/mylivewallpapers.com-KonoSuba-Magic-Spells-Megumin.mp4" id="banner__video" autoplay muted loop></video>
        </section>

        <!-- Corpo da Página -->
        <main class="container" id="container__details"></main>