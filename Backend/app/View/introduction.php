<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <!-- Meta Tags -->
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <!-- CSS -->
        <link rel="icon"       href="./Resources/Image/Icon/icone_syber.png" />
        <link rel="stylesheet" href="./CSS/main.css" />
        <link rel="stylesheet" href="./CSS/introduction.css" />
        <!-- Título -->
        <title id="page__title">Introdução | SyberList</title>
    </head>
    <body>
        <!-- Box -->
        <div id="box">
            <!-- Lado Esquerdo (Anime) -->
            <section id="box__left">
                <video src="" class="box__video" id="video__anime" muted loop></video>
                <div class="box__information">
                    <!-- Título -->
                    <h1>Seção Animes</h1>
                    <!-- Botão de Escolha (Anime) -->
                    <button type="button" class="box__button">
                        <a href="./home.php?type=anime">Selecionar</a>
                    </button>
                </div>
            </section>
            <!-- Lado Direito (Filme) -->
            <section id="box__right">
                <video src="" class="box__video" id="video__movie" muted loop></video>
                <div class="box__information">
                    <!-- Título -->
                    <h1>Seção Filmes</h1>
                    <!-- Botão de Escolha (Filme) -->
                    <button type="button" class="box__button">
                        <a href="./home.php?type=movie">Selecionar</a>
                    </button>
                </div>
            </section>
        </div>
        <!-- Scripts -->
        <script type="module" src="./JS/scripts.js"></script>
    </body>
</html>