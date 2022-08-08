<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function home(){

        $data = [
            'title' => 'Homepage',
        ];
    
        return Inertia::render('HomePage', $data);
    }
    
    public function about(){

        $data = [
            'title' => 'About Page',
        ];
    
        return Inertia::render('About', $data);
    }
}
