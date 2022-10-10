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

        public static function ToggleType(string $method, mixed $type): string|int {
            
            if ($method === "GET") {
                
                switch($type) {
                    case 1:
                        return JikanType::from(1)->name;
                        break;
                    case 2:
                        return JikanType::from(2)->name;
                        break;
                    case 3:
                        return JikanType::from(3)->name;
                        break;
                    case 4:
                        return JikanType::from(4)->name;
                        break;
                    case 5:
                        return JikanType::from(5)->name;
                        break;
                    case 6:
                        return JikanType::from(6)->name;
                        break;
                    case 7:
                        return JikanType::from(7)->name;
                        break;
                }
            }

            if ($method === "POST") {
                
                switch($type) {
                    case "TV":
                        return JikanType::from(1)->value;
                        break;
                    case "OVA":
                        return JikanType::from(2)->value;
                        break;
                    case "Movie":
                        return JikanType::from(3)->value;
                        break;
                    case "Manga":
                        return JikanType::from(4)->value;
                        break;
                    case "Manhwa":
                        return JikanType::from(5)->value;
                        break;
                    case "Manhua":
                        return JikanType::from(6)->value;
                        break;
                    case "Webtoons":
                        return JikanType::from(7)->value;
                        break;
                }
            }
        }
    }
}