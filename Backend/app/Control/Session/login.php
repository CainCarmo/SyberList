<?php

namespace App\Control\Session {

    use App\Model\Entity\User;

    class Login {

        public static function Init(): void {
            if (session_status() !== PHP_SESSION_ACTIVE) {
                session_start();
            }
        }

        public static function GetUserLogged() {
            self::Init();

            return self::IsLogged() ? : null;
        }

        public static function IsLogged() {
            self::Init();

            return isset($_SESSION["User"]["ID"]);
        }

        public static function Login(User $oUser, string $pageType) {
            self::Init();

            $_SESSION["User"] = [
                "ID"         => $oUser->ID,
                "USER_EMAIL" => $oUser->UserEmail,
                "NICKNAME"   => $oUser->Nickname,
                "FK_ROLE_ID" => $oUser->UserRole
            ];

            header("location: home.php?type=". $pageType);
            exit;
        }

        public static function Logout(string $pageType) {
            self::Init();

            unset($_SESSION["User"]);

            header("location: home.php?type=". $pageType);
            exit;
        }

        public static function RequireLogin(string $pageType) {
            if(!self::isLogged()) {
                header("location: home.php?type=". $pageType);
                exit;
            }
        }

        public static function RequireLogout(string $pageType) {
            if(self::isLogged()) {
                header("location: home.php?type=". $pageType);
                exit;
            }
        }
    }
}