<?php

namespace App\Control\Errors {

    use App\Model\Entity\User;

    class Register_Errors {
        public static function VerifyRegister(string $email) {
            $isUser = User::GetUserByEmail($email);

            if (is_object($isUser))
                return [true, "Registrado com sucesso!"];
            else
                return [false, "Email existente!"];
        }
    }
}