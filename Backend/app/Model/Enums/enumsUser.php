<?php

namespace App\Model\Enums {

    enum Gender :int {
        case Male   = 1;
        case Female = 2;
    }

    enum Role :int {
        case Client       = 1;
        case Adminstrator = 2;
    }

    enum Status :int {
        case Active      = 1;
        case Suspended   = 2;
        case Banned      = 3;
        case Unavailable = 4;
    }

    class EnumsUser {
        
        public static function ToggleGender(string $method, mixed $gender): int|string {
            
            if ($method === "GET") {
                switch ($gender) {
                    case 1:
                        return Gender::from(1)->name;
                        break;
                    case 2:
                        return Gender::from(2)->name;
                        break;
                }
            }

            if ($method === "POST") {
                switch($gender) {
                    case "M":
                        return Gender::from(1)->value;
                        break;
                    case "F":
                        return Gender::from(2)->value;
                        break;
                }
            }
        }

        public static function ToggleRole(mixed $role): string {
            
            switch ($role) {
                case 1:
                    return Role::from(1)->name;
                    break;
                case 2:
                    return Role::from(2)->name;
                    break;
            }
        }

        public static function ToggleStatus(mixed $status) {
            
            switch ($status) {
                case 1:
                    return "Ativo";
                    break;
                case 2:
                    return "Suspenso";
                    break;
                case 3:
                    return "Banido";
                    break;
                case 4:
                    return "Inválido";
                    break;
            }
        }
    }
}