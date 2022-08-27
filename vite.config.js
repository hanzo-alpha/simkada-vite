import fs from 'fs';
import {defineConfig} from 'vite';
import laravel, {refreshPaths} from 'laravel-vite-plugin';
import {homedir} from 'os';
import {resolve} from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import livewire from '@defstudio/vite-livewire-plugin';

let host = 'simkada-vite.local';

export default defineConfig({
    assetsInclude: [
        '~image'
    ],
    plugins: [
        viteStaticCopy({
            targets: [
                {
                    src: "resources/assets/css",
                    dest: "assets",
                },
                {
                    src: "resources/assets/font",
                    dest: "assets",
                },
                {
                    src: "resources/assets/img",
                    dest: "assets",
                },
                {
                    src: "resources/assets/js",
                    dest: "assets",
                },
                {
                    src: "resources/assets/icon",
                    dest: "assets",
                },
                {
                    src: "resources/assets/json",
                    dest: "assets",
                },
            ],
        }),
        laravel({
            input: [
                'resources/assets/sass/styles.scss',
                // 'resources/css/main.css',
                'resources/js/app.js',
            ],
            refresh: false
            // refresh: [
            //     ...refreshPaths,
            //     'app/Http/Livewire/**',
            // ],
        }),
        livewire({  // Here we add it to the plugins
            refresh: [
                ...refreshPaths,
                'resources/assets/sass/styles.scss',
                'resources/js/app.js',
            ],
        }),
    ],
    server: detectServerConfig(host)
    /*resolve: {
        alias: {
            '~bootstrap': resolve(__dirname, 'node_modules/bootstrap'),
            '~vendorcss': resolve(__dirname, 'resources/css/vendor'),
            '~vendorjs': resolve(__dirname, 'resources/js'),
            '~font': resolve(__dirname, 'resources/font'),
            '~icon': resolve(__dirname, 'resources/icon'),
            '~image': resolve(__dirname, 'resources/img'),
            '~json': resolve(__dirname, 'resources/json'),
            '~themesass': resolve(__dirname, 'resources/sass'),
        }
    },*/
});

function detectServerConfig(host) {
    let keyPath = resolve(homedir(), "D:/Development/laragon/etc/ssl/laragon.key");
    let certificatePath = resolve(homedir(), "D:/Development/laragon/etc/ssl/laragon.crt");

    if (!fs.existsSync(keyPath)) {
        return {}
    }

    if (!fs.existsSync(certificatePath)) {
        return {}
    }

    return {
        hmr: {host},
        host,
        https: {
            key: fs.readFileSync(keyPath),
            cert: fs.readFileSync(certificatePath),
        },
    }
}
