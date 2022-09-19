<?php

use App\Model\Entity\User;
use App\Model\Enums\EnumsUser;
use App\Control\Errors\Login_Errors;
use App\Control\Session\Login;

$oUserLogged = Login::GetUserLogged();

$hiddenBtn = $oUserLogged ? "class='hidden'" : "";
$visibleIcon = $oUserLogged ? "class='visible'" : "";
$errorLogin = "";

if (isset($_POST["enviar"])) {
    $oUser = User::GetUserByEmail($_POST["login__email"]);
    
    is_object($oUser)
        ? $passwordField = $oUser->UserPass
        : $passwordField = "";

    $passwordField === ""
        ? $passwordDB = ""
        : $passwordDB = $oUser->USER_PASS;

    $oVerifyLogin = Login_Errors::VerifyLogin(oUser: $oUser, credentials: [$passwordField, $passwordDB]);

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

        Login::Login($oUser);
    }
    else
        $errorLogin = $oVerifyLogin[1];
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
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glider-js@1/glider.min.css">
        <link rel="stylesheet" href="./CSS/main.css">
        <link rel="stylesheet" href="./CSS/cards.css">
        <link rel="stylesheet" href="./CSS/details.css">
        <link rel="stylesheet" href="./CSS/form_login.css">
        <link rel="stylesheet" href="./CSS/fields.css">

        <!-- Icons -->
        <script src="https://kit.fontawesome.com/a39dd60c9e.js" crossorigin="anonymous"></script>

        <title id="page__title">Home | SyberList</title>
    </head>
    <body>
        <!-- Topo da Página -->
        <header id="header__page">
            <div id="header__left">
                <img class="logo__image" src="https://cdn.discordapp.com/attachments/1000527265303642194/1006613565182054470/Logo-image.png" alt="Logo do Site">
            </div>
            <nav id="header__links">
                <li class="header__link">
                    <a href="home.php">Home</a>
                </li>
                <li class="header__link">
                    <a href="./build.php">Anime</a>
                </li>
                <li class="header__link">
                    <a href="./build.php">Filmes</a>
                </li>
                <li class="header__link">
                    <a href="./build.php">Contato</a>
                </li>
                <li class="header__link">
                    <a href="./build.php">Nosso Blog</a>
                </li>
            </nav>
            <div id="header__right">
                <i class="fas fa-search"></i>
                <button type="button" id="header__button" <?=$hiddenBtn?>>Login</button>
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
