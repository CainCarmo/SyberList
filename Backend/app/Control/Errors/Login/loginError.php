<?php

namespace App\Control\Errors\Login {

    class LoginError {

        public static function VerifyLogin(mixed $oUser, array $credentials): bool {
            !$oUser || !password_verify($credentials[0], $credentials[1])
                ? $response = false
                : $response = true;

            return $response;
        }
    }
}