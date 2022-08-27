<?php

use App\Http\Livewire\Dashboard;
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

// index routing via Route feature
//Route::redirect('/', '/Horizontal');
//Route::get('/', function () {
//    return view('horizontal');
//});
Route::view('/', 'horizontal');
//Route::get('/', Dashboard::class)->name('dashboard');
/*
|--------------------------------------------------------------------------
| Pages
|--------------------------------------------------------------------------
|
*/
//Route::view('/Horizontal', 'horizontal');
//Route::view('/Vertical', 'vertical');
