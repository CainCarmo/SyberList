<?php

namespace App\Model\Data {

    use PDO;
    use PDOException;

    class ConfigDB {
        
        private const Host     = "localhost";
        private const Name     = "SyberList";
        private const DataUser = "root";
        private const DataPass = "77000520Ccos+";

        protected PDO $_connection;

        public function SetConnection(): void {
            try {
                $this->_connection = new PDO("mysql:host=". self::Host. ";dbname=". self::Name, self::DataUser, self::DataPass);
                $this->_connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            }
            catch(PDOException $ex) {
                die("ERRO AO TENTAR CONECTAR-SE COM O BANCO: ".$ex->getMessage());
            }
        }
    }
}
