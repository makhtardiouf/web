<?php

// src/AppBundle/Controller/HelloController.php

namespace AppBundle\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class TestController extends Controller {

    /**
     * @Route("/test/{name}")
     * The html output should be in a view file
     */
    public function indexAction(Request $request, $name = "world") {
        // if the _GET request contains &page=
        $page = $request->query->get('page', 1);
        $resp = "<html><body><h1>Hello $name!</h1> <br> Page md5 sum: " . md5($page);
        $resp .= "<br>Host: " . $request->getHost() . "<br>";
        $resp .= "Detected user agent: " . $request->headers->get('User-Agent');
        $session = $request->getSession();
        $userIp = $session->get('userIp');
        if (empty($userIp))
            $session->set('userIp', $request->getClientIp());
        else
            $resp .= "<br>Your IP from session info: $userIp [" . $session->getId() . "]";
        
        $resp .= "</body></html>";
        
        return new Response($resp);
    }

    /**
     * @Route("/testdoc")
     */
    public function docAction() {
        // often used after processing a form...etc
        $msg = "FlashMessage: you can see the documentation from the link below<br>";
        $msg .= "<a href='http://symfony.com/doc' target='_blank'>Symfony Docs</a><br>";
        $this->addFlash('notice', $msg);
        
        return $this->redirectToRoute("homepage");

    }

}
