<?php

namespace App\Control\Errors {

    class LoginErrors {

        public static function VerifyLogin(mixed $oUser, array $credentials): array {

            !$oUser || !password_verify($credentials[0], $credentials[1])
                ? $arrResponse = [false, "Login ou senha inválidos!"]
                : $arrResponse = [true, "Usuário Logado!"];;

            return $arrResponse;
        }
    }
}