<?php
    
    $res = $_SERVER['QUERY_STRING'];
    $res = str_replace("id=","",$res);
    // echo $res;
    header("Location: http://localhost:3000/member/post/{$res}");
?>