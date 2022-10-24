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
            switch ($method) {
                case "GET":
                    if ($gender === 1) return "Masculino";
                    if ($gender === 2) return "Feminino";

                    break;

                case "POST":
                    if ($gender === "M") return Gender::from(1)->value;
                    if ($gender === "F") return Gender::from(2)->value;

                    break;
            }
        }

        public static function ToggleRole(mixed $role): string {
            if ($role === 1) return "Cliente";
            if ($role === 2) return "Administrador";
        }

        public static function ToggleStatus(mixed $status): string {
            if ($status === 1) return "Ativo";
            if ($status === 2) return "Suspenso";
            if ($status === 3) return "Banido";
            if ($status === 4) return "Indisponível";
        }
    }
}