<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Visata;

class BaseController extends Controller
{
    public function home() {

        $data = Visata::find(1)->get();

        return response()->json(['data' => $data]);
    }

    public function getValue(Request $request) {
        $data = Visata::where('id', '=', $request->id)->get();

        return response()->json(['data' => $data->toArray()]);
    }
}
