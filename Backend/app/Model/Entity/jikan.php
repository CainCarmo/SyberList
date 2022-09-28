<?php

namespace App\Model\Entity {

    use \App\Model\Data\QueryBuilder;

    class Jikan {
        
        public int    $ID;
        public string $ID_Jikan;
        public int    $FK_USER_ID;
        public string $Title;
        public string $Description;
        public int    $FK_TYPE_ID;
        public string $Cover;
        public int    $FK_SITUATION_ID;
        public string $Add_Time;

        public function Register() {
            $this->AddTime = date("Y-m-d H:i:s");

            $oQueryBuilder = new QueryBuilder(table: "JIKAN");

            $this->ID = $oQueryBuilder->Insert([
                "ID_JIKAN"        => $this->ID_Jikan,
                "FK_USER_ID"      => $this->FK_USER_ID,
                "TITLE"           => $this->Title,
                "DESCRIPTION"     => $this->Description,
                "FK_TYPE_ID"      => $this->FK_TYPE_ID,
                "COVER"           => $this->Cover,
                "FK_SITUATION_ID" => $this->FK_SITUATION_ID,
                "ADD_DATE"        => $this->AddTime
            ]);
        }

        public static function GetAllAnimes(int $ID) {
            return (new QueryBuilder(table: "JIKAN"))->Select(where: "FK_USER_ID = '". $ID ."'")->fetchObject(self::class);
        }
    }
}