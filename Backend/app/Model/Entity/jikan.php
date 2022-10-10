<?php

namespace App\Model\Entity {

    use PDO;
    use App\Model\Data\QueryBuilder;
    use App\Model\Enums\EnumsJikan;

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

            $this->Add_Time = date("Y-m-d H:i:s");

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

        public function SearchItemByID(string $type, int $ID): void {

            $baseURL = "https://api.jikan.moe/v4/";

            $response = file_get_contents($baseURL . $type . "/" . $ID);

            $responseParsed = json_decode($response)->data;

            $this->ID_Jikan        = $responseParsed->mal_id;
            $this->FK_USER_ID      = $_SESSION["User"]["ID"];
            $this->Title           = $responseParsed->title;
            $this->Description     = str_replace("'", "\'", $responseParsed->synopsis);
            $this->FK_TYPE_ID      = EnumsJikan::ToggleType(method: "POST", type: $responseParsed->type);
            $this->Cover           = $responseParsed->images->webp->large_image_url;
            $this->FK_SITUATION_ID = 1;
        }

        public function GetItemsByUser(int $oUserID): array|bool {
            return (new QueryBuilder(table: "JIKAN"))->Select(where: "FK_USER_ID = '". $oUserID ."'")->fetchAll(PDO::FETCH_CLASS, self::class);
        }
    }
}