<?php

namespace App\Model\Entity {

    use PDO;
    use DateTime;
    use DateTimeZone;
    use App\Model\Enums\EnumsJikan;
    use App\Model\Data\QueryBuilder;

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

        public function Register(): void {
            $timezone = new DateTimeZone("America/Sao_Paulo");
            $this->Add_Time = date_format(new DateTime("now", $timezone), "Y-m-d H:i:s");

            $oQueryBuilder = new QueryBuilder(table: "JIKAN");

            $this->ID = $oQueryBuilder->Insert([
                "ID_JIKAN"        => $this->ID_Jikan,
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
            $baseURL = "https://api.jikan.moe/v4/";

            $response = json_decode(file_get_contents($baseURL . $type . "/" . $ID))->data;

            $this->ID_Jikan        = $response->mal_id;
            $this->FK_USER_ID      = $_SESSION["User"]["ID"];
            $this->Title           = $response->title;
            $this->Description     = str_replace("'", "\'", $response->synopsis);
            $this->FK_TYPE_ID      = EnumsJikan::ToggleType(method: "POST", type: $response->type);
            $this->Cover           = $response->images->webp->large_image_url;
            $this->FK_SITUATION_ID = 1;
        }

        public function GetItemsByUser(int $oUserID): array|bool {
            return (new QueryBuilder(table: "JIKAN"))->Select(where: "FK_USER_ID = ". $oUserID ."")->fetchAll(PDO::FETCH_CLASS, self::class);
        }

        public function VerifyItemSaved(int $itemID, string $itemType, mixed $oUserID): bool {
            $response = $itemType === "anime"
                ? (new QueryBuilder(table: "JIKAN"))->Select(where: "ID_JIKAN = ". $itemID . 
                                                                    " AND FK_TYPE_ID <= ". EnumsJikan::ToggleType("POST", $itemType) . 
                                                                    " AND FK_USER_ID =  ". $oUserID)->fetchAll(PDO::FETCH_CLASS, self::class)

                : (new QueryBuilder(table: "JIKAN"))->Select(where: "ID_JIKAN = " . $itemID . 
                                                                    " AND FK_TYPE_ID >= ". EnumsJikan::ToggleType("POST", $itemType) . 
                                                                    " AND FK_USER_ID =  ". $oUserID)->fetchAll(PDO::FETCH_CLASS, self::class);
            
            $saved = $response ? true : false;
            
            return $saved;
        }

        public function UpdateSituation(int $itemID, string $itemType, int $situationID, int $oUserID) {
            return $itemType === "anime"
                ? (new QueryBuilder(table: "JIKAN"))->Update(where: "ID_JIKAN = " . $itemID . 
                                                                    " AND FK_TYPE_ID <= ". EnumsJikan::ToggleType("POST", $itemType) . 
                                                                    " AND FK_USER_ID =  ". $oUserID, 
                                                            values: ["FK_SITUATION_ID" => $situationID])

                : (new QueryBuilder(table: "JIKAN"))->Update(where: "ID_JIKAN = " . $itemID . 
                                                                    " AND FK_TYPE_ID >= ". EnumsJikan::ToggleType("POST", $itemType) . 
                                                                    " AND FK_USER_ID =  ". $oUserID, 
                                                            values: ["FK_SITUATION_ID" => $situationID]);
        }

        public function DeleteItem(string $itemID, string $itemType,int $oUserID) {
            return (new QueryBuilder(table: "JIKAN"))->Delete(where: "ID_JIKAN = ". $itemID .
                                                                     " AND FK_TYPE_ID = ". $itemType .
                                                                     " AND FK_USER_ID = ". $oUserID);
        }
    }
}
