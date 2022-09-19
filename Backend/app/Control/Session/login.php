<?php

namespace App\Control\Session {

    use App\Model\Entity\User;

    class Login {
        public static function Init() {
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

        public static function Login(User $obUser) {
            self::Init();

            $_SESSION["User"] = [
                "ID"         => $obUser->ID,
                "USER_EMAIL" => $obUser->UserEmail,
                "NICKNAME"   => $obUser->Nickname,
                "FK_ROLE_ID" => $obUser->UserRole
            ];

            header("location: index.php");
            exit;
        }

        public static function Logout() {
            self::Init();

            unset($_SESSION["User"]);

            header("location: index.php");
            exit;
        }

        public static function RequireLogout() {
            if(self::isLogged()) {
                header("location: index.php");
                exit;
            }
        }
    }
}