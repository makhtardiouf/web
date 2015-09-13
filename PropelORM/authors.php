<?php
// Author: Makhtar Diouf <makhtar.diouf@gmail.com>
// $Id$
require_once __DIR__ . '/WebPage.php';

$page = new WebPage("List of authors");
$page->showNavigation();
?>

<div class="row">
    <div class="col-md-6">
        <table class="table table-striped table-hover table-condensed">

            <tr><th>ID</th><th>Name</th>
                <th>Books</th>
                <th>Edit</th>
            </tr>
            
            <?php
            // List authors in reverse order
            $authors = AuthorQuery::create()->paginate($page = 1, $maxPerPage = 10);
            //$authors = array_reverse($authors->toArray());
            // ->orderByFirstName()
            // ->find();
            // $authors contains a collection of Author objects
            // one object for every row of the author table

            foreach ($authors as $author) {
                $books = $author->getBooks();
                foreach ($books as $book) {
                    $bookList .= $book->getTitle() . '<br>';                    
                }
                
                echo "<tr><td>" . $author->getId() . "</td><td>" .
                $author->getFirstName() . " " . 
                $author->getLastName() . "</td><td>" .
                        // change to popup modal
'<a href="#"  title="Show Books" data-toggle="modal" data-content="'.  $bookList .'">'.

                $author->countBooks() . "</a></td><td>" .
                '<a href="authors.php?id=' . $author->getId() .
                '"><span class="glyphicon glyphicon-edit"></span></a></td></tr>';
            }
            // Link other pages here ...
            //$authors->getNextPage();
            ?>
        </table>
    </div>

    <div class="col-md-6 panel-body" id="editForm">
        <h3>Edit author information:</h3>
        <form role="form">
            <div class="form-group">
                <?php
                $author = new Author();
                $id = filter_input(INPUT_GET, 'id');
                if ($id >= 1) {
                    //  echo "<script>$('#editForm').show();</script>";
                    $author = AuthorQuery::create()->findPk($id);
                } else {
                    echo "<script>$('#editForm').hide();</script>";
                }

                //var_dump($author);               
                ?>

                <label for="surname">First name:</label>
                <input type="text" maxlength="20" class="form-control" 
                       id="surname" value="<?php echo $author->getFirstName(); ?>">
            </div>
            <div class="form-group">
                <label for="name">Last name:</label>
                <input type="text" maxlength="20" class="form-control" 
                       id="name" value="<?php echo $author->getLastName(); ?>">
            </div>
            <div class="form-group">
                <label for="email">Email address:</label>
                <input type="email" maxlength="20" class="form-control" id="email">
            </div>

            <button type="submit" class="btn btn-default">Save</button>
        </form>                    

    </div>
</div>            

<ul class="pager">
    <li class="previous"><a href="index.php">Previous</a></li>
    <li class="next"><a href="#">Next</a></li>
</ul>

<?php
$page->endPage();
