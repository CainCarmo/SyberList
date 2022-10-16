<?php

    use App\Model\Entity\Tmdb;
    use App\Model\Entity\Jikan;

    $oTmdb  = new Tmdb();
    $oJikan = new Jikan();

    $situationDOM = "";

    $itemID = explode("&", explode("id=", $_SERVER["QUERY_STRING"])[1])[0];
    $userID = key_exists("User", $_SESSION)
        ? $_SESSION["User"]["ID"]
        : null;

    switch ($pageType) {
    
        case "anime":
        case "manga":
            
            $saved = is_null($userID)
                ? false
                : key_exists(0, $oJikan->VerifyItemSaved($itemID, ucfirst($pageType), $userID));

            $saved
                ? $state = "fa-solid fa-checked"
                : $state = "fa-regular";
            break;
        
        case "tv":
        case "movie":
            
            $saved = is_null($userID)
                ? false
                : key_exists(0, $oTmdb->VerifyItemSaved($itemID, ucfirst($pageType), $userID));

            $saved
                ? $state = "fa-solid fa-checked"
                : $state = "fa-regular";
            break;
    }

    if ($saved) {

        $situationDOM = '
            <form method="POST" id="banner__situation">
                <select id="situation__select" name="situation__select">
                    <option value="" selected disabled>Escolha a situação:</option>
                    <option value="1">Para assistir</option>
                    <option value="2">Asistindo</option>
                    <option value="3">Assistido</option>
                    <option value="4">Dropped</option>
                </select>
                <button type="submit" name="situation" value="update" id="situation__submit" title="Clique para mudar a situação">Ok</button>
            </form>
        ';
    }

    if (isset($_POST["salvar"]) && $oUserLogged && !$saved) {

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
    elseif (isset($_POST["salvar"]) && !$oUserLogged) {
        header("location: details.php?type=" . $pageType ."&id=" . $itemID . "&saved=error");
        exit;
    }
    elseif (isset($_POST["situation"])) {

        $pageType === "anime" || $pageType === "manga"
            ? $oJikan->UpdateSituation(itemID: $itemID, itemType: ucfirst($pageType), situationID: $_POST["situation__select"], oUserID: $_SESSION["User"]["ID"])
            : $oTmdb->UpdateSituation(itemID: $itemID, itemType: ucfirst($pageType), situationID: $_POST["situation__select"], oUserID: $_SESSION["User"]["ID"]);
    }

?>

        <!-- Banner de Destaque -->
        <section id="banner">
            <form method="POST" id="banner__form">
                <button type="submit" id="form__submit" name="salvar" title="Favoritar">
                    <i class="fa-star <?=$state?>" id="star-details"></i>
                </button>
            </form>
            <?=$situationDOM?>
            <video src="./Resources/Video/mylivewallpapers.com-KonoSuba-Magic-Spells-Megumin.mp4" id="banner__video" autoplay muted loop></video>
        </section>

        <!-- Corpo da Página -->
        <main class="container" id="container__details"></main>

        <!-- Sessão de Comentários -->
        <section id="comments">
            <div id="disqus_thread"></div>
            <script>
                /**
                 *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
                 *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables
                 */
                /*
                var disqus_config = function () {
                    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
                    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
                };
                */
                (function() {  // DON'T EDIT BELOW THIS LINE
                    var d = document, s = d.createElement('script');
                    
                    s.src = 'https://syberlist.disqus.com/embed.js';
                    
                    s.setAttribute('data-timestamp', +new Date());
                    (d.head || d.body).appendChild(s);
                })();
            </script>
            <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript" rel="nofollow">comments powered by Disqus.</a></noscript>
        </section>