<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDefaultTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('visata', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 50);
            $table->integer('thickness');
            $table->integer('width');
            $table->integer('length');
            $table->integer('thick_real');
            $table->integer('width_real');
            $table->integer('length_real');
            $table->integer('size_m3');
            $table->integer('push_price');
            $table->integer('deffect_procent');
            $table->integer('deffect_cost');
            $table->integer('logistic');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('visata');
    }
}
