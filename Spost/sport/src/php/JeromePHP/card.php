<?php
    include('sql.php');

    $id = "{$materialPost['id']}";

    // card
    if ( $id == 'true' ) {
        $sql =  "SELECT place.pid, addr, title, price, pricepertime, img FROM place INNER JOIN pimage ON place.pid = pimage.pid 
            ORDER BY RAND() limit 3;";
    }else {
        $sql =  "SELECT lesson.lid, addr, title, price, pricepertime, img FROM lesson INNER JOIN limage ON lesson.lid = limage.lid 
            ORDER BY RAND() limit 3;";
    }
    $result = $sportSql->query($sql);

    $i = 0;
    $myJSON=[];
    while ($date = $result->fetch_object()) {
        $date->img = base64_encode($date->img);
        $myJSON[$i] = $date;
        $i++;
    }
    $MaterialToClient = json_encode($myJSON);
    echo $MaterialToClient;