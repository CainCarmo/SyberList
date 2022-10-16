<?php

namespace App\Model\Enums {

    enum TmdbType :int {
        case TV    = 1;
        case Movie = 2;
    }

    class EnumsTmdb {

        public static function ToggleType(string $method, mixed $type): string|int {

            if ($method === "GET") {

                switch($type) {
                    case 1:
                        return TmdbType::from(1)->name;
                        break;
                    case 2:
                        return TmdbType::from(2)->name;
                        break;
                }
            }

            if ($method === "POST") {

                switch($type) {
                    case "Movie":
                        return TmdbType::from(1)->value;
                        break;
                    case "Tv":
                        return TmdbType::from(2)->value;
                        break;
                }
            }
        }
    }
}