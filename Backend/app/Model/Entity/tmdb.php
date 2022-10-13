<?php

namespace App\Model\Entity {

    use PDO;
    use App\Model\Enums\EnumsTmdb;
    use App\Model\Data\QueryBuilder;

    class Tmdb {

        public int    $ID;
        public int    $ID_Tmdb;
        public int    $FK_USER_ID;
        public string $Title;
        public string $Description;
        public int    $FK_TYPE_ID;
        public string $Cover;
        public int    $FK_SITUATION_ID;
        public string $Add_Time;

        public function Register(): void {

            $this->Add_Time = date("Y-m-d H:i:s");

            $oQueryBuilder  = new QueryBuilder(table: "TMDB");

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

        public function SearchItemByID(string $type, int $ID): void {

            $apiKey       = "32a48ac8387366ff3d957d772176624f";
            $baseURL      = "https://api.themoviedb.org/3";
            $baseImageURL = "https://image.tmdb.org/t/p/w500";

            $response = file_get_contents($baseURL . "/" . $type . "/" . $ID . "?api_key=" . $apiKey);

            $responseParsed = json_decode($response);

            $this->ID_Tmdb         = $responseParsed->id;
            $this->FK_USER_ID      = $_SESSION["User"]["ID"];
            $this->Description     = str_replace("'", "\'", $responseParsed->overview);
            $this->FK_TYPE_ID      = EnumsTmdb::ToggleType(method: "POST", type: $type);
            $this->Cover           = $baseImageURL . $responseParsed->poster_path;
            $this->FK_SITUATION_ID = 1;

            $type === "movie"
                ? $this->Title = $responseParsed->title
                : $this->Title = $responseParsed->name;
        }

        public function GetItemsByUser(int $oUserID): array|bool {
            return (new QueryBuilder(table: "TMDB"))->Select(where: "FK_USER_ID = ". $oUserID)->fetchAll(PDO::FETCH_CLASS, self::class);
        }
    }
}