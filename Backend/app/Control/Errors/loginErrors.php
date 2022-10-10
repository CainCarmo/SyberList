<?php

namespace App\Control\Errors {

    use App\Model\Entity\User;

    class LoginErrors {

        public static function VerifyLogin(mixed $oUser, array $credentials): array {

            if (!$oUser)
                return [false, "Usuário Inválido!"];
            elseif (!$oUser instanceof User || !password_verify($credentials[0], $credentials[1]))
                return [false, "Login ou senha inválidos!"];

            return [true, "Usuário Logado!"];
        }
    }
}