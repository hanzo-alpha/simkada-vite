import Alpine from 'alpinejs'
import _ from "lodash";
import axios from "axios";
import * as Popper from "@popperjs/core";
import { livewire_hot_reload } from 'virtual:livewire-hot-reload';

import './dashboard.default.js';

window._ = _;
window.axios = axios;
window.Popper = Popper;
window.Alpine = Alpine;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// CSRF token
let token = document.head.querySelector('meta[name="csrf-token"]');
if (token) {
    window.axios.defaults.headers.common["X-CSRF-TOKEN"] = token.content;
} else {
    console.error(
        "CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token"
    );
}

Alpine.start();
livewire_hot_reload();
