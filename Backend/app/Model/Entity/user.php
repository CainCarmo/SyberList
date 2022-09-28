<?php

namespace App\Model\Entity {

    use \App\Model\Data\QueryBuilder;

    class User {
        
        public int    $ID;
        public string $Username;
        public string $Surname;
        public string $Nickname;
        public string $UserEmail;
        public string $UserPass;
        public mixed  $UserGender;
        public mixed  $UserRole;
        public mixed  $UserStatus;
        public string $UserIcon;
        public string $BirthDate;
        public string $RegisDate;

        public function __construct() {
            $this->UserRole = 1;
            $this->UserStatus = 1;
        }

        public function Register() {
            $this->RegisDate = date("Y-m-d H:i:s");

            $oQueryBuilder = new QueryBuilder(table: "USER");

            $this->ID = $oQueryBuilder->Insert([
                'USERNAME'      => $this->Username,
                'SURNAME'       => $this->Surname,
                'NICKNAME'      => $this->Nickname,
                'USER_EMAIL'    => $this->UserEmail,
                'USER_PASS'     => $this->UserPass,
                'FK_GENDER_ID'  => $this->UserGender,
                'FK_ROLE_ID'    => $this->UserRole,
                'FK_STATUS_ID'  => $this->UserStatus,
                'BIRTH_DATE'    => $this->BirthDate,
                'REGISTER_DATE' => $this->RegisDate
            ]);
        }

        public static function GetUserByEmail(string $email) {
            return (new QueryBuilder(table: "USER"))->Select(where: "USER_EMAIL = '". $email ."'")->fetchObject(self::class);
        }
    }
}