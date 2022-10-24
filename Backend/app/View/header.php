<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <!-- Meta Tags -->
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <!-- CSS -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glider-js@1/glider.min.css" />
        <link rel="icon"       href="./Resources/Image/Icon/icone_syber.png" />
        <link rel="stylesheet" href="./CSS/colors.css" />
        <link rel="stylesheet" href="./CSS/main.css" />
        <link rel="stylesheet" href="./CSS/details.css" />
        <link rel="stylesheet" href="./CSS/cards.css" />
        <link rel="stylesheet" href="./CSS/form_login.css" />
        <link rel="stylesheet" href="./CSS/fields.css" />
        <!-- Scripts -->
        <script src="https://unpkg.com/scrollreveal"></script>
        <!-- Icons -->
        <script src="https://kit.fontawesome.com/a39dd60c9e.js" crossorigin="anonymous"></script>
        <!-- Título -->
        <title id="page__title">Home | SyberList</title>
    </head>
    <body>
        <!-- Topo da Página -->
        <header id="header__page">
            <div id="header__left">
                <img class="logo__image" src="https://cdn.discordapp.com/attachments/1000527265303642194/1022134680864182325/image-removebg-preview.png" alt="Logo do Site">
            </div>
            <nav id="header__links">
                <li class="header__link">
                    <a href="index.php">Início</a>
                </li>
                <li class="header__link">
                    <a href="home.php">Home</a>
                </li>
                <li class="header__link">
                    <a href="search.php?type=anime">Anime</a>
                </li>
                <li class="header__link">
                    <a href="search.php?type=movie">Filmes</a>
                </li>
                <li class="header__link">
                    <a href="https://blog-syberlist.blogspot.com/">Nosso Blog</a>
                </li>
            </nav>
            <div id="header__right">
                <i class="fas fa-search"></i>
                <button type="button" id="header__button" >Login</button>
                <!-- <div id="header__user--hidden" >
                    <a href="./lists.php">
                        <img id="header__icon" src="./Resources/Image/Card/Not-Found.jpg" alt="Ícone do Usuário">
                    </a>
                </div> -->
            </div>
        </header>

        <!-- Área de Pesquisa -->
        <section id="search">
            <form id="search__form">
                <select name="search__select" id="search__select"></select>
                <input type="text" name="search__input" id="search__input" />
                <div id="search__controls">
                    <div id="search__clear--hidden">
                        <i class="fas fa-times" id="search__times"></i>
                    </div>
                    <button type="button" id="search__button">
                        <i class="fas fa-search"></i>
                    </button>
                </div>
            </form>
            <div id="search__results"></div>
        </section>
