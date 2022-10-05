<?php

namespace App\Model\Enums {

    enum Situation :int {
        case Plan_to_watch = 1;
        case Watching      = 2;
        case Completed     = 3;
        case Dropped       = 4;
    }

    class EnumsSituation {

        public static function ToggleType(string $method, mixed $situation): string|int {
            
            if ($method === "GET") {
                
                switch($situation) {
                    case 1:
                        return Situation::from(1)->name;
                        break;
                    case 2:
                        return Situation::from(2)->name;
                        break;
                    case 3:
                        return Situation::from(3)->name;
                        break;
                    case 4:
                        return Situation::from(4)->name;
                        break;
                    case 5:
                        return Situation::from(5)->name;
                        break;
                    case 6:
                        return Situation::from(6)->name;
                        break;
                    case 7:
                        return Situation::from(7)->name;
                        break;
                }
            }

            if ($method === "POST") {
                
                switch($situation) {
                    case 1:
                        return Situation::from(1)->value;
                        break;
                    case 2:
                        return Situation::from(2)->value;
                        break;
                    case 3:
                        return Situation::from(3)->value;
                        break;
                    case 4:
                        return Situation::from(4)->value;
                        break;
                    case 5:
                        return Situation::from(5)->value;
                        break;
                    case 6:
                        return Situation::from(6)->value;
                        break;
                    case 7:
                        return Situation::from(7)->value;
                        break;
                }
            }
        }
    }
}