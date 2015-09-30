<?php
namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

class LuckyController extends Controller
{
     /**
     * @Route("/lucky/index")
     */
    public function indexAction()
    {
        return $this->numberAction();
    }
    /**
     * @Route("/lucky/number/{count}", defaults={"count" = 1})
     */
    public function numberAction($count = 1)
    {
        $numbers = array();
        for ($i = 0; $i < $count; $i++) {
            $numbers[] = rand(0, 100);
        }
        $numbersList = implode(', ', $numbers);

      //  return new Response(
      //      '<html><body>Lucky numbers: '.$numbersList.'</body></html>'
      //  );
        
        return $this->render(
        'lucky/number.html.twig',
        array('luckyNumberList' => $numbersList)
    );
        
    }
    
    /**
     * @Route("/api/lucky/number")
     * return a JSON end-point
     */
    public function apiNumberAction()
    {
        $data = array(
            'lucky_number' => rand(20, 100),
        );

        // calls json_encode and sets the Content-Type header
        return new JsonResponse($data);
    }
    
}
