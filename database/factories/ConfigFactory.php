<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ConfigFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $id = $this->faker->randomNumber(5);

        return [
            'device_id' => $id,
            'device_name' => 'router'.$id,
            'device_category' => $this->faker->randomElement(['Switches', 'Routers', 'Firewalls', 'Load Balancers', 'Servers', 'Storage', 'Access Points', 'Wireless', 'Other'], 1),
            'command' => $this->faker->randomElement(['show run', 'show clock', 'show version']),
            'type' => 'device_download',
            'download_status' => $this->faker->randomElement([0, 1, 2]),
            'report_id' => 'anEnablePrompt#',
            'config_location' => rconfig_appdir_path().'/storage/app/rconfig/data/Routers/router3/2022/Jul/09/showrun_1612.txt',
            'config_filename' => 'showrun_922.txt',
            'start_time' => $this->faker->dateTimeThisDecade($max = 'now', $timezone = null),
            'end_time' => $this->faker->dateTimeThisDecade($max = 'now', $timezone = null),
            'duration' => $this->faker->randomDigit,
            'created_at' => $this->faker->dateTimeThisDecade($max = 'now', $timezone = null),
            'updated_at' => $this->faker->dateTimeThisDecade($max = 'now', $timezone = null),
        ];
    }
}
