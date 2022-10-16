<?php

    use App\Model\Entity\User;
    use App\Model\Enums\EnumsUser;
    use App\Control\Session\Login;
    use App\Control\Errors\LoginErrors;

    $oUserLogged = Login::GetUserLogged();
    
    $pageType    = explode("&", explode("type=", $_SERVER["QUERY_STRING"])[1])[0];

    $savedError  = key_exists(1, explode("saved=", $_SERVER["QUERY_STRING"]))
        ? explode("saved=", $_SERVER["QUERY_STRING"])[1]
        : null;

    $loginError  = key_exists(1, explode("login=", $_SERVER["QUERY_STRING"]))
        ? explode("login=", $_SERVER["QUERY_STRING"])[1]
        : null;
        
    $userListsCSS = "";

    $hiddenBtn    = $oUserLogged ? "class='hidden'" : "";
    $visibleIcon  = $oUserLogged ? "class='visible'" : "";

    $messageLoginError = is_null($loginError)
        ? null
        : '<div id="error"><span>Login ou senha inválidos!</span><i class="fas fa-times" id="message__delete"></i></div>';

    $messageSaveError  = is_null($savedError)
        ? null
        : '<div id="error"><span>Para favoritar precisa efetuar o login</span><i class="fas fa-times" id="message__delete"></i></div>';

    $_SERVER["PHP_SELF"] === "/lists.php"
        ? $userListsCSS = '<link rel="stylesheet" href="./CSS/user_lists.css">'
        : null;

    $_SERVER["PHP_SELF"] === "/search.php"
        ? $userListsCSS = '<link rel="stylesheet" href="./CSS/browse.css">'
        : null;

    if (isset($_POST["enviar"])) {
        
        $oUser = User::GetUserByEmail(email: $_POST["login__email"]);

        $passwordField = $_POST["login__password"];

        is_object($oUser)
            ? $passwordDB = $oUser->USER_PASS
            : $passwordDB = "";

        $oVerifyLogin = LoginErrors::VerifyLogin(oUser: $oUser, credentials: [$passwordField, $passwordDB]);

        if ($oVerifyLogin[0]) {

            $oUser->Username   = $oUser->USERNAME;
            $oUser->Surname    = $oUser->SURNAME;
            $oUser->Nickname   = $oUser->NICKNAME;
            $oUser->UserEmail  = $oUser->USER_EMAIL;
            $oUser->UserGender = EnumsUser::ToggleGender("GET", $oUser->FK_GENDER_ID);
            $oUser->UserRole   = EnumsUser::ToggleRole($oUser->FK_ROLE_ID);
            $oUser->UserStatus = EnumsUser::ToggleStatus($oUser->FK_STATUS_ID);
            $oUser->BirthDate  = $oUser->BIRTH_DATE;
            $oUser->RegisDate  = $oUser->REGISTER_DATE;

            Login::Login(oUser: $oUser, pageType: $pageType);
        }
        else {
            header("location: home.php?type=". $pageType . "&login=error");
            exit;
        }
    }

?>

<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <!-- Meta Tags -->
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <!-- CSS -->
        <link rel="icon"       href="./Resources/Image/Icons/icone_syber.png">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glider-js@1/glider.min.css">
        <link rel="stylesheet" href="./CSS/main.css">
        <?=$userListsCSS?>
        <link rel="stylesheet" href="./CSS/cards.css">
        <link rel="stylesheet" href="./CSS/details.css">
        <link rel="stylesheet" href="./CSS/form_login.css">
        <link rel="stylesheet" href="./CSS/fields.css">

        <!-- Script -->
        <script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
        
        <!-- Icons -->
        <script src="https://kit.fontawesome.com/a39dd60c9e.js" crossorigin="anonymous"></script>

        <title id="page__title">Home | SyberList</title>
    </head>
    <body>
        <!-- Mensagem de Erro -->
        <?=$messageLoginError?>
        <?=$messageSaveError?>
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
                <button type="button" id="header__button" <?=$hiddenBtn?>>Login</button>
                <div id="header__user--hidden" <?=$visibleIcon?>>
                    <a href="./lists.php">
                        <img id="header__icon" src="./Resources/Image/perfil.jpg" alt="Ícone do Usuário">
                    </a>
                </div>
            </div>
        </header>
        
        <!-- Área de Pesquisa -->
        <section id="search">
            <form id="search__form">
                <select name="search__select" id="search__select"></select>

                <input type="text" name="search__input" id="search__input">

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
