<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Page</title>
</head>
<body>
   <?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
?>
    <?

    $user = 'root';
    $password = 'root';
    $db = 'tost';
    $host = 'localhost';
    
    $dsn = 'mysql:host='.$host.';dbname='.$db;
    $pdo = new PDO($dsn, $user, $password);
    
    
//    $query = $pdo->$query('SELECT * FROM `users`');
//    while($row = $query->fetch(PDO::FETCH_OBJ)) {
//        echo $row->login . '<br>';
        
        $name = 'Petr';
        $sql = 'SELECT `name`, `id`, `email` FROM `users` WHERE `name` = ?';
        $query = $pdo->prepare($sql);
        $query->execute([$name]);
        $users = $query->fetchAll(PDO::FETCH_OBJ);
        
        var_dump($users);
        
    }

    
    ?>
</body>
</html>


