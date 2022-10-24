<?php

namespace App\Model\Entity {

    use PDO;
    use DateTime;
    use DateTimeZone;
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
            $timezone = new DateTimeZone("America/Sao_Paulo");
            $this->RegisDate = date_format(new DateTime("now", $timezone), "Y-m-d H:i:s");

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

        public function SearchItemByID(string $type, string $ID): void {
            $apiKey       = "32a48ac8387366ff3d957d772176624f";
            $baseURL      = "https://api.themoviedb.org/3";
            $baseImageURL = "https://image.tmdb.org/t/p/w500";

            $response = json_decode(file_get_contents($baseURL . "/" . $type . "/" . $ID . "?api_key=" . $apiKey));

            $this->ID_Tmdb         = $response->id;
            $this->FK_USER_ID      = $_SESSION["User"]["ID"];
            $this->Description     = str_replace("'", "\'", $response->overview);
            $this->FK_TYPE_ID      = EnumsTmdb::ToggleType(method: "POST", type: ucfirst($type));
            $this->Cover           = $baseImageURL . $response->poster_path;
            $this->FK_SITUATION_ID = 1;

            $type === "movie"
                    ? $this->Title = $response->title
                    : $this->Title = $response->name;
        }

        public function GetItemsByUser(int $oUserID): array|bool {
            return (new QueryBuilder(table: "TMDB"))->Select(where: "FK_USER_ID = ". $oUserID ."")->fetchAll(PDO::FETCH_CLASS, self::class);
        }

        public function VerifyItemSaved(int $itemID, string $itemType, mixed $oUserID): bool {
            $response = (new QueryBuilder(table: "TMDB"))->Select(where: "ID_TMDB = ". $itemID . 
                                                                         " AND FK_TYPE_ID = ". EnumsTmdb::ToggleType("POST", $itemType) . 
                                                                         " AND FK_USER_ID = ". $oUserID)->
                                                                    fetchAll(PDO::FETCH_CLASS, self::class);
            
            $saved = $response ? true : false;
            
            return $saved;
        }

        public function UpdateSituation(int $itemID, string $itemType, int $situationID, int $oUserID) {
            return (new QueryBuilder(table: "TMDB"))->Update(where: "ID_TMDB = " . $itemID . 
                                                                    " AND FK_TYPE_ID = ". EnumsTmdb::ToggleType("POST", $itemType) . 
                                                                    " AND FK_USER_ID = ". $oUserID, 
                                                            values: ["FK_SITUATION_ID" => $situationID]);
        }

        public function DeleteItem(string $itemID, string $itemType,int $oUserID) {
            return (new QueryBuilder(table: "TMDB"))->Delete(where: "ID_TMDB = ". $itemID .
                                                                    " AND FK_TYPE_ID = ". $itemType .
                                                                    " AND FK_USER_ID = ". $oUserID);
        }
    }
}