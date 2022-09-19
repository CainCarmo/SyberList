<?php

namespace App\Control\Errors {

    use App\Model\Entity\User;

    class Login_Errors {
        public static function VerifyLogin(mixed $oUser, array $credentials) {

            if (!$oUser)
                return [false, "Usuário inválido!"];
            elseif  (!$oUser instanceof User || !password_verify($credentials[0], $credentials[1]))
                return [false, "Login ou senha inválidas!"];

            return [true, "Usuário Logado!"];
        }
    }
}