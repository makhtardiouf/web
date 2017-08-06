<?php

namespace App\Http\Controllers;

use App\User;
use App\Contact;
use App\Helpers\Helpers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Input;

use Flash;
use Response;

class ContactController extends Controller
{
    protected $nPages = 8;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
      //  $this->middleware('trim.input');
    }

    /**
     * Display a listing of contact resquests for admin
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $contacts = Contact::filter($request->all())->paginate($this->nPages);
        
        return view('contact.index', [
            'contacts' => $contacts,
            
            ]);
    }


    /**
     * Show the form for creating a new form
     *
     * @return Response
     */
    public function create()
    {
        // Dummy var necessary to unify with contact.edit
         $contact = new Contact();

        return view('contact.create', [
                'contact' => $contact,
              
             ]);
    }

     /**
     * Store a newly created Contact in storage.
     *
     * @param CreateContactRequest $request
     *
     * @return Response
     */
    public function store(Request $request)
    {
        try {
            $this->validate($request, $this->rules);

            $contact = new Contact();
            $contact->name = $request->name;
            $contact->surname = $request->surname;
            $contact->gender = $request->gender;

            $contact->birthday = $request->birthday;
            $contact->phone = $request->phone;
            $contact->remarks = $request->remarks ;
            $contact->save();
           
            Flash::success('Contact request saved successfully');
           
            return view('contact.thankyou');
        } catch (Exception $e) {
            Log::debug("Contact request error: ". $e->getMessage());
            return view('contact.thankyou');
        }
    }


    /**
     * Validation rules
     */
    protected $rules =  [
        'name' => 'required',
        'surname' => 'required',
        'gender' => 'required',
        'birthday' => 'required',
        'phone' => 'required',
        'remarks' => 'required|max:2000',
    ];
}
