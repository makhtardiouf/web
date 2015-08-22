<?php
// Author: Makhtar Diouf <makhtar.diouf@gmail.com>
// $Id: index.php, dabcbdbb1ca2  makhtar $
require_once __DIR__ . '/WebPage.php';

$page = new WebPage("CRUD operations with Propel2");
$page->showNavigation();
?>
         
            <div class="panel panel-default">
                <div class="panel-body">
                    <h3>Input author information:</h3>
                    <div class="row">
                        <div class="col-md-4">
                         
                    <form role="form" name="authorInfo" method="post" action="index.php?action=save">
                        <div class="form-group">
                            <label for="surname">First name:</label>
                            <input type="text" maxlength="20" class="form-control" id="surname" 
                                   name="surname" required="true" autocomplete="true">
                        </div>
                        <div class="form-group">
                            <label for="name">Last name:</label>
                            <input type="text" maxlength="20" class="form-control" id="name" 
                                   name="name" required="true" autocomplete="true">
                        </div>
                        <div class="form-group">
                            <label for="email">Email address:</label>
                            <input type="email" maxlength="20" class="form-control" id="email" 
                                   name="email" autocomplete="true">
                        </div>

                        <button type="submit" class="btn btn-default">Submit</button>
                    </form>                    
   
                        </div>
                        
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="book">Book:</label>
                                <select form="authorInfo" id="book" class="form-control">
                                    <option>Select book...</option>
                                    <!-- List all available books here -->
                                </select>
                            </div>
                            
                            <div class="form-group">
                                <label for="publisher">Publisher:</label>
                                <select form="authorInfo" id="publisher" class="form-control">
                                    <option>Select publisher...</option>
                                    <!-- List all available publishers here -->
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <?php
            // Save submitted author information
            if ( filter_input(INPUT_GET, 'action') == 'save') {
                try {
                $author = new Author();
                //$author->setId(1); // Test insert failure
                $author->setFirstName(filter_input(INPUT_POST, 'surname'));
                $author->setLastName(filter_input(INPUT_POST, 'name'));
                $ret = $author->save();
                
                if($ret)
                    echo '<p class="text-success">Saved author information.</p>';
                else
                    echo '<p class="text-danger">Error, author information could not be saved.</p>';
                    
                var_dump($_REQUEST);
              
                } catch (Exception $ex) {
                    echo '<p class="text-danger">Error, author information could not be saved.</p>';
                    echo $ex->getMessage();
                }
            }
            ?>

            <ul class="pager">
                <li class="previous"><a href="#">Previous</a></li>
                <li class="next"><a href="authors.php">Next</a></li>
            </ul>
        
<?php
$page->endPage();
