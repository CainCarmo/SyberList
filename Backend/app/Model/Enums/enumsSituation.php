<?php

namespace App\Model\Enums {

    enum Situation :int {
        case Plan_to_watch = 1;
        case Watching      = 2;
        case Completed     = 3;
        case Dropped       = 4;
    }

    class EnumsSituation {

        public static function ToggleSituation(string $method, mixed $situation): string|int {
            
            if ($method === "GET") {
                
                switch($situation) {
                    case 1:
                        return "Para assistir";
                        break;
                    case 2:
                        return "Assistindo";
                        break;
                    case 3:
                        return "Completo";
                        break;
                    case 4:
                        return "Dropado";
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
                }
            }
        }
    }
}