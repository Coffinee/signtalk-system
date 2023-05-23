<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;


class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     * @return void
     */
    public function run():void{
        $user = DB::table('users')->insert([
            [
            'role' => 'admin',
            'first_name' => 'Vedasto',
            'last_name' => 'Quintans',
            'email' => 'quintansvedasto@gmail.com',
            'password' => Hash::make('asdasd123'),
            'email_verified_at' => date('Y-m-d h:i:s'),
            'created_at' => date('Y-m-d h:i:s'),
            ],
            [
                'role' => 'student',
                'first_name' => 'Glenn Ross',
                'last_name' => 'Mata',
                'email' => 'glenn@gmail.com',
                'password' => Hash::make('asdasd123'),
                'email_verified_at' => date('Y-m-d h:i:s'),
                'created_at' => date('Y-m-d h:i:s'),
            ],
            [
                'role' => 'teacher',
                'first_name' => 'Carl Lezter',
                'last_name' => 'Mendoza',
                'email' => 'carl@gmail.com',
                'password' => Hash::make('asdasd123'),
                'email_verified_at' => date('Y-m-d h:i:s'),
                'created_at' => date('Y-m-d h:i:s'),
            ],
    ]);

    }

}
