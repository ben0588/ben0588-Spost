<?php
header("Access-Control-Allow-Origin:*");
    // 基本方法:
    // $mysqli = new mysqli('localhost','root','','ispan',3306);
    // $mysqli->set_charset('utf8');

    // 改使用匯入方式取代上方
    // sql.php檔案也只有上方兩段程式碼
    include('sql.php');
    
    // ==========移除資料用
    // 給予刪除的目標id值
    $id = $_REQUEST['carID'];
    // $id = $_POST['carID'];
    // var_dump($id);
    echo $id;

    // MySQL刪除語法:   