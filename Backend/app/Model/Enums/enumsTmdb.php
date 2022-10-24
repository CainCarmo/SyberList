<?php

namespace App\Model\Enums {

    enum TmdbType :int {
        case TV    = 1;
        case Movie = 2;
    }

    class EnumsTmdb {

        public static function ToggleType(string $method, mixed $type): int|string {
            switch ($method) {
                case "GET":
                    if ($type === "Movie") return TmdbType::from(1)->name;
                    if ($type === "Tv")    return TmdbType::from(2)->name;
                    
                    break;
                    
                case "POST":
                    if ($type === 1) return TmdbType::from(1)->value;
                    if ($type === 2) return TmdbType::from(2)->value;

                    break;
            }
        }
    }
}