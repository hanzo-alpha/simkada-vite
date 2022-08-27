<?php

namespace App\Http\Livewire;

use Livewire\Component;

class Dashboard extends Component
{
    public string $title;
    public array $breadcrumbs = [];
    public string $description;

    public function mount()
    {
        $this->title = 'Dashboard';
        $this->breadcrumbs = ['/' => 'Home'];
        $this->description = 'This is the dashboard livewire';
    }
    public function render()
    {
        return view('livewire.dashboard');
    }
}
