<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <!-- Meta Tags -->
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <!-- CSS -->
        <link rel="stylesheet" href="./CSS/main.css">
        <link rel="stylesheet" href="./CSS/introduction.css">

        <!-- Icons -->
        <script src="https://kit.fontawesome.com/a39dd60c9e.js" crossorigin="anonymous"></script>

        <title id="page__title">Introdução | SyberList</title>
    </head>
    <body>
        <!-- Box -->
        <div id="box">
            <!-- Lado Esquerdo (Anime) -->
            <section id="box__left">
                <video src="./Resources/Video/mylivewallpapers.com-Fire-Force.mp4" class="box__video" id="box__video--anime" muted loop></video>
                <div class="box__information">
                    <!-- Título -->
                    <h1>Seção Animes</h1>
                    <!-- Botão de Escolha -->
                    <button class="box__button">
                        <a href="./home.php?type=anime">Selecionar</a>
                    </button>
                </div>
            </section>
            <!-- Lado Direto (Filme/Série) -->
            <section id="box__right">
                <video src="./Resources/Video/mylivewallpapers-com-Kong-vs-Godzilla.mp4" class="box__video" id="box__video--films" muted loop></video>
                <div class="box__information">
                    <!-- Título -->
                    <h1>Seção Filmes/Séries</h1>
                    <!-- Botão de Escolha -->
                    <button class="box__button">
                        <a href="./home.php?type=movie">Selecionar</a>
                    </button>
                </div>
            </section>
        </div>
        <!-- Scripts -->
        <script type="module" src="./JS/scripts.js"></script>
    </body>
</html>