<?php

namespace App\Control\Session {

    use App\Model\Entity\User;

    class Login {

        public static function Init(): void {
            if (session_status() !== PHP_SESSION_ACTIVE)
                session_start();
        }

        public static function IsLogged(): bool {
            self::Init();
            return isset($_SESSION["User"]["ID"]);
        }

        public static function GetUserLogged(): bool|null {
            self::Init();
            return self::IsLogged() ? : null;
        }

        public static function Login(User $oUser, string $atualPage): never {
            self::Init();

            $_SESSION["User"] = [
                "ID"           => $oUser->ID,
                "COVER"        => $oUser->UserIcon,
                "NICKNAME"     => $oUser->Nickname,
                "USER_EMAIL"   => $oUser->UserEmail,
                "FK_STATUS_ID" => $oUser->UserStatus
            ];

            header("location: ". $atualPage);
            exit;
        }

        public static function Logout(string $pageType): never {
            self::Init();

            unset($_SESSION["User"]);

            header("location: home.php?type=". $pageType);
            exit;
        }


        public static function RequireLogin(string $pageType): void {
            if(!self::isLogged()) {
                header("location: home.php?type=". $pageType);
                exit;
            }
        }

        public static function RequireLogout(): void {
            if(self::isLogged()) {
                header("location: index.php");
                exit;
            }
        }
    }
}