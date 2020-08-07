<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function(){
    return view('app');
});

Route::post('/login', 'LoginController@login');

Route::post('/logout', 'LoginController@logout');

Route::get('/user', 'LoginController@get_user');


Route::group(['middleware' => ['auth']], function(){
    Route::get('/contacts', 'ContactController@getContacts');

    Route::post('/contact/updateOradd', 'ContactController@updateOrAddContact');

    Route::delete('/contact/delete/{id}', 'ContactController@deleteContact');
});

