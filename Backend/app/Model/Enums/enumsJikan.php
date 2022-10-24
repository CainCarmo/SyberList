<?php

namespace App\Model\Enums {

    enum JikanType :int {
        case TV       = 1;
        case OVA      = 2;
        case Movie    = 3;
        case Manga    = 4;
        case Manhwa   = 5;
        case Manhua   = 6;
        case Webtoons = 7;
    }

    class EnumsJikan {

        public static function ToggleType(string $method, mixed $type): int|string {
            switch ($method) {
                case "GET":
                    if ($type === 1) return JikanType::from(1)->name;
                    if ($type === 2) return JikanType::from(2)->name;
                    if ($type === 3) return JikanType::from(3)->name;
                    if ($type === 4) return JikanType::from(4)->name;
                    if ($type === 5) return JikanType::from(5)->name;
                    if ($type === 6) return JikanType::from(6)->name;
                    if ($type === 7) return JikanType::from(7)->name;
                    
                    break;
                    
                case "POST":
                    if ($type === "TV")       return JikanType::from(1)->value;
                    if ($type === "OVA")      return JikanType::from(2)->value;
                    if ($type === "ONA")      return JikanType::from(2)->value;
                    if ($type === "Movie")    return JikanType::from(3)->value;
                    if ($type === "Manga")    return JikanType::from(4)->value;
                    if ($type === "Manhwa")   return JikanType::from(5)->value;
                    if ($type === "Manhua")   return JikanType::from(6)->value;
                    if ($type === "Webtoons") return JikanType::from(7)->value;

                    break;
            }
        }
    }
}