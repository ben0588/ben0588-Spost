<?php
    include('sql.php');
    $oid = "{$materialPost['oid']}";
    $id = "{$materialPost['id']}";
    $title = "{$materialPost['title']}";
    $date = "{$materialPost['date']}";
    $time = "{$materialPost['time']}";
    $price = "{$materialPost['price']}";

    $insert = "INSERT INTO shoppingcar (`oid`, id, title, `date`, `time`, price) VALUES (?, ?, ?, ?, ?, ?)";
    $sportIn = $sportSql->prepare($insert);
    $sportIn->bind_param('ssssss', $oid, $id, $title, $date, $time, $price);

    if ($sportIn->execute()) {
        echo true;
    }
?>