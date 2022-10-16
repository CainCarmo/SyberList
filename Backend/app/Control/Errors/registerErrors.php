<?php

namespace App\Control\Errors {

    use App\Model\Entity\User;

    class RegisterErrors {

        public static function VerifyRegister(string $email): array {
            
            $isUser = User::GetUserByEmail($email);

            $isUser
                ? $arrResponse = [false, "Email existente!"]
                : $arrResponse = [true, "Registrado com sucesso!"];

            return $arrResponse;
        }
    }
}