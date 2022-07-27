<?php
    header("Access-Control-Allow-Origin:*");
    foreach ($_POST as $key => $val) {
        $checkinfo = [];
        $checkinfo[0] = explode(',', $key)[0];
        $checkinfo[1] = explode(',', $key)[1];
    }
    if(hash('sha256', $checkinfo[0].'spost') == $checkinfo[1]){
        echo 'okok';
    }
?>