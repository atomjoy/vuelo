<?php

use Illuminate\Support\Facades\Route;
use Webi\Http\Controllers\WebiActivate;

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

// Webi
// Or for tests use json controller from Webi\Http\Controllers\WebiActivate.php
// Route::get('/activate/{id}/{code}', [WebiActivate::class, 'index'])->middleware(['webi-locale']);

// Laravel routes
Route::get('/welcome', function () {
	return view('welcome');
});

// Laravel login auth redirect url
Route::get('/login', function () {
	return view('vueon::vue');
})->name('login');

// Vue all routes
Route::fallback(function () {
	return view('vueon::vue');
});
