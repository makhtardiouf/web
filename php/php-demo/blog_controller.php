<?php
// Controller, Entry point of the application; should be named index.php

require_once 'blog_model.php';

$posts = getPosts();

// view template
require_once 'views/blog_view.php';
