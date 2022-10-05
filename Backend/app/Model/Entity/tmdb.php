<?php

namespace App\Model\Entity {

    use App\Model\Data\QueryBuilder;

    class Tmdb {

        public int    $ID;
        public string $ID_Tmdb;
        public int    $FK_USER_ID;
        public string $Title;
        public string $Description;
        public int    $FK_TYPE_ID;
        public string $Cover;
        public int    $FK_SITUATION_ID;
        public string $Add_Time;

        public function Register() {

            $this->Add_Time = date("Y-m-d H:i:s");

            $oQueryBuilder = new QueryBuilder(table: "TMDB");

            $this->ID = $oQueryBuilder->Insert([
                "ID_TMDB"         => $this->ID_Tmdb,
                "FK_USER_ID"      => $this->FK_USER_ID,
                "TITLE"           => $this->Title,
                "DESCRIPTION"     => $this->Description,
                "FK_TYPE_ID"      => $this->FK_TYPE_ID,
                "COVER"           => $this->Cover,
                "FK_SITUATION_ID" => $this->FK_SITUATION_ID,
                "ADD_DATE"        => $this->Add_Time
            ]);
        }
    }
}