<?php

    class MysqliClass {
        private $mysqli;

        // 將從外面輸入的值放入this變數$mysqli
        function __construct($mysqli){
            $this->mysqli = $mysqli;
        }
    }


?>