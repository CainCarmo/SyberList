<?php

namespace App\Model\Enums {

    enum Situation :int {
        case Plan_to_watch = 1;
        case Watching      = 2;
        case Completed     = 3;
        case Dropped       = 4;
    }

    class EnumsSituation {

        public static function ToggleSituation(mixed $situation): string {
            if ($situation === 1) return "Para Assistir";
            if ($situation === 2) return "Assistindo";
            if ($situation === 3) return "Completo";
            if ($situation === 4) return "Dropado";
        }
    }
}