<?php

namespace App\Control\Errors {

    use App\Model\Entity\User;

    class RegisterErrors {

        public static function VerifyRegister(string $email): array {
            
            $isUser = User::GetUserByEmail($email);

            if ($isUser)
                return [false, "Email existente!"];
            else
                return [true, "Registrado com sucesso!"];
        }
    }
}