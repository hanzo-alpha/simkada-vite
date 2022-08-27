<?php

namespace App\Http\Livewire;

use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
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

    public function render(): Factory|View|Application
    {
        return view('livewire.dashboard');
    }
}
