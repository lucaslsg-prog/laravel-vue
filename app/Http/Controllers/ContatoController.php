<?php

namespace App\Http\Controllers;

use App\Contato;
use Illuminate\Http\Request;

class ContatoController extends Controller
{
   
    public function index()
    {
        return response(Contato::all(), 200);
    }

    
    public function create()
    {
        //
    }

   
    public function store(Request $request)
    {
        $contato = Contato::create($request->all());
    
        if ($contato){
            return response($contato, 201);
        }

        return response([], 400);
    }

   
    public function show(Contato $contato)
    {
        //
    }

    
    public function edit(Contato $contato)
    {
        //
    }

   
    public function update(Request $request, Contato $contato)
    {
        //
    }

    
    public function destroy(Contato $contato)
    {
        $contato->delete();
    }
}
