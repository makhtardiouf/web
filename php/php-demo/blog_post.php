<?php
// Controller for showing the content of a single post
// http://.../blog_post.php?id=2

require_once 'blog_model.php';
$id = filter_input(INPUT_GET, $_GET['id']);

//if(empty($id))
//    $id = 1;

$post = getPost(($id));

require 'views/post.php';
