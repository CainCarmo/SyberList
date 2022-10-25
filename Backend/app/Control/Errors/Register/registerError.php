<?php

namespace App\Control\Errors\Register {

    use App\Model\Entity\User;

    class RegisterError {

        public static function VerifyRegister(string $email): bool {
            $isUser = User::GetUserByEmail($email);

            $isUser
                ? $response = false
                : $response = true;

            return $response;
        }
    }
}