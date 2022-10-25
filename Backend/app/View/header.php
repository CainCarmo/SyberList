<?php

    use App\Model\Entity\User;
    use App\Control\Session\Login;
    use App\Model\Enums\EnumsUser;
    use App\Control\Errors\Login\LoginError;

    $oUserLogged = Login::GetUserLogged();
    $pageType    = explode("&", explode("type=", $_SERVER["QUERY_STRING"])[1])[0];

    $archiveCSS = "";
    $hiddenButton = $oUserLogged ? "class='hidden'" : "";
    $visibleIcon  = $oUserLogged ? "class='visible'" : "";

    $oUserLogged
        ? $cover = $_SESSION["User"]["COVER"]
        : "";
    
    $savedError  = key_exists(1, explode("saved=", $_SERVER["QUERY_STRING"]))
        ? explode("saved=", $_SERVER["QUERY_STRING"])[1]
        : null;

    $loginError  = key_exists(1, explode("login=", $_SERVER["QUERY_STRING"]))
        ? explode("login=", $_SERVER["QUERY_STRING"])[1]
        : null;

    $messageLoginError = is_null($loginError)
        ? null
        : '<div class="error" id="loginMessage"><span>Login ou senha inválidos!</span><i class="fas fa-times" id="message__login"></i></div>';

    $messageSaveError  = is_null($savedError)
        ? null
        : '<div class="error" id="savedMessage"><span>Para favoritar precisa efetuar o login</span><i class="fas fa-times" id="message__saved"></i></div>';

    $_SERVER["PHP_SELF"] === "/lists.php"
        ? $archiveCSS = '<link rel="stylesheet" href="./CSS/lists.css">'
        : null;

    $_SERVER["PHP_SELF"] === "/find.php"
        ? $archiveCSS = '<link rel="stylesheet" href="./CSS/find.css">'
        : null;
    
    if (isset($_POST["enviar"])) {
        $oUser         = User::GetUserByEmail(email: $_POST["login__email"]);
        $passwordField = $_POST["login__password"];

        is_object($oUser)
            ? $passwordDB = $oUser->USER_PASS
            : $passwordDB = "";

        $oVerifyLogin = LoginError::VerifyLogin(oUser: $oUser, credentials: [$passwordField, $passwordDB]);

        if ($oVerifyLogin) {
            $oUser->Username   = $oUser->USERNAME;
            $oUser->Surname    = $oUser->SURNAME;
            $oUser->Nickname   = $oUser->NICKNAME;
            $oUser->UserEmail  = $oUser->USER_EMAIL;
            $oUser->UserGender = EnumsUser::ToggleGender("GET", $oUser->FK_GENDER_ID);
            $oUser->UserRole   = EnumsUser::ToggleRole($oUser->FK_ROLE_ID);
            $oUser->UserStatus = EnumsUser::ToggleStatus($oUser->FK_STATUS_ID);
            $oUser->BirthDate  = $oUser->BIRTH_DATE;
            $oUser->UserIcon   = $oUser->USER_ICON;
            $oUser->RegisDate  = $oUser->REGISTER_DATE;

            Login::Login(oUser: $oUser, atualPage: $_SERVER["HTTP_REFERER"]);
        }
        else {
            header("location: ". $_SERVER["HTTP_REFERER"]. "login=error");
            exit;
        }
    }
?>

<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <!-- Meta Tags -->
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" />
        <!-- CSS -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glider-js@1/glider.min.css" />
        <link rel="icon"       href="./Resources/Image/Icon/icone_syber.png" />
        <link rel="stylesheet" href="./CSS/colors.css" />
        <link rel="stylesheet" href="./CSS/main.css" />
        <link rel="stylesheet" href="./CSS/details.css" />
        <link rel="stylesheet" href="./CSS/form_login.css" />
        <link rel="stylesheet" href="./CSS/cards.css" />
        <link rel="stylesheet" href="./CSS/fields.css" />
        <?=$archiveCSS?>
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
                    <a href="find.php?type=anime">Anime</a>
                </li>
                <li class="header__link">
                    <a href="find.php?type=movie">Filmes</a>
                </li>
                <li class="header__link">
                    <a href="https://blog-syberlist.blogspot.com/">Nosso Blog</a>
                </li>
            </nav>
            <div id="header__right">
                <i class="fas fa-search"></i>
                <button type="button" id="header__button" <?=$hiddenButton?>>Login</button>
                <div id="header__user--hidden" <?=$visibleIcon?>>
                    <a href="./lists.php">
                        <img id="header__icon" src="./Resources/Image/Perfil/<?=$cover?>" alt="Ícone do Usuário">
                    </a>
                </div>
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
