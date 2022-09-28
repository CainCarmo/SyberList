<?php

namespace App\Model\Data {

    use PDO;
    use PDOException;

    class ConfigDB {
        
        const Host     = "localhost";
        const Name     = "SyberList";
        const DataUser = "root";
        const DataPass = "77000520Ccos+";

        protected PDO $_connection;

        public function SetConnection() {
            try {
                $this->_connection = new PDO("mysql:host=". self::Host. ";dbname=". self::Name, self::DataUser, self::DataPass);
                $this->_connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            }
            catch(PDOException $ex) {
                die("ERROR: ".$ex->getMessage());
            }
        }
    }
}
