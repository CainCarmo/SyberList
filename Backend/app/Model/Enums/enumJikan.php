<?php

namespace App\Model\Enums {
    
    enum Type :int {
        case TV       = 1;
        case OVA      = 2;
        case Movie    = 3;
        case Manga    = 4;
        case Manhwa   = 5;
        case Manhua   = 6;
        case Webtoons = 7;
    }

    class EnumsJikan {

        public static function ToggleType(string $method, mixed $type) {
            if ($method === "GET") {
                
                switch($type) {
                    case 1:
                        return Type::from(1)->name;
                        break;
                    case 2:
                        return Type::from(2)->name;
                        break;
                    case 3:
                        return Type::from(3)->name;
                        break;
                    case 4:
                        return Type::from(4)->name;
                        break;
                    case 5:
                        return Type::from(5)->name;
                        break;
                    case 6:
                        return Type::from(6)->name;
                        break;
                    case 7:
                        return Type::from(7)->name;
                        break;
                }
            }

            if ($method === "POST") {
                
                switch($type) {
                    case 1:
                        return Type::from(1)->value;
                        break;
                    case 2:
                        return Type::from(2)->value;
                        break;
                    case 3:
                        return Type::from(3)->value;
                        break;
                    case 4:
                        return Type::from(4)->value;
                        break;
                    case 5:
                        return Type::from(5)->value;
                        break;
                    case 6:
                        return Type::from(6)->value;
                        break;
                    case 7:
                        return Type::from(7)->value;
                        break;
                }
            }
        }
    }
}