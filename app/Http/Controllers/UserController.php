<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserCreateRequest;
use App\Http\Requests\UserRequestCreate;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Spatie\Permission\Models\Role;
use Yajra\DataTables\DataTables;

class UserController extends Controller {

    public function index()
    {


        return view("dashboard.user.user-main");



    }

    public function test()
    {
        return Datatables::of(User::query())->make(true);
    }

    public function create()
    {
        return view("dashboard.user.user", [
            "roles" => Role::all()
        ]);
    }



    public function store(UserCreateRequest $request)
    {

        $user = new User([
            "name" => $request->first_name . "-" . $request->last_name,
            "first_name" => $request->first_name,
            "last_name" => $request->last_name,
            "email"=>$request->email,
            "password"=>$request->password,
            "phone"=>$request->phone,
            "description"=>$request->description,
            "slug"=>Str::slug($request->first_name.$request->last_name,"-"),
            "status"=>$request->status?1:0,
            "avatar"=>"replaceMe"

        ]);
        $user->save();

        return redirect()->back();

    }

}
