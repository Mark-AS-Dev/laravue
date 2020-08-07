<?php

namespace App\Http\Controllers;

use App\Contact;
use App\Http\Requests\UserRequest;

class ContactController extends Controller
{
    public function getContacts()
    {
        return Contact::all();
    }

    public function updateOrAddContact(UserRequest $request)
    {
        try{
            $contact = Contact::updateOrCreate([
                    'id' => $request->get('id')
                ],
                [
                    'name' => $request->get('name'),
                    'email' => $request->get('email'),
                    'age' => $request->get('age'),
                    'gender' => $request->get('gender'),
                    'contact' => $request->get('contact'),
                    'address' => $request->get('address')
                ]);
            return response()->json(['success' => true, 'data' => $contact]);
        }catch(\Exception $e){
            return response()->json(['success' => false, 'message' => $e]);
        }
    }

    public function deleteContact($id)
    {
        try{
            $contact = Contact::find($id);
            $contact->delete();
            return response()->json(['success' => true]);
        }catch(\Exception $e){
            return response()->json(['success' => false, 'message' => $e]);
        }
    }
}
