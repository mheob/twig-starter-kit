<?php

    require_once '../vendor/autoload.php';

    $loader = new \Twig\Loader\FilesystemLoader('templates');
    $twig = new \Twig\Environment($loader, [
        // 'cache' => '/path/to/compilation_cache',
    ]);

    $page = $_SERVER['REQUEST_URI'] == '/' ? 'index' : substr($_SERVER['REQUEST_URI'],1);

    try {
        echo $twig->render($page . '.twig', array('sitename' => ucfirst($page)));
    } catch (Exception $e) {
        // echo $twig->render('404.html', array('error'=> $e));
        echo $twig->render($page . '.twig', array('sitename' => ucfirst($page)));
    }

?>