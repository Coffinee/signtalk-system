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
    public function run(): void
    {
        $user = DB::table('users')->insert([
            [
                'role_id' => 1,
                'first_name' => 'System',
                'last_name' => 'Admin',
                'email' => 'admin@gmail.com',
                'password' => Hash::make('asdasd123'),
                'cPassword' => Hash::make('asdasd123'),
                'email_verified_at' => date('Y-m-d h:i:s'),
                'created_at' => date('Y-m-d h:i:s'),
            ],
            [
                'role_id' => 2,
                'first_name' => 'Teacher',
                'last_name' => 'Admin',
                'email' => 'teacher@gmail.com',
                'password' => Hash::make('asdasd123'),
                'cPassword' => Hash::make('asdasd123'),
                'email_verified_at' => date('Y-m-d h:i:s'),
                'created_at' => date('Y-m-d h:i:s'),
            ],
            [
                'role_id' => 3,
                'first_name' => 'Student',
                'last_name' => 'Admin',
                'email' => 'student@gmail.com',
                'password' => Hash::make('asdasd123'),
                'cPassword' => Hash::make('asdasd123'),
                'email_verified_at' => date('Y-m-d h:i:s'),
                'created_at' => date('Y-m-d h:i:s'),
            ],
        ]);

    }

}