<?php

namespace App\Model\Data {

    use PDOException;
    use PDOStatement;

    class QueryCustom extends ConfigDB {

        private string $_table;

        public function __construct(string $table) {
            $this->SetConnection();
            $this->_table = $table;
        }
    }
}