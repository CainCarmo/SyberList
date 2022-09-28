<?php

namespace App\Control\Errors {

    use App\Model\Entity\User;

    class Register_Errors {

        public static function VerifyRegister(string $email) {
            $isUser = User::GetUserByEmail($email);

            if ($isUser)
                return [false, "Email existente!"];
            else
                return [true, "Registrado com sucesso!"];
        }
    }
}