<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Estimate extends Model
{
    //
    public function user()
    {
        return $this->belongsTo('App\Project');
    }
    public function products(){
        return $this->hasMany('App\ProductEstimate');
    }
    public function services(){
        return $this->hasMany('App\ProductService');
    }
}
