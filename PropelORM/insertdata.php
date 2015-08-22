<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

try {
    $fp = fopen("propelbook.json", "a+");

    // Add some data
    $author = new Author();
    $author->setFirstName('Jane' . rand(1, 10));
    $author->setLastName('Diouf');
    $author->save();
    fwrite($fp, $author->toJSON() . "\n");
    echo "Added author: " . $author->__toString();

    $publi = new Publisher();
    $publi->SetName("SoftenSys" . rand(1, 10));
    $publi->save();
    fwrite($fp, $publi->toJSON() . "\n");
    echo "\nAdded publisher: " . $publi->__toString();

    $book = new Book();
    $book->setTitle("The beginning of Makhtar's come back, inchaAllah");
    $book->setISBN(md5(rand()));
    $book->setAuthor($author);
    $book->setPublisher($publi);
    $book->save();
    fwrite($fp, $book->toJSON() . "\n");
    echo "\nAdded book: " . $book->toJSON();

//    $author = new Author();
//    $content = fread($fp, 49);
//    echo "\n\n Importing content: $content";
//    $author->fromJSON($content);
//    echo $author->getFirstName();
} finally {
    fclose($fp);
}
